import { useState, useEffect } from 'react';
import classNames from 'classnames';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import Logo from '../components/logo';
import AsyncImage from '../components/asyncimage';
import Canvas from '../components/canvas';

const Meni = ({handler}) => {
  return (
    <div className="meni" onClick={handler}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="hero flex justify-end">
      <AsyncImage src="/kitajchuk_hero.png" />
    </div>
  );
};

const Home = () => {
  const [active, setActive] = useState(false);
  const [triggered, setTriggered] = useState(false);
  const classes = {
    'deets': true,
    'is-active': active,
  };

  const onMeniClick = () => {
    setActive(!active);
    
    if (!triggered) {
      setTriggered(true);
    }
  };

  useEffect(() => {
    if (active) {
      document.body.classList.add('is-retro');
    } else {
      document.body.classList.remove('is-retro');
    }
  }, [active]);

  return (
    <Layout>
      <Head>
        <title>kitajchuk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Canvas active={triggered} source={active ? 'retro' : 'bw'} />
      <div className="navi p-5 flex justify-between items-center">
        <Logo fill="#000" />
        <Meni handler={onMeniClick} />
      </div>
      {!triggered ? <Hero /> : null}
      <div className={classNames(classes)}>
        <div className="mast pt-28 sm:pt-0">
          <div className="text-lg sm:text-2xl text-white">
            ( <span>developer</span> / <span>creative</span> )
          </div>
          <div className="text-sm sm:text-base text-white mt-2.5">
            <Link href="mailto:bk@kitajchuk.com"><a target="_blank">Email</a></Link>&nbsp;&nbsp;&nbsp;
            <Link href="https://github.com/kitajchuk"><a target="_blank">Github</a></Link>&nbsp;&nbsp;&nbsp;
            <Link href="https://www.linkedin.com/in/brandonleekitajchuk/"><a target="_blank">Linkedin</a></Link>
          </div>
        </div>
      </div>
    </Layout>
  )
};

export default Home;
