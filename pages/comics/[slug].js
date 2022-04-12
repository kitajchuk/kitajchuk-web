import Link from 'next/link';

import { nanoid } from 'nanoid';

import Layout from '../../src/components/layout';
import LazyImage from '../../src/components/lazyimage';
import { Animate } from '../../src/components/animate';
import { readPublicImageDirectory, getPublicStaticPaths } from '../../src/lib/utils';

export default function Comics({collection, paths}) {
  return (
    <Layout title={collection.title}>
      <section className="drawings">
        <h1 className="drawings__title">{collection.title}</h1>
        <ul className="drawings__collection drawings__collection--wide">
          {collection.images.map((img) => {
            return (
              <li key={nanoid()} className="drawings__collection__item">
                <Animate>
                  <LazyImage className={img.orientation} src={img.src} />
                </Animate>
              </li>
            );
          })}
        </ul>
        <nav className="drawings__navi">
          {paths.map((obj) => {
            return (
              <Link key={obj.params.slug} href={`/comics/${obj.params.slug}`}>
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