import { nanoid } from 'nanoid';

import Layout from '../../components/layout';
import { withImageLoader } from '../../components/asyncimage';
import { withAnimate } from '../../components/animate';
import { readPublicImageDirectory } from '../../lib/utils';

const Animate = withAnimate(({src}) => {
  return <img data-src={src} />;
});

const Drawing = withImageLoader(({collections}) => {
  return (
    <Layout title="drawings">
      <div className="collections">
        <div className="poster">
          <Animate src="/img/drawings/Kitajchuk_Play_Ball.png" />
        </div>
        {collections.map((collection) => {
          return (
            <>
              <p className="title">{collection.title}</p>
              <ul key={collection.title} className="collection">
                {collection.images.map((img) => {
                  return (
                    <li key={nanoid()} className="collection__item">
                      <Animate src={img} />
                    </li>
                  );
                })}
              </ul>
            </>
          );
        })}
        <div className="poster">
          <Animate src="/img/drawings/Scan2020-12-05_164450.png" />
        </div>
        <ul className="diptych">
          <li className="diptych__item">
            <Animate src="/img/drawings/Scan2020-11-01_135629.png" />
          </li>
          <li className="diptych__item">
            <Animate src="/img/drawings/Scan2020-12-05_164236.png" />
          </li>
        </ul>
        <div className="poster">
          <Animate src="/img/drawings/Scan2020-12-27_101021.png" />
        </div>
      </div>
    </Layout>
  );
});

export default Drawing;

export async function getStaticProps() {
  const collections = [
    readPublicImageDirectory('drawings/lost-kids'),
    readPublicImageDirectory('drawings/fallgirl-2.0'),
    readPublicImageDirectory('drawings/fallgirl'),
    readPublicImageDirectory('drawings/miscellaneous'),
  ];

  return {
    props: {
      collections,
    },
  };
}