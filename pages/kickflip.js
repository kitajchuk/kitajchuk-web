import Layout from '../src/components/layout';
import Canvas from '../src/components/canvas';
import { useDarkMode } from '../src/components/hooks';
import { getPublicStaticPaths } from '../src/lib/utils';

export default function Kickflip({paths}) {
  useDarkMode();

  return (
    <Layout title="kickflip">
      <Canvas source="retro" />
    </Layout>
  );
}

export async function getStaticProps() {
  const paths = getPublicStaticPaths('drawings');

  return {
    props: {
      paths,
    },
  };
}