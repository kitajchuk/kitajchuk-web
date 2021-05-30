import { nanoid } from 'nanoid';

import Layout from '../../components/layout';
import { withImageLoader } from '../../components/asyncimage';
import { Animate } from '../../components/animate';
import { readPublicImageDirectory } from '../../lib/utils';

export default withImageLoader(({collections}) => {
  return (
    <Layout title="drawings">
      <div className="collections">
        <div className="poster">
          <Animate>
            <img data-src="/img/drawings/Kitajchuk_Play_Ball.png" />
          </Animate>
        </div>
        {collections.map((collection) => {
          return (
            <div className="collection-wrap" key={collection.title}>
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
          );
        })}
        <div className="poster">
          <Animate>
            <img data-src="/img/drawings/Scan2020-12-05_164450.png" />
          </Animate>
        </div>
        <ul className="diptych">
          <li className="diptych__item">
            <Animate>
              <img data-src="/img/drawings/Scan2020-11-01_135629.png" />
            </Animate>
          </li>
          <li className="diptych__item">
            <Animate>
              <img data-src="/img/drawings/Scan2020-12-05_164236.png" />
            </Animate>
          </li>
        </ul>
        <div className="poster">
          <Animate>
            <img data-src="/img/drawings/Scan2020-12-27_101021.png" />
          </Animate>
        </div>
      </div>
    </Layout>
  );
});

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