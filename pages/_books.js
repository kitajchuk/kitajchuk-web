import { nanoid } from 'nanoid';

import Link from 'next/link';

import Layout from '../src/components/layout';
import books from '../src/lib/books';

export default function Reads() {
  return (
    <Layout>
      <div className="navi books">
        {books.map((book) => {
          return (
            <div className="book" key={nanoid()}>
              <Link href={`https://google.com/search?q=${book.title}&tbm=bks`}>
                <a className="book__title" target="_blank">{book.title}</a>
              </Link>
              <div className="book__creds">{book.creds}</div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}