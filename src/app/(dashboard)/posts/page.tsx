import { createPost, getUserPosts } from "@/src/actions/actions";
import prisma from "@/src/lib/db";
import Link from "next/link";

export default async function PostsPage() {
  const posts = await getUserPosts(); // Now it's much clearer, we're just invoke to user posts by an action;

  return (
    <>
      <h2 className="page-title">Posts page</h2>

      <section className="mb-8 px-4">
        <p>There are {posts?.length} posts</p>
        <ul>
          {posts?.map((post) => (
            <li key={post.id} className="underline">
              <Link href={`/dashboard/posts/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </section>

      <form
        action={createPost}
        className="flex flex-col w-[36rem] mx-auto gap-3"
      >
        <div className="input-field-border">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="input-field"
          />
        </div>
        <div className="input-field-border">
          <textarea
            name="content"
            placeholder="Content"
            rows={5}
            className="input-field"
          />
        </div>
        <button type="submit" className="btn">
          Create post
        </button>
      </form>
    </>
  );
}
