"use client";

import classNames from "classnames";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Item({ obj }) {
  const pathname = usePathname();
  const classes = {
    navi__item: true,
    active: pathname.startsWith(obj.link),
  };

  return (
    <li className={classNames(classes)}>
      <Link href={obj.link} target={obj.open ? "_blank" : null}>
        {obj.label}
      </Link>
    </li>
  );
}