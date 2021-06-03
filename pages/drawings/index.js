import Link from 'next/link';

import Layout from '../../components/layout';
import { withImageLoader } from '../../components/asyncimage';
import { getPublicStaticPaths } from '../../lib/utils';

export default withImageLoader(({paths}) => {
  return (
    <Layout title="drawings">
      <div className="drawings">
        {paths.map((obj) => {
          return (
            <Link key={obj.params.slug} href={`/drawings/${obj.params.slug}`}>
              <a className="drawings__link">
                {obj.params.slug}
              </a>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
});

export async function getStaticProps() {
  const paths = getPublicStaticPaths('drawings');

  return {
    props: {
      paths,
    },
  };
}