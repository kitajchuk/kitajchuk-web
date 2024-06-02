import Layout from "@/components/layout";
import Image from "@/components/image";
import Preload from "@/components/preload";

import { getPublicImage } from "@/lib/utils";

export default function Page404({ image }) {
  return (
    <Layout>
      <Preload preload={[image.src]} />
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
  const image = await getPublicImage("kitajchuk_hollow.webp");

  return {
    props: {
      image,
    },
  };
}
