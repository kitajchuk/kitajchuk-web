const fs = require("fs");
const path = require("path");
const imageSize = require("image-size");
const { portfolio } = require("@/lib/site");

function readDirectory(dir) {
  return fs.readdirSync(dir).filter((file) => {
    return !/^\./.test(file);
  });
}

async function getPublicImage(key) {
  const imgPath = path.join(process.cwd(), `public/img/${key}`);
  const imgSrc = `/img/${key}`;
  const imgDims = imageSize(imgPath);
  const imgOrientation =
    imgDims.height > imgDims.width ? "portrait" : "landscape";

  // { src, dims { width, height, type } }
  return {
    orientation: imgOrientation,
    aspect: (imgDims.height / imgDims.width) * 100,
    dims: imgDims,
    src: imgSrc,
    alt: key,
  };
}

async function readPublicImageDirectory(key) {
  const fullPath = path.join(process.cwd(), `public/img/${key}`);

  return {
    title: key.split("/").pop(),
    images: await Promise.all(
      readDirectory(fullPath).map(async (img) => {
        const imgPath = path.join(fullPath, img);
        const imgSrc = `/img/${key}/${img}`;
        const imgDims = imageSize(imgPath);
        const imgOrientation =
          imgDims.height > imgDims.width ? "portrait" : "landscape";

        // { src, dims { width, height, type } }
        return {
          orientation: imgOrientation,
          aspect: (imgDims.height / imgDims.width) * 100,
          dims: imgDims,
          src: imgSrc,
          alt: img,
        };
      }),
    ),
  };
}

// Updated for use with Next.js app router API
function getPublicStaticPaths(scope) {
  return portfolio[scope].map((slug) => {
    return { slug };
  });
}

module.exports = {
  readDirectory,
  getPublicImage,
  getPublicStaticPaths,
  readPublicImageDirectory,
};
