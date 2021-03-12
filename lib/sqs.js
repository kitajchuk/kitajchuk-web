const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");
const purge = require("./sqs-purge");
const parseImages = require("./sqs-parse-images");
// const url = "https://www.kitajchuk.com/";
// const pages = {
//   page: [
//     "contact",
//     "reading",
//     "colophon",
//     "404",
//   ],
//   gallery: [
//     "art",
//     "dev",
//     "fallgirl",
//     "lost-kids",
//     "fallgirl-20",
//     "inktober-2019",
//     "miscellaneous",
//     "flamingos-cards",
//   ],
//   index: [
//     "shop",
//     "boxen",
//     "clutch",
//   ],
// };
// const _dataPath = path.join(__dirname, "../data");
// const _publicPath = path.join(__dirname, "../public/data");
const url = "https://www.tabinohana.com/";
const pages = {
  page: [],
  gallery: [
    "support",
  ],
  product: [
    "store",
  ],
  index: [
    "cast",
    "extras",
    "tabi",
  ],
};
const _dataPath = path.join(__dirname, "../tabi");
const _publicPath = path.join(__dirname, "../public/tabi");

// The data fetcher...
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
        let dir = path.join(_dataPath, type);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir);
        }
        const file = path.join(dir, `${urlKey}.json`);
        fs.writeFileSync(file, JSON.stringify(result, null, 4));
        console.log(`Saved data file: ${file}`);

        dir = path.join(_publicPath, type);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir);
        }

        dir = path.join(_publicPath, type, urlKey);
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