const fs = require('fs');
const path = require('path');
const imageSize = require('image-size');
const skipFolders = [
  'posters',
  'tabi-cards',
  'tabi-concept',
  'knutson-kids',
  'bag-of-holding',
  'random-digital',
  'tabi-sketchbook',
];

function readDirectory(dir) {
  return fs.readdirSync(dir).filter((file) => {
    return !/^\./.test(file);
  });
}

function readPublicImageDirectory(key) {
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

function getPublicStaticPaths(scope) {
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

function getNFTMetadata() {
  return JSON.parse(fs.readFileSync(path.join(process.cwd(), 'metadata.json')));
}

function getNFTStaticPaths() {
  const metadata = getNFTMetadata();
  
  return metadata.map((nft) => {
    return {
      params: {
        cid: nft.ipfs,
      },
    };
  });
}

module.exports = {
  readDirectory,
  getNFTMetadata,
  getNFTStaticPaths,
  getPublicStaticPaths,
  readPublicImageDirectory,
};