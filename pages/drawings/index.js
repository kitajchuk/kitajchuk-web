import Link from "next/link";

import Layout from "../../src/components/layout";
import { DrawingsNavi } from "../../src/components/drawings";
import { getPublicStaticPaths } from "../../src/lib/utils";

export default function Drawings({ paths }) {
  return (
    <Layout title="drawings">
      <main className="drawings">
        <DrawingsNavi scope="Drawings" paths={paths} />
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
