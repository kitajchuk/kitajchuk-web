"use client";

import classNames from "classnames";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Item({ obj }) {
  const pathname = usePathname();
  const regex = new RegExp(`^${obj.link}`);
  const classes = {
    navi__item: true,
    active: regex.test(pathname),
  };

  return (
    <li className={classNames(classes)}>
      <Link href={obj.link} target={obj.open ? "_blank" : null}>
        {obj.label}
      </Link>
    </li>
  );
}