import Link from 'next/link';

import Layout from '../src/components/layout';
import LazyImage from '../src/components/lazyimage';

import { getNFTMetadata } from '../src/lib/utils';
import { pinService } from '../src/lib/site';

export default function Home({nft}) {
  return (
    <Layout>
      <div className="hero">
        <Link href={`/nfts/${nft.ipfsCid}/`}>
          <a className="cta" title={nft.name}>
            <LazyImage className="img svg" src={`${pinService}${nft.ipfsCid}`} />
          </a>
        </Link>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const nfts = getNFTMetadata();

  return {
    props: {
      nft: nfts[0],
    },
  };
}