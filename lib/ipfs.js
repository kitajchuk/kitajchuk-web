const fs = require('fs');
const path = require('path');
const IPFS = require('ipfs-core');
const imageSize = require('image-size');
const { readDirectory } = require('./utils');

(async () => {
  const ipfs = await IPFS.create();
  const nfts = [];

  const files = readDirectory(path.join(process.cwd(), 'public/img/nfts'));

  for (let i = 0; i < files.length; i++) {
    const file = path.join(process.cwd(), `public/img/nfts/${files[i]}`);
    const { cid } = await ipfs.add({
      path: file,
      content: fs.readFileSync(file),
    });
    const data = imageSize(file);
    const name = file.split('/').pop();

    nfts.push({
      name,
      data,
      ipfs: cid.toString(),
    });
  }

  await ipfs.stop();

  fs.writeFileSync(path.join(process.cwd(), 'metadata.json'), JSON.stringify(nfts, null, 2));

  process.exit(0);
})();