import Link from 'next/link';

import Layout from '../components/layout';
import AsyncImage from '../components/asyncimage';

export default function Home() {
  return (
    <Layout>
      <div className="hero">
        <Link href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/85885277127747774190152435853298320152829034178432236461929602506942526259201">
          <a className="cta" target="_blank" title="rainbow pp on opensea">
            <AsyncImage className="img" src="/img/nfts/Rainbow_PP.svg" />
          </a>
        </Link>
      </div>
    </Layout>
  );
}