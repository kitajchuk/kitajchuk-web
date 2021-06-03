import { nanoid } from 'nanoid';

import Layout from '../../components/layout';
import { withImageLoader } from '../../components/asyncimage';
import { Animate } from '../../components/animate';
import { readPublicImageDirectory, getDrawingStaticPaths } from '../../lib/utils';

export default withImageLoader(({collection}) => {
  return (
    <Layout title={collection.title}>
      <div className="drawings">
        <div className="drawings__wrap">
          <p className="title">{collection.title}</p>
          <ul className="collection">
            {collection.images.map((img) => {
              // img { src, dims { width, height, type } }
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

  return {
    props: {
      collection,
    },
  };
}