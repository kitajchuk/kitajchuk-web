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
          priority
          className="img"
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
