import Layout from '../src/components/layout';
import Image from '../src/components/image';

import { getPublicImage } from '../src/lib/utils';

export default function Page404({image}) {
  return (
    <Layout preload={[image]}>
      <div className="hero">
        <Image
          src={image}
          alt="Hollow Illustration"
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
  const image = await getPublicImage('/kitajchuk_hollow.png');

  return {
    props: {
      image,
    },
  };
}
