const fs = require('fs');
const path = require('path');
const axios = require('axios');
const IPFS = require('ipfs-core');
const imageSize = require('image-size');
const { getNFTMetadata } = require('./utils');
const api = 'https://api.nft-maker.io';

(async () => {
  let response;

  const ipfs = await IPFS.create();
  const nfts = getNFTMetadata();
  
  response = await axios.get(`${api}/ListProjects/${process.env.NFT_MAKER_API_KEY}`);

  const project = response.data[0];

  for (let i = nfts.length; i--;) {
    const nft = nfts[i];
    const file = path.join(process.cwd(), `public/img/nfts/${nft.file}`);
    const { cid } = await ipfs.add({
      content: fs.readFileSync(file),
    });
    const data = imageSize(file);

    if (nft.uuid) {
      console.log(nft);
    } else {
      response = await axios.post(`${api}/UploadNft/${process.env.NFT_MAKER_API_KEY}/${project.id}`, {
        assetName: nft.name,
        previewImageNft: {
          mimetype: `image/${data.type}`,
          fileFromIPFS: cid.toString(),
          description: nft.name,
          displayname: nft.name,
        },
      }).catch((error) => {
        console.log(error.response.data);
      });

      console.log(response.data);

      nfts[i] = {
        ...nft,
        data,
        ipfs: cid.toString(),
        uuid: response.data.nftId,
      };
    }
  }

  await ipfs.stop();

  fs.writeFileSync(path.join(process.cwd(), 'metadata.json'), JSON.stringify(nfts.reverse(), null, 2));

  process.exit(0);
})();