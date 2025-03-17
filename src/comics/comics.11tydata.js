import { getPublicStaticPaths } from "../../lib/utils.js";

export default async function () {
  const paths = await getPublicStaticPaths("comics");
  return { paths };
}