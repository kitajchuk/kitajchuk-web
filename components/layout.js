import Head from 'next/head';

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
      {children}
    </>
  );
}
