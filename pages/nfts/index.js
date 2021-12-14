import Link from 'next/link';

import Layout from '../../components/layout';
import { Animate } from '../../components/animate';
import { useNFTs } from '../../components/hooks';
import { withImageLoader } from '../../components/asyncimage';
import { getNFTMetadata } from '../../lib/utils';
import { pinService } from '../../lib/site';

export default withImageLoader(({nfts}) => {
  useNFTs();

  return (
    <Layout title="nfts">
      <section className="nfts">
        {nfts.map((nft) => {
          return (
            <Link key={nft.tokenName} href={`/nfts/${nft.ipfsCid}`}>
              <a className="nft" title={nft.name}>
                <Animate>
                  <img data-src={`${pinService}${nft.ipfsCid}`} />
                </Animate>
              </a>
            </Link>
          );
        })}
      </section>
    </Layout>
  );
});

export async function getStaticProps() {
  const nfts = getNFTMetadata();

  return {
    props: {
      nfts,
    },
  };
}