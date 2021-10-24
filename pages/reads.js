import { nanoid } from 'nanoid';

import Link from 'next/link';

import Layout from '../components/layout';
import books from '../lib/books';

export default function Reads() {
  return (
    <Layout>
      <div className="navi books">
        {Object.keys(books).map((key) => {
          return (
            <div className="books__type" key={key}>
              <div className="books__label">{key}</div>
              {books[key].map((book) => {
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
          );
        })}
      </div>
    </Layout>
  );
}