import Layout from '../../src/components/layout';
import Drawings from '../../src/components/drawings';
import { readPublicImageDirectory, getPublicStaticPaths } from '../../src/lib/utils';

export default function Comics({collection, paths}) {
  return (
    <Layout title={collection.title}>
      <Drawings collection={collection} paths={paths} scope="comics" />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getPublicStaticPaths('comics');

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({params}) {
  const collection = readPublicImageDirectory(`comics/${params.slug}`);
  const paths = getPublicStaticPaths('comics').filter((obj) => obj.params.slug !== params.slug);

  return {
    props: {
      collection,
      paths,
    },
  };
}