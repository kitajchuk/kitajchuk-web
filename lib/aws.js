const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const AWS = require('aws-sdk');
const s3 = new AWS.S3({
  region: process.env.KITA_AWS_REGION,
  accessKeyId: process.env.KITA_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.KITA_AWS_SECRET_ACCESS_KEY,
});

['public'].forEach((prefix) => {
  const listParams = {
    Bucket: process.env.KITA_S3_REPOSITORY,
    Prefix: prefix,
  };

  s3.listObjects(listParams).promise().then((data) => {
    data.Contents.forEach((listObj) => {
      const file = path.join(process.cwd(), listObj.Key);
      let dir = listObj.Key.split('/');

      dir.pop();
      dir = dir.join('/');

      mkdirp(dir).then(() => {
        const getParams = {
          Bucket: process.env.KITA_S3_REPOSITORY,
          Key: listObj.Key,
        };

        if (!fs.existsSync(file)) {
          s3.getObject(getParams).promise().then((getObj) => {
            fs.writeFile(file, getObj.Body, (error) => {
              if (!error) {
                console.log(`Wrote file ${listObj.Key}`);
              }
            });
          });

        } else {
          console.log(`File already downloaded ${listObj.Key}`);
        }
      });
    });
  });
});