import Link from 'next/link';

import Layout from '../../components/layout';
import { withImageLoader } from '../../components/asyncimage';
import { getPublicStaticPaths } from '../../lib/utils';

export default withImageLoader(({paths}) => {
  return (
    <Layout title="comics">
      <section className="comics__books">
        <div>Free digital comics (PDF):</div>
        <div>
          <a href="/media/Tabi_No_Hana_Book_01.pdf" target="_blank">Tabi No Hana: A Flower for Every Time, Book 1</a>
        </div>
        <div>
          <a href="/media/Tabi_No_Hana_Prequel_01.pdf" target="_blank">Tabi No Hana: A Day in Her Life, Prequel 1</a>
        </div>
      </section>
      <section className="drawings">
        <nav className="drawings__navi">
          {paths.map((obj) => {
            return (
              <Link key={obj.params.slug} href={`/comics/${obj.params.slug}`}>
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
});

export async function getStaticProps() {
  const paths = getPublicStaticPaths('comics');

  return {
    props: {
      paths,
    },
  };
}