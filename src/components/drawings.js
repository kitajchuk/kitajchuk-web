import Link from 'next/link';

import { nanoid } from 'nanoid';

import Image from '../../src/components/image';

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
      <nav className="drawings__navi" aria-label={`${scope} Category Navigation`}>
        {paths.map((obj) => {
          return (
            <Link key={obj.params.slug} href={`/${scope.toLowerCase()}/${obj.params.slug}`}>
              <a className="drawings__link">
                {obj.params.slug}
              </a>
            </Link>
          );
        })}
      </nav>
    </main>
  );
}
