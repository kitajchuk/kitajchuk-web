import Layout from "@/components/layout";
import Canvas from "@/components/canvas";
import Preload from "@/components/preload";
import { useDarkMode } from "@/components/hooks";
import { readPublicImageDirectory } from "@/lib/utils";

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
