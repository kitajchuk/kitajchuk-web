import Link from 'next/link';

import Layout from '../../src/components/layout';
import { Animate } from '../../src/components/animate';
import { useDarkMode } from '../../src/components/hooks';
import Image from '../../src/components/image';
import { getNFTMetadata } from '../../src/lib/utils';
import { pinService } from '../../src/lib/site';

export default function NFTs({nfts}) {
  useDarkMode();

  return (
    <Layout title="nfts" preload={[`${pinService}${nfts[0].ipfsCid}`]}>
      <section className="nfts">
        {nfts.map((nft, i) => {
          return (
            <Link key={nft.tokenName} href={`/nfts/${nft.ipfsCid}`}>
              <a className="nft" title={nft.name}>
                <Animate>
                  <Image
                    src={`${pinService}${nft.ipfsCid}`}
                    alt={nft.name}
                    width="640"
                    height="640"
                    priority={i === 0}
                  />
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