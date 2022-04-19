const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const imageSize = require('image-size');
const { portfolio } = require('./site');

function readDirectory(dir) {
  return fs.readdirSync(dir).filter((file) => {
    return !/^\.|\.webp$/.test(file);
  });
}

async function getPublicImage(img) {
  const imgPath = path.join(process.cwd(), `public/img/${img}`);
  const imgWebp = imgPath.replace(/\.(png|jpg|jpeg)$/, '.webp');
  const imgSrc = `/img/${img}`;

  
  // webp version of source
  if (!fs.existsSync(imgWebp)) {
    await sharp(imgPath)
      .resize(1440)
      .toFile(imgWebp);
  }
  
  return imgSrc.replace(/\.(png|jpg|jpeg)$/, '.webp');
}

async function readPublicImageDirectory(key) {
  const fullPath = path.join(process.cwd(), `public/img/${key}`);

  return {
    title: key.split('/').pop(),
    images: await Promise.all(readDirectory(fullPath).map(async (img) => {
      const imgPath = path.join(fullPath, img);
      const imgSrc = `/img/${key}/${img}`;
      const imgWebp = imgPath.replace(/\.(png|jpg|jpeg)$/, '.webp');

      // webp version of source
      if (!fs.existsSync(imgWebp)) {
        await sharp(imgPath)
          .resize(1440)
          .toFile(imgWebp);
      }
      
      const imgDims = imageSize(imgWebp);
      const imgOrientation = imgDims.height > imgDims.width ? 'portrait' : 'landscape';

      // { src, dims { width, height, type } }
      return {
        orientation: imgOrientation,
        aspect: imgDims.height / imgDims.width * 100,
        dims: imgDims,
        src: imgSrc.replace(/\.(png|jpg|jpeg)$/, '.webp'),
        alt: img,
      };
    }))
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
  getPublicImage,
  getNFTMetadata,
  getNFTStaticPaths,
  getPublicStaticPaths,
  readPublicImageDirectory,
};