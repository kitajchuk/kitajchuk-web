import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';

const Home = ({ response }) => {
  return (
    <Layout>
      <Head>
        <title>kitajchuk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Layout>
  )
};

/*
export async function getStaticProps({ params }) {
  // data...

  return {
    props: {
      data,
    },
  };
}
*/

export default Home;
