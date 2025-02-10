import Link from "next/link";

import { DrawingsNavi } from "@/components/drawings";
import { getPublicStaticPaths } from "@/lib/utils";

export const metadata = {
  title: "comics",
};

export default async function Page() {
  const paths = await getPublicStaticPaths("comics");

  return (
    <main className="comics">
      <div className="comics__books navi">
        <h1>Tabi No Hana comics (PDF):</h1>
        <p>
          <a
            href="/media/Tabi_No_Hana_Book_01.pdf"
            target="_blank"
          >
            A Flower for Every Time, Book 1
          </a>
        </p>
        <p>
          <a
            href="/media/Tabi_No_Hana_Prequel_01.pdf"
            target="_blank"
          >
            A Day in Her Life, Prequel 1
          </a>
        </p>
      </div>
      <div className="comics__text uwrap">
        <p className="pp m">
          The prequel is complete (finally <span className="emo">😅</span>). The{" "}
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
            drawings
          </Link>
          .
        </p>
      </div>
      <div className="drawings">
        <DrawingsNavi scope="Comics" paths={paths} />
      </div>
    </main>
  );
}
