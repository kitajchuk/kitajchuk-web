import Link from 'next/link';

import { nanoid } from 'nanoid';

import Layout from '../../components/layout';
import { withImageLoader } from '../../components/asyncimage';
import { Animate } from '../../components/animate';
import { readPublicImageDirectory, getDrawingStaticPaths } from '../../lib/utils';

export default withImageLoader(({collection, paths}) => {
  return (
    <Layout title={collection.title}>
      <div className="drawings">
        <div className="drawings__wrap">
          <p className="title">{collection.title}</p>
          <ul className="collection">
            {collection.images.map((img) => {
              return (
                <li key={nanoid()} className="collection__item">
                  <Animate>
                    <img data-src={img.src} />
                  </Animate>
                </li>
              );
            })}
          </ul>
        </div>
        {paths.map((obj) => {
          return (
            <Link key={obj.params.slug} href={`/drawing/${obj.params.slug}`}>
              <a className="link">
                {obj.params.slug}
              </a>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
});

export async function getStaticPaths() {
  const paths = getDrawingStaticPaths();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({params}) {
  const collection = readPublicImageDirectory(`drawings/${params.slug}`);
  const paths = getDrawingStaticPaths().filter((obj) => obj.params.slug !== params.slug);

  return {
    props: {
      collection,
      paths,
    },
  };
}