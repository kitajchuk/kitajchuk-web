import Link from 'next/link';

import Layout from '../components/layout';
import AsyncImage from '../components/asyncimage';
import { pinService } from '../lib/site';

export default function Home() {
  return (
    <Layout>
      <div className="hero">
        <Link href="/nfts/QmQxaE9xwyysr82NyLwxNWF2D1HUTndzFnkH38UPBkSZEa/">
          <a className="cta" title="rainbow pp token">
            <AsyncImage className="img svg" src={`${pinService}QmQxaE9xwyysr82NyLwxNWF2D1HUTndzFnkH38UPBkSZEa`} />
          </a>
        </Link>
      </div>
    </Layout>
  );
}