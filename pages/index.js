import Layout from '../src/components/layout';
import Image from '../src/components/image';

import { getPublicImage } from '../src/lib/utils';

export default function Home({image}) {
  return (
    <Layout preload={[image]}>
      <div className="hero">
        <Image
          src={image}
          alt="Falling Illustration"
          width="480"
          height="771"
          aspect={771 / 480 * 100}
          priority
          orientation="hero"
        />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const image = await getPublicImage('/kitajchuk_falling.png');

  return {
    props: {
      image,
    },
  };
}
