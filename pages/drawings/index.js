import Link from "next/link";

import Layout from "../../src/components/layout";
import { getPublicStaticPaths } from "../../src/lib/utils";

export default function Drawings({ paths }) {
  return (
    <Layout title="drawings">
      <main className="drawings">
        <nav
          className="drawings__navi"
          aria-label="Drawing Category Navigation"
        >
          {paths.map((obj) => {
            return (
              <Link key={obj.params.slug} href={`/drawings/${obj.params.slug}`}>
                <a className="drawings__link">{obj.params.slug}</a>
              </Link>
            );
          })}
        </nav>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const paths = getPublicStaticPaths("drawings");

  return {
    props: {
      paths,
    },
  };
}
