const fs = require('fs');
const path = require('path');
const imageSize = require('image-size');
const skipFolders = [
  'tabi-concept',
  'tabi-sketchbook',
  'bag-of-holding',
];

function readDirectory(dir) {
  return fs.readdirSync(dir).filter((file) => {
    return !/^\./.test(file);
  });
}

export function readPublicImageDirectory(key) {
  const fullPath = path.join(process.cwd(), `public/img/${key}`);

  return {
    title: key.split('/').pop(),
    images: readDirectory(fullPath).map((img) => {
      const imgPath = path.join(fullPath, img);
      const imgDims = imageSize(imgPath);
      const imgSrc = `/img/${key}/${img}`;
      const imgOrientation = imgDims.height > imgDims.width ? 'portrait' : 'landscape';

      // { src, dims { width, height, type } }
      return {
        orientation: imgOrientation,
        dims: imgDims,
        src: imgSrc,
      };
    })
  };
}

export function getPublicStaticPaths(scope) {
  return readDirectory(path.join(process.cwd(), `public/img/${scope}`))
    .filter((slug) => skipFolders.indexOf(slug) === -1)
    .map((slug) => {
      return {
        params: {
          slug,
        },
      };
    });
}