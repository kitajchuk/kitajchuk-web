import { nanoid } from "nanoid";
import Link from "next/link";

import books from "@/lib/books";

export const metadata = {
  title: "books",
};

export default function Page() {
  return (
    <main className="books">
      <header className="navi">
        <h1>good reads</h1>
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
  );
}
