import Link from 'next/link';

import { nanoid } from 'nanoid';

import LazyImage from '../../src/components/lazyimage';
import { Animate } from '../../src/components/animate';

export default function Drawings({ collection, paths, scope }) {
  return (
    <section className="drawings">
      <p className="drawings__title">{collection.title}</p>
      <ul className="drawings__collection">
        {collection.images.map((img) => {
          return (
            <li key={nanoid()} className="drawings__collection__item">
              <Animate>
                <LazyImage className={img.orientation} src={img.src} width={img.dims.width} height={img.dims.height} alt={img.alt} />
              </Animate>
            </li>
          );
        })}
      </ul>
      <nav className="drawings__navi">
        {paths.map((obj) => {
          return (
            <Link key={obj.params.slug} href={`/${scope}/${obj.params.slug}`}>
              <a className="drawings__link">
                {obj.params.slug}
              </a>
            </Link>
          );
        })}
      </nav>
    </section>
  );
}
