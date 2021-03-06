const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");
const purge = require("./sqs-purge");
const parseImages = require("./sqs-parse-images");
const url = "https://www.kitajchuk.com/";
const pages = {
  page: [
    "contact",
    "reading",
    "colophon",
    "404",
  ],
  gallery: [
    "art",
    "dev",
    "fallgirl",
    "lost-kids",
    "fallgirl-20",
    "inktober-2019",
    "miscellaneous",
    "flamingos-cards",
  ],
  index: [
    "shop",
    "boxen",
    "clutch",
  ],
};
const fetchData = (type, urlKey) => {
  fetch(`${url}${urlKey}?format=json`, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((json) => {
      purge.forEach((prop) => {
        delete json[prop];
      });
      return json;
    })
    .then(
      (result) => {
        let dir = path.join(__dirname, `../data/${type}`);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir);
        }
        const file = path.join(dir, `${urlKey}.json`);
        fs.writeFileSync(file, JSON.stringify(result, null, 4));
        console.log(`Saved data file: ${file}`);

        dir = path.join(__dirname, `../public/data/${type}`);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir);
        }

        dir = path.join(__dirname, `../public/data/${type}/${urlKey}`);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir);
        }

        parseImages(type, urlKey, result);
      },
      (error) => {
        console.log("An error occurred:", error);
      }
    );
};

// Data directories...
const _dataPath = path.join(__dirname, "../data");
const _publicPath = path.join(__dirname, "../public/data");

if (!fs.existsSync(_dataPath)) {
  fs.mkdirSync(_dataPath);
}

if (!fs.existsSync(_publicPath)) {
  fs.mkdirSync(_publicPath);
}

for (let type in pages) {
  pages[type].forEach((urlKey) => {
    fetchData(type, urlKey);
  });
}