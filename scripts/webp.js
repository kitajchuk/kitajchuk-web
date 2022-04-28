const fs = require('fs');
const mkdirp = require('mkdirp');
const sharp = require('sharp');
const shell = require('shelljs');

const rImage = /\.(png|jpg|jpeg)$/;

const files = shell
  .exec('find ./data -type f', { silent: true }).stdout
    .split('\n')
    .filter(f => rImage.test(f));

files.forEach(async (file) => {
  let outFile = file.replace('./data', 'public');
  outFile = outFile.replace(rImage, '.webp');

  let fileDir = file.split('/');
  fileDir.pop();
  fileDir = fileDir.join('/');
  const isDirectory = fs.statSync(fileDir).isDirectory();

  if (isDirectory) {
    await mkdirp(fileDir.replace('./data', 'public'));
    console.log(`Making directory for ${fileDir.replace('./data', 'public')}`);
  }

  if (!fs.existsSync(outFile)) {
    console.log(`Making file for ${outFile}`);
    await sharp(file)
      .resize(1440)
      .toFile(outFile);
  }
});