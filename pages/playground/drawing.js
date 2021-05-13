import { nanoid } from 'nanoid';

import Layout from '../../components/layout';
import AsyncImage from '../../components/asyncimage';
import { readPublicImageDirectory } from '../../lib/utils';

export default function Drawing({collections}) {
  return (
    <Layout title="drawings">
      <div className="collections">
        <div className="poster">
          <AsyncImage src="/img/drawings/Kitajchuk_Play_Ball.png" />
        </div>
        {collections.map((collection) => {
          return (
            <>
              <div className="title">{collection.title}</div>
              <ul key={collection.title} className="collection">
                {collection.images.map((img) => {
                  return (
                    <li key={nanoid()} className="collection__item">
                      <AsyncImage src={img} />
                    </li>
                  );
                })}
              </ul>
            </>
          );
        })}
        <div className="poster">
          <AsyncImage src="/img/drawings/Scan2020-12-05_164450.png" />
        </div>
        <ul className="diptych">
          <li className="diptych__item">
            <AsyncImage src="/img/drawings/Scan2020-11-01_135629.png" />
          </li>
          <li className="diptych__item">
            <AsyncImage src="/img/drawings/Scan2020-12-05_164236.png" />
          </li>
        </ul>
        <div className="poster">
          <AsyncImage src="/img/drawings/Scan2020-12-27_101021.png" />
        </div>
      </div>
    </Layout>
  );
}

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