import Head from 'next/head';
import Link from 'next/link';
import Logo from '../components/logo';
import { nanoid } from 'nanoid';

const navi = [
  {
    link: '/flamingos',
    label: 'FlamingOs',
  },
];

const footer = [
  {
    link: 'mailto:bk@kitajchuk.com',
    label: 'Email',
    open: true,
  },
  {
    link: 'https://github.com/kitajchuk',
    label: 'Github',
    open: true,
  },
  {
    link: 'https://www.linkedin.com/in/brandonleekitajchuk/',
    label: 'Linkedin',
    open: true,
  },
];

export default function Layout({children, title = "kitajchuk"}) {
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
          content="Once a day unlearn something new."
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
      <nav className="navi text-black text-center">
        {navi.map((nav) => {
          return (
            <div key={nanoid()}>
              <Link href={nav.link}>
                <a target={nav.open ? '_blank' : null}>{nav.label}</a>
              </Link>
            </div>
          );
        })}
      </nav>
      <main className="main">
        {children}
      </main>
      <footer className="navi text-black text-center">
        {footer.map((nav) => {
          return (
            <div key={nanoid()}>
              <Link href={nav.link}>
                <a target={nav.open ? '_blank' : null}>{nav.label}</a>
              </Link>
            </div>
          );
        })}
      </footer>
    </>
  );
}
