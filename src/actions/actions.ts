"use server";

import { revalidatePath } from "next/cache";
import prisma from "../lib/db";

export async function createPost(formData: FormData) {
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

  revalidatePath("/dashboard");
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

  revalidatePath("/dashboard");
}

export async function deletePost(id: string) {
  await prisma.post.delete({
    where: {
      id,
    },
  });

  revalidatePath("/dashboard");
}
