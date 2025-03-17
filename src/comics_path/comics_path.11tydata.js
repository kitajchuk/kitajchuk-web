import { getPublicStaticPaths, readPublicImageDirectory } from "../../lib/utils.js";

export default async function () {
  const paths = await getPublicStaticPaths("comics");

  return {
    paths,
    eleventyComputed: {
      title: (data) => data.item.slug,
      rest_paths: async (data) => {
        const rest_paths = data.paths.filter(
          (obj) => obj.slug !== data.item.slug,
        );
        return rest_paths;
      },
      collection: async (data) => {
        const collection = await readPublicImageDirectory(`comics/${data.item.slug}`);
        return collection;
      },
    },
  };
}