import Link from 'next/link';

import Layout from '../../src/components/layout';
import { getPublicStaticPaths } from '../../src/lib/utils';

export default function Comics({paths}) {
  return (
    <Layout title="comics">
      <section className="comics__books">
        <p>Tabi No Hana comics (PDF):</p>
        <p>
          <a href="/media/Tabi_No_Hana_Book_01.pdf" target="_blank">A Flower for Every Time, Book 1</a>
        </p>
        <p>
          <a href="/media/Tabi_No_Hana_Prequel_01.pdf" target="_blank">A Day in Her Life, Prequel 1</a>
        </p>
      </section>
      <section className="comics__text">
        <p>
          The prequel comic is complete, however the inside cover has placeholder text because we had to pause work on Tabi for now. 
          The original Tabi comic and the first graphic novel were funded on Kickstarter <a href="https://www.kickstarter.com/projects/1086577669/tabi-no-hana-issue-1-in-all-its-forms" target="_blank" rel="noreferrer">here</a> and <a href="https://www.kickstarter.com/projects/1086577669/tabi-no-hana-the-next-adventures" target="_blank" rel="noreferrer">here</a>. 
          The links on this page represent the original ink drawings for the Tabi comics without letters or colors. 
          I hope one day to return to Tabi and to work on some other comic projects. 
          In the meantime I typically manage to post illustrations periodically to my <Link href="/drawings/"><a>drawings</a></Link>.
        </p>
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
}

export async function getStaticProps() {
  const paths = getPublicStaticPaths('comics');

  return {
    props: {
      paths,
    },
  };
}