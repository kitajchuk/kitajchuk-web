import Link from 'next/link';

import Layout from '../components/layout';
import AsyncImage from '../components/asyncimage';
import { getNFTMetadata } from '../lib/utils';
import { pinService } from '../lib/site';

export default function Home({nft}) {
  return (
    <Layout>
      <div className="hero">
        <Link href={`/nfts/${nft.ipfsCid}/`}>
          <a className="cta" title={nft.name}>
            <AsyncImage className="img svg" src={`${pinService}${nft.ipfsCid}`} />
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