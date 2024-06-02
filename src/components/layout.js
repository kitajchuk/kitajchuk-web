import { nanoid } from "nanoid";
import classNames from "classnames";

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import Logo from "./logo";
import {
  navi,
  footer,
  apps,
  extras,
  description,
  instagram,
  ogImage,
} from "../lib/site";

function Item({ obj }) {
  const router = useRouter();
  const regex = new RegExp(`^${obj.link}`);
  const classes = {
    navi__item: true,
    active: regex.test(router.asPath),
  };

  return (
    <li className={classNames(classes)}>
      <Link href={obj.link} target={obj.open ? "_blank" : null}>
        {obj.label}
      </Link>
    </li>
  );
}

function Navi({ data, label }) {
  return (
    <nav className="navi" aria-label={label}>
      <ul className="navi__list">
        {data.map((nav) => {
          return <Item obj={nav} key={nanoid()} />;
        })}
      </ul>
    </nav>
  );
}

function Footer() {
  const date = new Date();

  return (
    <footer className="navi footer">
      <p className="m">
        all original content
        <br />
        copyright{" "}
        <Link href={instagram} target="_blank">
          @kitajchuk
        </Link>
        {""}.
      </p>
      <Navi data={footer} label="Professional Links" />
      <Navi data={apps} label="Web App Links" />
      <Navi data={extras} label="Self Interest Links" />
    </footer>
  );
}

function NotFound() {
  return (
    <nav className="navi">
      <div className="_404">
        <h1>404</h1>
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
  );
}

export default function Layout({ title = "kitajchuk", children }) {
  const router = useRouter();
  const is404 = /404/.test(router.route);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content={description} />
        <meta name="image" property="og:image" content={ogImage} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="preload"
          href="/fonts/panicsans.woff"
          crossOrigin="anonymous"
          as="font"
          type="font/woff"
        />
      </Head>
      <header className="header">
        <Link href="/" aria-label="Link to Home Page" title="Link to Home Page">
          <Logo fill="#000" />
        </Link>
      </header>
      {is404 ? <NotFound /> : <Navi data={navi} label="Portfolio Navigation" />}
      {children}
      <Footer />
    </>
  );
}
