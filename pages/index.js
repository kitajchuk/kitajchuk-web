// import classNames from 'classnames';
import Link from 'next/link';
import Layout from '../components/layout';
import Logo from '../components/logo';

export default function Home() {
  return (
    <Layout>
      <header className="navi flex justify-center items-center">
        <Logo fill="#000" />
      </header>
      <main className="main text-black text-center">
        <div><Link href="mailto:bk@kitajchuk.com"><a target="_blank">Email</a></Link></div>
        <div><Link href="https://github.com/kitajchuk"><a target="_blank">Github</a></Link></div>
        <div><Link href="https://www.linkedin.com/in/brandonleekitajchuk/"><a target="_blank">Linkedin</a></Link></div>
      </main>
      <footer className="hero flex justify-center items-center">
        <img src="/img/kitajchuk_hero.png" />
      </footer>
    </Layout>
  )
};
