import fs from "fs";
import path from "path";
import mkdirp from "mkdirp";
import AWS from "aws-sdk";

const s3 = new AWS.S3({
  region: process.env.KITA_AWS_REGION,
  accessKeyId: process.env.KITA_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.KITA_AWS_SECRET_ACCESS_KEY,
});

["public"].forEach((prefix) => {
  const listParams = {
    Bucket: process.env.KITA_S3_REPOSITORY,
    Prefix: prefix,
  };

  s3.listObjects(listParams)
    .promise()
    .then((data) => {
      data.Contents.forEach(({ Key }) => {
        const dir = Key.split("/");
        const file = path.join(process.cwd(), Key);

        dir.pop();

        const dirp = dir.join("/");

        mkdirp(dirp).then(() => {
          const getParams = {
            Key,
            Bucket: process.env.KITA_S3_REPOSITORY,
          };

          if (!fs.existsSync(file)) {
            s3.getObject(getParams)
              .promise()
              .then(({ Body }) => {
                fs.writeFile(file, Body, (error) => {
                  if (!error) {
                    console.log(`Wrote file ${file}`);
                  }
                });
              });
          } else {
            console.log(`File already downloaded ${file}`);
          }
        });
      });
    });
});
