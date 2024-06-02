import Link from "next/link";

import Layout from "@/components/layout";
import { DrawingsNavi } from "@/components/drawings";
import { getPublicStaticPaths } from "@/lib/utils";

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
