import Layout from '../../components/layout';
import { Animate } from '../../components/animate';
import { useNFTs } from '../../components/hooks';
import LazyImage from '../../components/lazyimage';
import { getNFTMetadata, getNFTStaticPaths } from '../../lib/utils';
import { pinService } from '../../lib/site';

export default function NFTs({nft}) {
  useNFTs();

  return (
    <Layout title={nft.tokenName}>
      <section className="nfts">
        <div className="nft">
          <Animate>
            <LazyImage src={`${pinService}${nft.ipfsCid}`} />
            <div className="nft__metadata">
              <div>{nft.tokenName} NFT</div>
              <div>{nft.name}</div>
              <div>{nft.type}</div>
            </div>
          </Animate>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getNFTStaticPaths();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({params}) {
  const nfts = getNFTMetadata();
  const nft = nfts.find((obj) => obj.ipfsCid === params.cid);

  return {
    props: {
      nft,
    },
  };
}