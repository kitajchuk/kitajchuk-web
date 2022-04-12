import Link from 'next/link';

import Layout from '../../src/components/layout';
import Canvas from '../../src/components/canvas';
import { getPublicStaticPaths } from '../../src/lib/utils';

export default function Kickflip({paths}) {
  return (
    <Layout title="kickflip">
      <section className="drawings">
        <h1 className="drawings__title">kickflip</h1>
        <div className="drawings__collection drawings__collection--wide">
          <Canvas source="retro" />
        </div>
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
}

export async function getStaticProps() {
  const paths = getPublicStaticPaths('drawings');

  return {
    props: {
      paths,
    },
  };
}