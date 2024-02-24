const fs = require("fs");
const mkdirp = require("mkdirp");
const sharp = require("sharp");
const shell = require("shelljs");

// Source images in local `data` directory -- ignored
const shellCmd = "find ./data -type f";
const shellOpts = { silent: true };

// The width for the `webp` versions
const imgMaxPortrait = 768 * 2;
const imgMaxLandscape = 1440 * 2;

// Viable local source image formats
const rImage = /\.(png|jpg|jpeg)$/;

// Shell out to `find` for quick recurse
const files = shell
  .exec(shellCmd, shellOpts)
  .stdout.split("\n")
  .filter((f) => rImage.test(f));

// Process each file for Next's public directory
files.forEach(async (file) => {
  // Trim filename to build directories
  const fileDir = file
    .split("/")
    .filter((s) => !rImage.test(s))
    .join("/");
  const pubDir = fileDir.replace("./data", "public");
  const isDir = fs.statSync(fileDir).isDirectory();

  if (isDir && !fs.existsSync(pubDir)) {
    await mkdirp(pubDir);
    console.log(`Making directory: ${pubDir}`);
  }

  // This is the file we will write as `webp` version
  const pubFile = file.replace("./data", "public");
  const outFile = pubFile.replace(rImage, ".webp");

  if (!fs.existsSync(outFile)) {
    const metadata = await sharp(file).metadata();
    const isPortrait = metadata.width < metadata.height;
    const targetSize = isPortrait ? imgMaxPortrait : imgMaxLandscape;
    const newWidth = metadata.width < targetSize ? metadata.width : targetSize;
    await sharp(file).resize(newWidth).toFile(outFile);
    console.log(`Making file: ${outFile} at ${newWidth}px ${isPortrait ? "portrait" : "landscape"}`);
  }
});
