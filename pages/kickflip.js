import Layout from "../src/components/layout";
import Canvas from "../src/components/canvas";
import { useDarkMode } from "../src/components/hooks";
import { readPublicImageDirectory } from "../src/lib/utils";

export default function Kickflip({ collection }) {
  useDarkMode();

  return (
    <Layout title="kickflip" preload={collection.images.map((img) => img.src)}>
      <Canvas source="retro" />
    </Layout>
  );
}

export async function getStaticProps() {
  const collection = await readPublicImageDirectory("kickflip/retro");

  return {
    props: {
      collection,
    },
  };
}
