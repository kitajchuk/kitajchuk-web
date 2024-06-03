import { DrawingsNavi } from "@/components/drawings";
import { getPublicStaticPaths } from "@/lib/utils";

export const metadata = {
  title: "drawings",
};

export default async function Page() {
  const paths = await getPublicStaticPaths("drawings");

  return (
    <main className="drawings">
      <DrawingsNavi scope="Drawings" paths={paths} />
    </main>
  );
}
