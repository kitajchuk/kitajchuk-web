import Link from "next/link";

import { navi } from "@/lib/site";
import Navi from "@/components/layout/navi";
import Logo from "@/components/logo";
import Footer from "@/components/layout/footer";

export default function RooTemplate({ children }) {
  return (
    <>
      <header className="header">
        <Link href="/" aria-label="Link to Home Page" title="Link to Home Page">
          <Logo fill="#000" />
        </Link>
      </header>
      <Navi data={navi} label="Portfolio Navigation" />
      {children}
      <Footer />
    </>
  );
}