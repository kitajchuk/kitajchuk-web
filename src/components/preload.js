import Head from "next/head";

export const Preload = ({ preload }) => {
  return (
    <Head>
      {preload.map((source) => {
        return <link rel="preload" as="image" href={source} key={source} />;
      })}
    </Head>
  );
};

export default Preload;