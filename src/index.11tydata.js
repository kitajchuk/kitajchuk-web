import { getPublicImage } from "../lib/utils.js";

export default async function () {
  const image = await getPublicImage("kitajchuk_hero.webp");
  return { image };
}
