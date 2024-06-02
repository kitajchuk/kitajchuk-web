import Head from "next/head";

import "@/styles/global.scss";

import {
  ogImage,
  description,
} from "@/lib/site";

export const metadata = {
  title: {
    default: "kitajchuk",
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <Head>
        {/* title comes from page metadata */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content={description} />
        <meta name="image" property="og:image" content={ogImage} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="preload"
          href="/fonts/panicsans.woff"
          crossOrigin="anonymous"
          as="font"
          type="font/woff"
        />
      </Head>
      <body>
        {children}
      </body>
    </html>
  )
}