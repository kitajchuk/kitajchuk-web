import fs from "fs";
import path from "path";
import { portfolio } from "../src/_data/site.js";
import { imageSizeFromFile } from "image-size/fromFile";

function readDirectory(dir) {
  return fs.readdirSync(dir).filter((file) => {
    return !/^\./.test(file);
  }).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}

async function getImageFromPath(imgPath) {
  const imgSrc = `/img/${imgPath}`;
  const filePath = path.join(process.cwd(), `public/img/${imgPath}`);
  const imgSize = await imageSizeFromFile(filePath);
  const imgOrientation =
    imgSize.height > imgSize.width ? "portrait" : "landscape";

  return {
    alt: "",
    src: imgSrc,
    width: imgSize.width,
    height: imgSize.height,
    aspect: (imgSize.height / imgSize.width) * 100,
    orientation: imgOrientation,
  };
}

export function getPublicStaticPaths(scope) {
  return portfolio[scope].map((slug) => {
    return { slug };
  });
}

export async function getPublicImage(key) {
  const imgData = await getImageFromPath(key);
  return imgData;
}

export async function getPublicImageCollection(key) {
  const title = key.split("/").pop();
  const folderPath = path.join(process.cwd(), `public/img/${key}`);

  return {
    title,
    images: await Promise.all(
      readDirectory(folderPath).map(async (img) => {
        const imgData = await getImageFromPath(`${key}/${img}`);
        return imgData;
      }),
    ),
  };
}
