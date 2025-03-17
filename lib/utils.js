import fs from "fs";
import path from "path";
import { portfolio } from "../src/_data/site.js";
import { imageSizeFromFile } from "image-size/fromFile";

function readDirectory(dir) {
  return fs.readdirSync(dir).filter((file) => {
    return !/^\./.test(file);
  }).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}

async function getPublicImage(key) {
  const imgPath = path.join(process.cwd(), `public/img/${key}`);
  const imgSrc = `/img/${key}`;
  const imgDims = await imageSizeFromFile(imgPath);
  const imgOrientation =
    imgDims.height > imgDims.width ? "portrait" : "landscape";

  // { src, dims { width, height, type } }
  return {
    orientation: imgOrientation,
    aspect: (imgDims.height / imgDims.width) * 100,
    height: imgDims.height,
    width: imgDims.width,
    src: imgSrc,
    uid: key,
    alt: "",
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
        const imgDims = await imageSizeFromFile(imgPath);
        const imgOrientation =
          imgDims.height > imgDims.width ? "portrait" : "landscape";

        // { src, dims { width, height, type } }
        return {
          orientation: imgOrientation,
          aspect: (imgDims.height / imgDims.width) * 100,
          height: imgDims.height,
          width: imgDims.width,
          src: imgSrc,
          uid: img,
          alt: "",
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

export {
  readDirectory,
  getPublicImage,
  getPublicStaticPaths,
  readPublicImageDirectory,
};
