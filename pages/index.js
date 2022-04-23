import Layout from '../src/components/layout';
import Image from '../src/components/image';

import { getPublicImage } from '../src/lib/utils';

export default function Home({image}) {
  return (
    <Layout preload={[image]}>
      <div className="hero">
        <Image
          src={image}
          alt="Hero Illustration"
          width="480"
          height="707"
          aspect={707 / 480 * 100}
          priority
          orientation="hero"
        />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const image = await getPublicImage('/kitajchuk_hero.png');

  return {
    props: {
      image,
    },
  };
}
