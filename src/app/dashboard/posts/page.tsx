import { createPost } from "@/src/actions/actions";
import prisma from "@/src/lib/db";
import Link from "next/link";

export default async function PostsPage() {
  const user = await prisma.user.findUnique({
    where: {
      email: "zhminkors@gmail.com",
    },
    include: {
      posts: true,
    },
  });

  return (
    <>
      <h2 className="page-title">Posts page</h2>

      <section className="mb-8 px-4">
        <p>There are {user?.posts?.length} posts</p>
        <ul>
          {user?.posts.map((post) => (
            <li key={post.id} className="underline">
              <Link href={`/dashboard/posts/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </section>

      <form
        action={createPost}
        className="flex flex-col w-[36rem] mx-auto bg-gray-700 p-8"
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="post-input"
        />
        <textarea
          name="content"
          placeholder="Content"
          rows={5}
          className="post-input"
        />
        <button type="submit" className="btn">
          Create post
        </button>
      </form>
    </>
  );
}
