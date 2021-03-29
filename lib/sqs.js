const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");
const purge = require("./sqs-purge");
const parseImages = require("./sqs-parse-images");
const sqsSites = [
  {
    url: "https://www.kitajchuk.com/",
    dataPath: path.join(__dirname, "../data"),
    publicPath: path.join(__dirname, "../public/data"),
    pages: {
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
    },
  },
  {
    url: "https://www.tabinohana.com/",
    dataPath: path.join(__dirname, "../tabi"),
    publicPath: path.join(__dirname, "../public/tabi"),
    pages: {
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
    },
  },
];

// The data fetcher...
const fetchData = (site, type, urlKey) => {
  fetch(`${site.url}${urlKey}?format=json`, {
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
        let dir = path.join(site.dataPath, type);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir);
        }
        const file = path.join(dir, `${urlKey}.json`);
        fs.writeFileSync(file, JSON.stringify(result, null, 4));
        console.log(`Saved data file: ${file}`);

        dir = path.join(site.publicPath, type);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir);
        }

        dir = path.join(site.publicPath, type, urlKey);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir);
        }

        parseImages(site, type, urlKey, result);
      },
      (error) => {
        console.log("An error occurred:", error);
      }
    );
};

sqsSites.forEach((site) => {
  if (!fs.existsSync(site.dataPath)) {
    fs.mkdirSync(site.dataPath);
  }

  if (!fs.existsSync(site.publicPath)) {
    fs.mkdirSync(site.publicPath);
  }

  for (let type in site.pages) {
    site.pages[type].forEach((urlKey) => {
      fetchData(site, type, urlKey);
    });
  }
});