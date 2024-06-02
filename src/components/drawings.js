import Link from "next/link";

import { nanoid } from "nanoid";

import Image from "@/components/image";

export const DrawingsNavi = ({ scope, paths }) => {
  return (
    <nav
      className="drawings__navi"
      aria-label={`${scope} Category Navigation`}
    >
      {paths.map((obj) => {
        return (
          <Link
            key={obj.params.slug}
            href={`/${scope.toLowerCase()}/${obj.params.slug}`}
            className="drawings__link"
          >
            <span>{obj.params.slug}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default function Drawings({ collection, paths, scope }) {
  return (
    <main className="drawings">
      <header>
        <h1 className="drawings__title">{collection.title}</h1>
      </header>
      <ul className="drawings__collection">
        {collection.images.map((img, i) => {
          return (
            <li key={nanoid()} className="drawings__collection__item">
              <Image
                src={img.src}
                alt={img.alt}
                width={img.dims.width}
                height={img.dims.height}
                aspect={img.aspect}
                priority={i === 0}
                orientation={img.orientation}
              />
            </li>
          );
        })}
      </ul>
      <DrawingsNavi scope={scope} paths={paths} />
    </main>
  );
}
