import Layout from "../../src/components/layout";
import Drawings from "../../src/components/drawings";
import {
  readPublicImageDirectory,
  getPublicStaticPaths,
} from "../../src/lib/utils";

export default function DrawingsPage({ collection, paths }) {
  return (
    <Layout title={collection.title} preload={[collection.images[0].src]}>
      <Drawings collection={collection} paths={paths} scope="Drawings" />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getPublicStaticPaths("drawings");

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const collection = await readPublicImageDirectory(`drawings/${params.slug}`);
  const paths = getPublicStaticPaths("drawings").filter(
    (obj) => obj.params.slug !== params.slug,
  );

  return {
    props: {
      collection,
      paths,
    },
  };
}
