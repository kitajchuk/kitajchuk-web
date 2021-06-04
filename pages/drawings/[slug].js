import Link from 'next/link';

import { nanoid } from 'nanoid';

import Layout from '../../components/layout';
import { withImageLoader } from '../../components/asyncimage';
import { Animate } from '../../components/animate';
import { readPublicImageDirectory, getPublicStaticPaths } from '../../lib/utils';

export default withImageLoader(({collection, paths}) => {
  return (
    <Layout title={collection.title}>
      <section className="drawings">
        <h1 className="drawings__title">{collection.title}</h1>
        <ul className="drawings__collection">
          {collection.images.map((img) => {
            return (
              <li key={nanoid()} className="drawings__collection__item">
                <Animate>
                  <img data-src={img.src} />
                </Animate>
              </li>
            );
          })}
        </ul>
        <nav className="drawings__navi">
          {paths.map((obj) => {
            return (
              <Link key={obj.params.slug} href={`/drawings/${obj.params.slug}`}>
                <a className="drawings__link">
                  {obj.params.slug}
                </a>
              </Link>
            );
          })}
        </nav>
      </section>
    </Layout>
  );
});

export async function getStaticPaths() {
  const paths = getPublicStaticPaths('drawings');

  paths.push({
    params: {
      slug: 'kickflip',
    },
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({params}) {
  const collection = readPublicImageDirectory(`drawings/${params.slug}`);
  const paths = getPublicStaticPaths('drawings').filter((obj) => obj.params.slug !== params.slug);

  paths.push({
    params: {
      slug: 'kickflip',
    },
  });

  return {
    props: {
      collection,
      paths,
    },
  };
}