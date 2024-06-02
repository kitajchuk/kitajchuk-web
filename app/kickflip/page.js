import Kickflip from "@/components/kickflip";
import Preload from "@/components/preload";
import { readPublicImageDirectory } from "@/lib/utils";

export const metadata = {
  title: "kickflip",
};

export async function getPageCollection() {
  return await readPublicImageDirectory("kickflip/retro");
}

export default async function Page() {
  const collection = await getPageCollection();

  return (
    <>
      <Preload preload={collection.images.map((img) => img.src)} />
      <Kickflip />
    </>
  );
}
