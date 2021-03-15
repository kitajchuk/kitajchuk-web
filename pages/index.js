import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import Logo from '../components/logo';
import AsyncImage from '../components/asyncimage';

const Menu = ({ active, handler }) => {
  const classes = ['meni'].concat(active ? 'is-active' : '').join(' ');

  return (
    <div className={classes} onClick={handler}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

const Home = () => {
  const [active, setActive] = useState(false);

  const onMenuClick = () => {
    setActive(!active);
  };

  const classes = ['deets'].concat(active ? 'is-active' : '').join(' ');

  return (
    <Layout>
      <Head>
        <title>kitajchuk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="navi p-5 sm:p-8 flex justify-between items-center">
        <Logo fill={active ? '#fff' : '#000'} />
        <Menu active={active} handler={onMenuClick} />
      </div>
      <div className="hero flex justify-end">
        <AsyncImage src="/kitajchuk_hero.png" />
      </div>
      <div className={classes}>
        <div className="mast pt-28 sm:pt-0">
          <div className="text-lg sm:text-2xl text-white">
            ( <span>developer</span> / <span>creative</span> )
          </div>
          <div className="text-sm sm:text-base text-white mt-2.5">
            <Link href="mailto:bk@kitajchuk.com"><a target="_blank">Email</a></Link>,&nbsp;
            <Link href="https://github.com/kitajchuk"><a target="_blank">Github</a></Link>,&nbsp;
            <Link href="https://www.linkedin.com/in/brandonleekitajchuk/"><a target="_blank">Linkedin</a></Link>
          </div>
        </div>
        <div className="hero flex justify-end">
          <AsyncImage src="/kitajchuk_nlp.png" />
        </div>
      </div>
    </Layout>
  )
};

export default Home;
