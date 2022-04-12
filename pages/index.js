import Link from 'next/link';

import Layout from '../src/components/layout';
import Canvas from '../src/components/canvas';

import { getNFTMetadata } from '../src/lib/utils';

export default function Home({nft}) {
  return (
    <Layout>
      <div className="hero">
        <Link href="/kickflip/">
          <a className="cta" title="kickflip">
            <Canvas source="bw" />
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