const fs = require('fs');
const path = require('path');
const imageSize = require('image-size');
const { portfolio } = require('./site');

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
  return portfolio[scope]
    .map((slug) => {
      return {
        params: {
          slug,
        },
      };
    });
}

function getNFTMetadata() {
  const nfts = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'nfts.json')))[0];

  return Object.keys(nfts).map((tokenName) => {
    return {
      ...nfts[tokenName],
      tokenName,
      ipfsCid: nfts[tokenName].image.split('/').pop(),
    };
  });
}

function getNFTStaticPaths() {
  const nfts = getNFTMetadata();
  
  return nfts.map((nft) => {
    return {
      params: {
        cid: nft.ipfsCid,
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