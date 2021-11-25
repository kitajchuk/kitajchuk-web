import Link from 'next/link';

import { nanoid } from 'nanoid';

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
            <Link key={nanoid()} href={`/nfts/${nft.ipfs}`}>
              <a className="nft" title={nft.name}>
                <Animate>
                  <img data-src={`${pinService}${nft.ipfs}`} />
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