import Link from 'next/link';

import Layout from '../../src/components/layout';
import { getPublicStaticPaths } from '../../src/lib/utils';

export default function Drawings({paths}) {
  return (
    <Layout title="drawings">
      <section className="drawings">
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

  paths.push({
    params: {
      slug: 'kickflip',
    },
  });

  return {
    props: {
      paths,
    },
  };
}