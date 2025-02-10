"use client";

import classNames from "classnames";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Item({ obj }) {
  const pathname = usePathname();
  const classes = {
    emo: obj.emoji ?? false,
    active: pathname.startsWith(obj.link),
    navi__item: true,
  };

  return (
    <li className={classNames(classes)}>
      <Link href={obj.link} target={obj.open ? "_blank" : null}>
        {obj.label}
      </Link>
    </li>
  );
}