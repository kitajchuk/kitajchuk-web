const fs = require('fs');
const path = require('path');
const IPFS = require('ipfs-core');
const imageSize = require('image-size');
const { getNFTMetadata } = require('./utils');

(async () => {
  const ipfs = await IPFS.create();
  const nfts = getNFTMetadata();

  for (let i = nfts.length; i--;) {
    const file = path.join(process.cwd(), `public/img/nfts/${nfts[i].file}`);
    const { cid } = await ipfs.add({
      content: fs.readFileSync(file),
    });
    const data = imageSize(file);

    nfts[i] = {
      ...nfts[i],
      data,
      ipfs: cid.toString(),
    };
  }

  await ipfs.stop();

  fs.writeFileSync(path.join(process.cwd(), 'metadata.json'), JSON.stringify(nfts.reverse(), null, 2));

  process.exit(0);
})();