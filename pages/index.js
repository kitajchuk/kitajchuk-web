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
      <section>
        <article className="p-10 bg-indigo-100 text-indigo-500">
          <h1 className="text-2xl">
            Hello World
          </h1>
        </article>
      </section>
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
