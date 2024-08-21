"use server";

import sha256 from "crypto-js/sha256";
import { revalidatePath } from "next/cache";
import prisma from "../lib/db";

type Posts =
  | {
      id: string;
      title: string;
      slug: string;
      content: string;
      published: boolean;
      authorId: string;
      updatedAt: Date;
      createdAt: Date;
    }[]
  | undefined;

export async function getUserPosts(): Promise<Posts> {
  const user = await prisma.user.findUnique({
    where: {
      email: "zhminkors@gmail.com",
    },
    select: {
      id: true,
      name: true,
      image: true,
      // password: true
      posts: true,
    },
  });

  if (user) {
    // if (user.password === sha256(password).toString()) {
    // const { password, ...userWithoutPassword } = user;
  }

  revalidatePath("/posts");
  return user?.posts;
}

export async function getPost(slug: string) {
  return await prisma.post.findUnique({
    where: {
      slug: slug,
    },
    // cacheStrategy: {
    //   ttl: 60
    // }
  });
}

export async function createPost(formData: FormData) {
  /**
   * ! This should be in service files;
   */
  try {
    await prisma.post.create({
      data: {
        title: formData.get("title") as string,
        content: formData.get("content") as string,
        slug: (formData.get("title") as string)
          .replace(/\s+/g, "-")
          .toLowerCase(),
        published: true,
        author: {
          connect: {
            email: "zhminkors@gmail.com",
          },
        },
      },
    });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/");
}

export async function editPost(formData: FormData, id: string) {
  await prisma.post.update({
    where: {
      id,
    },
    data: {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      slug: (formData.get("title") as string)
        .replace(/\s+/g, "-")
        .toLowerCase(),
    },
  });

  revalidatePath("/");
}

export async function deletePost(id: string) {
  await prisma.post.delete({
    where: {
      id,
    },
  });

  revalidatePath("/");
}
