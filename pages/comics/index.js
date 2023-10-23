import Link from "next/link";

import Layout from "../../src/components/layout";
import { DrawingsNavi } from "../../src/components/drawings";
import { getPublicStaticPaths } from "../../src/lib/utils";

export default function Comics({ paths }) {
  return (
    <Layout title="comics">
      <main className="comics">
        <div className="comics__books navi">
          <h1>Tabi No Hana comics (PDF):</h1>
          <p>
            <a
              href="/media/Tabi_No_Hana_Book_01.pdf"
              target="_blank"
              download="Tabi_No_Hana_Book_01.pdf"
            >
              A Flower for Every Time, Book 1
            </a>
          </p>
          <p>
            <a
              href="/media/Tabi_No_Hana_Prequel_01.pdf"
              target="_blank"
              download="Tabi_No_Hana_Prequel_01.pdf"
            >
              A Day in Her Life, Prequel 1
            </a>
          </p>
        </div>
        <div className="comics__text uwrap">
          <p className="pp m">
            The prequel is complete, however the inside cover has placeholder
            text as we had to pause work on Tabi. The{" "}
            <a
              href="https://www.kickstarter.com/projects/1086577669/tabi-no-hana-issue-1-in-all-its-forms"
              target="_blank"
              rel="noreferrer"
            >
              original comic
            </a>{" "}
            and the{" "}
            <a
              href="https://www.kickstarter.com/projects/1086577669/tabi-no-hana-the-next-adventures"
              target="_blank"
              rel="noreferrer"
            >
              first graphic novel
            </a>{" "}
            were funded on Kickstarter. I hope to return to Tabi and to work on
            some other comic projects. For now I manage to post illustrations
            periodically to my{" "}
            <Link href="/drawings/">
              <a>drawings</a>
            </Link>
            .
          </p>
        </div>
        <div className="drawings">
          <DrawingsNavi scope="Comics" paths={paths} />
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const paths = getPublicStaticPaths("comics");

  return {
    props: {
      paths,
    },
  };
}
