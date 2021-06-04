import { nanoid } from 'nanoid';
import classNames from 'classnames';

import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Logo from '../components/logo';
import { navi, description, instagram } from '../lib/site';

function Navi({data}) {
  const router = useRouter();
  const is404 = /404/.test(router.route);

  function Item({obj}) {
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

  if (is404) {
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
    <footer className="footer navi">
      <p>
        copyright {date.getFullYear()}{' '}
        <Link href={instagram}>
          <a target="_blank">@kitajchuk</a>
        </Link>
        .
      </p>
    </footer>
  );
}

export default function Layout({children, title = 'kitajchuk'}) {
  title = (title !== 'kitajchuk' ? `${title} \\\\ kitajchuk` : title);

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content={description}
        />
        <link rel="apple-touch-icon" href="/logo192.png" />
        {/*
          manifest.json provides metadata used when your web app is installed on a
          user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
        */}
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <header className="head">
        <Link href="/">
          <a>
            <Logo fill="#000" />
          </a>
        </Link>
      </header>
      <Navi data={navi} />
      <main className="main">
        {children}
      </main>
      <Footer />
    </>
  );
}
