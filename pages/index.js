import Layout from '../components/layout';
import AsyncImage from '../components/asyncimage';
import { getPublicStaticPaths, readPublicImageDirectory } from '../lib/utils';

export default function Home({images}) {
  const shuffled = images.sort(() => 0.5 - Math.random());
  const image = shuffled[Math.floor(Math.random() * images.length)];

  return (
    <Layout>
      <div className="hero hero--home">
        <AsyncImage src={image.src} />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const paths = getPublicStaticPaths('drawings').filter((obj) => {
    return /fallgirl|lost-kids/.test(obj.params.slug);
  });
  let images = [];

  paths.forEach((obj) => {
    const collection = readPublicImageDirectory(`drawings/${obj.params.slug}`);

    images = images.concat(collection.images);
  });

  return {
    props: {
      paths,
      images,
    },
  };
}