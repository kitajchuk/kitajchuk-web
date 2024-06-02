import { nanoid } from "nanoid";

import Link from "next/link";

import Layout from "@/components/layout";
import books from "@/lib/books";

export default function Reads() {
  return (
    <Layout title="books">
      <main className="books">
        <header className="navi">
          <h1>__books__</h1>
        </header>
        <ul className="uwrap">
          {books.map((book) => {
            return (
              <li className="book" key={nanoid()}>
                <cite>
                  <Link
                    href={`https://search.brave.com/search?q=${book.title}`}
                    className="book__title" target="_blank"
                  >
                    {book.title}
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
