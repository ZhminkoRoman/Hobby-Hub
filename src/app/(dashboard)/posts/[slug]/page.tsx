import prisma from "@/src/lib/db";
import { unstable_cache as cache } from "next/cache";

// const getCachedPost = cache((slug: string) => {
//   return prisma.post.findUnique({
//     where: {
//       slug,
//     },
//   });
// });

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  /**
   * * We can and we should put this DB request into the action (split it to action / service / module parts);
   */

  // const post = await getCachedPost(params.slug);
  const post = await prisma.post.findUnique({
    where: {
      slug: params.slug,
    },
    // cacheStrategy: {
    //   ttl: 60
    // }
  });

  return (
    <main>
      <h2 className="page-title">This is a Post page</h2>

      <h3>{post?.title}</h3>
      <p>{post?.content}</p>
    </main>
  );
}
