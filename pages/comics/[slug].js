import Layout from "@/components/layout";
import Drawings from "@/components/drawings";
import Preload from "@/components/preload";
import {
  readPublicImageDirectory,
  getPublicStaticPaths,
} from "@/lib/utils";

export default function Comics({ collection, paths }) {
  return (
    <Layout title={collection.title}>
      <Preload preload={[collection.images[0].src]} />
      <Drawings collection={collection} paths={paths} scope="Comics" />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getPublicStaticPaths("comics");

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const collection = await readPublicImageDirectory(`comics/${params.slug}`);
  const paths = getPublicStaticPaths("comics").filter(
    (obj) => obj.params.slug !== params.slug,
  );

  return {
    props: {
      collection,
      paths,
    },
  };
}
