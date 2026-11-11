import { getPublicImage, getPublicStaticPaths } from "../../lib/utils.js";

export default async function () {
  const paths = await getPublicStaticPaths("drawings");
  const image = await getPublicImage("kitajchuk_nlp.webp");
  return { paths, image };
}
