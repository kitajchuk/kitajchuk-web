import Link from 'next/link';

import Layout from '../src/components/layout';
import Canvas from '../src/components/canvas';

import { readPublicImageDirectory } from '../src/lib/utils';

export default function Home({collection}) {
  return (
    <Layout preload={collection.images.map(img => img.src)}>
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
  const collection = readPublicImageDirectory('kickflip/bw');

  return {
    props: {
      collection,
    },
  };
}