import { nanoid } from 'nanoid';
import classNames from 'classnames';

import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Logo from '../components/logo';
import { navi, naviActive, footer, description } from '../lib/site';



function Navi({data}) {
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

  return (
    <nav className="navi text-black text-center">
      <ul className="navi__list">
        {data.map((nav) => {
          return (
            <Item obj={nav} key={nanoid()} />
          );
        })}
      </ul>
    </nav>
  );
}



function Footer({data}) {
  const router = useRouter();
  const is404 = /404/.test(router.route);

  if (is404) {
    return (
      <footer className="footer navi text-black text-center">
        <ul className="footer__list navi__list">
          <li className="footer__item navi__item">
            <Link href="/">
              <a>404: Lost?</a>
            </Link>
          </li>
        </ul>
      </footer>
    );
  }

  return (
    <footer className="footer navi text-black text-center">
      <ul className="footer__list navi__list">
        {data.map((nav) => {
          return (
            <li className="footer__item navi__item" key={nanoid()}>
              <Link href={nav.link}>
                <a target={nav.open ? '_blank' : null}>{nav.label}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}



export default function Layout({children, title = "kitajchuk"}) {
  title = (title !== 'kitajchuk' ? `${title} \\\\ kitajchuk` : title);

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="utf-8" />
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
      <header className="head flex justify-center items-center">
        <Link href="/">
          <a>
            <Logo fill="#000" />
          </a>
        </Link>
      </header>
      {naviActive ? <Navi data={navi} /> : <Footer data={footer} />}
      <main className="main">
        {children}
      </main>
      {naviActive && <Footer data={footer} />}
    </>
  );
}
