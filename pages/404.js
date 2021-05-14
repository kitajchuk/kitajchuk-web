import Image from 'next/image';

import Layout from '../components/layout';
import { getDesiredSize } from '../lib/utils';

export default function Page404({size}) {
  return (
    <Layout>
      <div className="hero">
        <Image
          src="/img/kitajchuk_hollow.png"
          width={size.width}
          height={size.height}
          layout="intrinsic"
          priority={true}
          loading="eager"
        />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const size = getDesiredSize(1303, 1920, 480);

  return {
    props: {
      size,
    },
  };
}