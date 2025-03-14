import Link from "next/link";

import Image from "@/components/image";
import Preload from "@/components/preload";
import { getPublicImage } from "@/lib/utils";

export default async function NotFound() {
  const image = await getPublicImage("kitajchuk_hero.webp");

  return (
    <>
      <Preload preload={[image.src]} />
      <nav className="navi">
        <div className="_404">
          <h1 className="emo">🙈</h1>
          <div className="sep" role="separator" />
          <p>
            end of line, but you can still check out my{" "}
            <Link href="/drawings/">
              drawings
            </Link>
            {""}.
          </p>
        </div>
      </nav>
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