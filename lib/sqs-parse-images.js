const fs = require("fs");
const path = require("path");
const https = require("https");

const downloadAsset = (site, type, urlKey, url) => {
  const urls = url.split("/");
  let fileName = urls.pop();
  if (fileName === "image-asset.png" || fileName === "image-asset.jpeg") {
    fileName = `${Date.now()}-${fileName}`;
  }
  const filePath = path.join(site.publicPath, type, urlKey, fileName);
  const fileSave = fs.createWriteStream(filePath);
  const req = https.get(`${url}?format=original`, (res) => {
    res.pipe(fileSave);
    res.on("end", () => {
      console.log(`Saved image file: ${filePath}`);
    });
  });
};

const handleHtml = (site, type, urlKey, html) => {
  const rImage = html.match(/data-img-src=\"(.*?)\"/g);
  if (rImage && rImage.length) {
    rImage.forEach((rMatch) => {
      const imageUrl = rMatch.replace(/^data-img-src=\"|\"$/g, "");
      // console.log(imageUrl);
      if (imageUrl) {
        downloadAsset(site, type, urlKey, imageUrl);
      }
    });
  }
}

const handleItem = (site, type, urlKey, item) => {
  if (item.assetUrl) {
    downloadAsset(site, type, urlKey, item.assetUrl);
  }

  if (item.customContent && item.customContent.coverImage && item.customContent.coverImage.assetUrl) {
    downloadAsset(site, type, urlKey, item.customContent.coverImage.assetUrl);
  }

  if (item.customContent && item.customContent.featureImage && item.customContent.featureImage.assetUrl) {
    downloadAsset(site, type, urlKey, item.customContent.featureImage.assetUrl);
  }

  if (item.body) {
    handleHtml(site, type, urlKey, item.body);
  }

  if (item.items) {
    item.items.forEach((item_) => {
      handleItem(site, type, urlKey, item_);
    });
  }
};

module.exports = (site, type, urlKey, json) => {
  if (json.collection.mainImage && json.collection.mainImage.assetUrl) {
    downloadAsset(site, type, urlKey, json.collection.mainImage.assetUrl);
  }

  if (json.mainContent) {
    handleHtml(site, type, urlKey, json.mainContent);
  }

  if (json.items) {
    json.items.forEach((item) => {
      handleItem(site, type, urlKey, item);
    });
  }

  if (json.collection.collections) {
    json.collection.collections.forEach((collection) => {
      if (collection.mainImage && collection.mainImage.assetUrl) {
        downloadAsset(site, type, urlKey, collection.mainImage.assetUrl);
      }

      if (collection.items) {
        collection.items.forEach((item) => {
          handleItem(site, type, urlKey, item);
        });
      }
    });
  }
};