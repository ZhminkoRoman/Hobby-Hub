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
      <p>This is a Post page</p>

      <h3>{post?.title}</h3>
      <p>{post?.content}</p>
    </main>
  );
}
