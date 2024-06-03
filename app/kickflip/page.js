import Kickflip from "@/components/kickflip";
import Preload from "@/components/preload";
import { readPublicImageDirectory } from "@/lib/utils";

export const metadata = {
  title: "kickflip",
};

export default async function Page() {
  const collection = await readPublicImageDirectory("kickflip/retro");

  return (
    <>
      <Preload preload={collection.images.map((img) => img.src)} />
      <Kickflip />
    </>
  );
}
