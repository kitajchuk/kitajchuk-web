import { nanoid } from "nanoid";

import Item from "@/components/layout/item";

export default function Navi({ data, label }) {
  return (
    <nav className="navi" aria-label={label}>
      <ul className="navi__list">
        {data.map((nav) => {
          return <Item obj={nav} key={nanoid()} />;
        })}
      </ul>
    </nav>
  );
}