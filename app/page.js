import Image from "@/components/image";
import Preload from "@/components/preload";
import { getPublicImage } from "@/lib/utils";

export default async function Page() {
  const image = await getPublicImage("kitajchuk_hero.webp");

  return (
    <>
      <Preload preload={[image.src]} />
      <main className="hero">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.dims.width}
          height={image.dims.height}
          aspect={image.aspect}
          priority
          orientation="hero"
        />
      </main>
    </>
  );
}