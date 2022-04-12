import Link from 'next/link';

import Layout from '../../src/components/layout';
import { Animate } from '../../src/components/animate';
import { useDarkMode } from '../../src/components/hooks';
import LazyImage from '../../src/components/lazyimage';
import { getNFTMetadata } from '../../src/lib/utils';
import { pinService } from '../../src/lib/site';

export default function NFTs({nfts}) {
  useDarkMode();

  return (
    <Layout title="nfts">
      <section className="nfts">
        {nfts.map((nft) => {
          return (
            <Link key={nft.tokenName} href={`/nfts/${nft.ipfsCid}`}>
              <a className="nft" title={nft.name}>
                <Animate>
                  <LazyImage src={`${pinService}${nft.ipfsCid}`} />
                </Animate>
              </a>
            </Link>
          );
        })}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const nfts = getNFTMetadata();

  return {
    props: {
      nfts,
    },
  };
}