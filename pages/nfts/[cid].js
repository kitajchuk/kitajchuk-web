import Layout from '../../components/layout';
import { Animate } from '../../components/animate';
import { useNFTs } from '../../components/hooks';
import { withImageLoader } from '../../components/asyncimage';
import { getNFTMetadata, getNFTStaticPaths } from '../../lib/utils';

export default withImageLoader(({nft}) => {
  useNFTs();

  return (
    <Layout title={nft.name}>
      <section className="nfts">
        <div className="nft">
          <Animate>
            <img data-src={`/img/nfts/${nft.name}`} />
            <div className="nft__metadata">
              <div>{nft.name}</div>
              <div>{`${nft.data.width}px X ${nft.data.height}px, ${nft.data.type}`}</div>
              <div>IPFS: {nft.ipfs}</div>
            </div>
          </Animate>
        </div>
      </section>
    </Layout>
  );
});

export async function getStaticPaths() {
  const paths = getNFTStaticPaths();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({params}) {
  const nfts = getNFTMetadata();
  const nft = nfts.find((obj) => obj.ipfs === params.cid);

  return {
    props: {
      nft,
    },
  };
}