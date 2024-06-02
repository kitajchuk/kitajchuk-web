import { DrawingsNavi } from "@/components/drawings";
import { getPublicStaticPaths } from "@/lib/utils";

export const metadata = {
  title: "drawings",
};

export async function getPagePaths() {
  return getPublicStaticPaths("drawings");
}

export default async function Page() {
  const paths = await getPagePaths();

  return (
    <main className="drawings">
      <DrawingsNavi scope="Drawings" paths={paths} />
    </main>
  );
}
