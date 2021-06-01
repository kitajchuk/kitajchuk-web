const fs = require('fs');
const path = require('path');
const imageSize = require('image-size');

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

      return {
        dims: imgDims,
        src: imgSrc,
      };
    })
  };
}

export function getDrawingStaticPaths() {
  return readDirectory(path.join(process.cwd(), 'public/img/drawings')).map((slug) => {
    return {
      params: {
        slug,
      },
    };
  });
}

// Utility for getting desired size for use with next/image
export function getDesiredSize(width, height, desiredWidth) {
  const ratio = height / width;
  const desiredHeight = desiredWidth * ratio;

  return {
    width: desiredWidth,
    height: desiredHeight,
  };
}