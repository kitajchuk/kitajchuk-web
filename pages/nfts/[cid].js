import Layout from '../../src/components/layout';
import { Animate } from '../../src/components/animate';
import { useDarkMode } from '../../src/components/hooks';
import LazyImage from '../../src/components/lazyimage';
import { getNFTMetadata, getNFTStaticPaths } from '../../src/lib/utils';
import { pinService } from '../../src/lib/site';

export default function NFTs({nft}) {
  useDarkMode();

  return (
    <Layout title={nft.tokenName} preload={[`${pinService}${nft.ipfsCid}`]}>
      <section className="nfts">
        <div className="nft">
          <Animate>
            <LazyImage src={`${pinService}${nft.ipfsCid}`} width="640" height="640" alt={nft.name} priority />
            <div className="nft__metadata m">
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