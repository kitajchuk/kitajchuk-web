import Layout from "../src/components/layout";
import Canvas from "../src/components/canvas";
import Preload from "../src/components/preload";
import { useDarkMode } from "../src/components/hooks";
import { readPublicImageDirectory } from "../src/lib/utils";

export default function Kickflip({ collection }) {
  useDarkMode();

  return (
    <Layout title="kickflip">
      <Preload preload={collection.images.map((img) => img.src)} />
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
