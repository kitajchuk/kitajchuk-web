const fs = require('fs');
const path = require('path');

function readDirectory(dir) {
  return fs.readdirSync(dir).filter((file) => {
    return !/^\./.test(file);
  });
}

export function readPublicImageDirectory(key) {
  const fullPath = path.join(process.cwd(), `public/img/${key}`);

  return {
    title: key.split('/').pop(),
    images: readDirectory(fullPath).map((img) => {
      return `/img/${key}/${img}`;
    })
  };
}