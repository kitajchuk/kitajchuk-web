import { getPublicImage, getPublicStaticPaths } from "../../lib/utils.js";

export default async function () {
  const paths = await getPublicStaticPaths("comics");
  const image = await getPublicImage("Kitajchuk_Tabi_Comic_Pack.webp");
  return { paths, image };
}