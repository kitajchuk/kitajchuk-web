import Link from "next/link";

import Navi from "@/components/layout/navi";
import {
  apps,
  footer,
  extras,
  instagram,
} from "@/lib/site";

export default function Footer() {
  return (
    <footer className="navi footer">
      <p className="m">
        all original content
        <br />
        copyright{" "}
        <Link href={instagram} target="_blank">
          @kitajchuk
        </Link>
        {""}.
      </p>
      <Navi data={footer} label="Professional Links" />
      <Navi data={apps} label="Web App Links" />
      <Navi data={extras} label="Self Interest Links" />
    </footer>
  );
}