import { nanoid } from 'nanoid';
import classNames from 'classnames';

import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Logo from '../components/logo';
import { navi, footer, apps, description, instagram, ogImage } from '../lib/site';

function Item({obj}) {
  const router = useRouter();
  const regex = new RegExp(`^${obj.link}`);
  const classes = {
    navi__item: true,
    active: regex.test(router.asPath),
  };

  return (
    <li className={classNames(classes)}>
      <Link href={obj.link}>
        <a target={obj.open ? '_blank' : null}>{obj.label}</a>
      </Link>
    </li>
  );
}

function Navi({data}) {
  return (
    <nav className="navi">
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
      <div className="footer__copy">
        <p>
          copyright {date.getFullYear()}{' '}
          <Link href={instagram}>
            <a target="_blank">@kitajchuk</a>
          </Link>
          .
        </p>
      </div>
      <div className="footer__navi">
        <Navi data={footer} />
      </div>
      <div className="footer__apps">
        <Navi data={apps} />
      </div>
    </footer>
  );
}

function NotFound() {
  return (
    <nav className="navi">
      <p>
        404 | things have changed, but you can still check out my{' '}
        <Link href="/drawings/">
          <a>drawings</a>
        </Link>
        .
      </p>
    </nav>
  );
}

export default function Layout({children, title = 'kitajchuk'}) {
  const router = useRouter();
  const is404 = /404/.test(router.route);
  const pageTitle = (title !== 'kitajchuk' ? `${title} \\\\ kitajchuk` : title);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content={description} />
        <meta name="image" property="og:image" content={ogImage} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <header className="head">
        <Link href="/">
          <a>
            <Logo fill="#000" />
          </a>
        </Link>
      </header>
      {is404 ? <NotFound /> : <Navi data={navi} />}
      <main className="main">
        {children}
      </main>
      <Footer />
    </>
  );
}
