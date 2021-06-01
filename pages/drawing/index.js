import Link from 'next/link';

import Layout from '../../components/layout';
import { withImageLoader } from '../../components/asyncimage';
import { getDrawingStaticPaths } from '../../lib/utils';

export default withImageLoader(({paths}) => {
  return (
    <Layout title="drawings">
      <div className="drawings">
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

export async function getStaticProps() {
  const paths = getDrawingStaticPaths();

  return {
    props: {
      paths,
    },
  };
}