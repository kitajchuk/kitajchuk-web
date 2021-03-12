const fs = require("fs");
const path = require("path");
const https = require("https");
// const _publicPath = path.join(__dirname, "../public/data");
const _publicPath = path.join(__dirname, "../public/tabi");

const downloadAsset = (type, urlKey, url) => {
  const urls = url.split("/");
  let fileName = urls.pop();
  if (fileName === "image-asset.png" || fileName === "image-asset.jpeg") {
    fileName = `${Date.now()}-${fileName}`;
  }
  const filePath = path.join(_publicPath, type, urlKey, fileName);
  const fileSave = fs.createWriteStream(filePath);
  const req = https.get(`${url}?format=original`, (res) => {
    res.pipe(fileSave);
    res.on("end", () => {
      console.log(`Saved image file: ${filePath}`);
    });
  });
};

const handleHtml = (type, urlKey, html) => {
  const rImage = html.match(/data-img-src=\"(.*?)\"/g);
  if (rImage && rImage.length) {
    rImage.forEach((rMatch) => {
      const imageUrl = rMatch.replace(/^data-img-src=\"|\"$/g, "");
      // console.log(imageUrl);
      downloadAsset(type, urlKey, imageUrl);
    });
  }
}

const handleItem = (type, urlKey, item) => {
  if (item.assetUrl) {
    downloadAsset(type, urlKey, item.assetUrl);
  }

  if (item.customContent && item.customContent.coverImage) {
    downloadAsset(type, urlKey, item.customContent.coverImage.assetUrl);
  }

  if (item.customContent && item.customContent.featureImage) {
    downloadAsset(type, urlKey, item.customContent.featureImage.assetUrl);
  }

  if (item.body) {
    handleHtml(type, urlKey, item.body);
  }

  if (item.items) {
    item.items.forEach((item_) => {
      handleItem(type, urlKey, item_);
    });
  }
};

module.exports = (type, urlKey, json) => {
  if (json.collection.mainImage) {
    downloadAsset(type, urlKey, json.collection.mainImage.assetUrl);
  }

  if (json.mainContent) {
    handleHtml(type, urlKey, json.mainContent);
  }

  if (json.items) {
    json.items.forEach((item) => {
      handleItem(type, urlKey, item);
    });
  }

  if (json.collection.collections) {
    json.collection.collections.forEach((collection) => {
      if (collection.mainImage) {
        downloadAsset(type, urlKey, collection.mainImage.assetUrl);
      }

      if (collection.items) {
        collection.items.forEach((item) => {
          handleItem(type, urlKey, item);
        });
      }
    });
  }
};