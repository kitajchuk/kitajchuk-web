import Drawings from "@/components/drawings";
import Preload from "@/components/preload";
import {
  getPublicStaticPaths,
  readPublicImageDirectory,
} from "@/lib/utils";

export async function generateMetadata({ params }) {
  return {
    title: params.slug,
  }
}

export async function generateStaticParams() {
  return getPublicStaticPaths("comics");
}

async function getPagePathsAndCollection(params) {
  const collection = await readPublicImageDirectory(`comics/${params.slug}`);
  const paths = getPublicStaticPaths("comics").filter(
    (obj) => obj.slug !== params.slug,
  );

  return {
    paths,
    collection,
  };
}

export default async function Page({ params }) {
  const { paths, collection } = await getPagePathsAndCollection(params);

  return (
    <>
      <Preload preload={[collection.images[0].src]} />
      <Drawings collection={collection} paths={paths} scope="Comics" />
    </>
  );
}
