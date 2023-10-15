import { nanoid } from "nanoid";

import Link from "next/link";

import Layout from "../src/components/layout";
import books from "../src/lib/books";

export default function Reads() {
  return (
    <Layout>
      <main className="navi books">
        <ul>
          {books.map((book) => {
            return (
              <li className="book" key={nanoid()}>
                <cite>
                  <Link
                    href={`https://search.brave.com/search?q=${book.title}`}
                  >
                    <a className="book__title" target="_blank">
                      {book.title}
                    </a>
                  </Link>
                </cite>
                <div className="book__creds m">{book.creds}</div>
              </li>
            );
          })}
        </ul>
      </main>
    </Layout>
  );
}
