import Layout from "../src/components/layout";
import Image from "../src/components/image";

import { getPublicImage } from "../src/lib/utils";

export default function Home({ image }) {
  return (
    <Layout preload={[image.src]}>
      <main className="hero">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.dims.width}
          height={image.dims.height}
          aspect={image.aspect}
          priority
          orientation="hero"
        />
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const image = await getPublicImage("kitajchuk_hero.webp");

  return {
    props: {
      image,
    },
  };
}
