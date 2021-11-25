import Link from 'next/link';

import Layout from '../components/layout';
import AsyncImage from '../components/asyncimage';

export default function Home() {
  return (
    <Layout>
      <div className="hero">
        <Link href="/nfts/QmedMWEUdMz8s4WFEUqfvRJ4ZQR1MMEXPQbVjL3pFSE5F5/">
          <a className="cta" title="rainbow pp token">
            <AsyncImage className="img" src="/img/nfts/Rainbow_PP.svg" />
          </a>
        </Link>
      </div>
    </Layout>
  );
}