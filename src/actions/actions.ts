"use server";

import { revalidatePath } from "next/cache";
import prisma from "../lib/db";

export type User = {
  id: string;
  name: string | null;
  image: string | null;
  events: Events;
} | null;

export type Events =
  | {
      id: string;
      title: string;
      slug: string;
      content: string;
      published: boolean;
      authorId: string;
      eventImage: string | null;
      updatedAt: Date;
      createdAt: Date;
    }[]
  | undefined;

export async function getUserEvents(): Promise<User> {
  const user = await prisma.user.findUnique({
    where: {
      email: "zhminkors@gmail.com",
    },
    select: {
      id: true,
      name: true,
      image: true,
      // password: true
      events: true,
    },
  });

  if (user) {
    // if (user.password === sha256(password).toString()) {
    // const { password, ...userWithoutPassword } = user;
  }

  revalidatePath("/events");
  return user;
}

export async function getEvent(slug: string) {
  return await prisma.event.findUnique({
    where: {
      slug: slug,
    },
    // cacheStrategy: {
    //   ttl: 60
    // }
  });
}

const toBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

export async function createEvent(formData: FormData) {
  try {
    await prisma.event.create({
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
        eventImage: formData.get("eventImageBase64") as string, // here should be our base64 image,
      },
    });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/");
}

export async function editEvent(formData: FormData, id: string) {
  await prisma.event.update({
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

export async function deleteEvent(id: string) {
  await prisma.event.delete({
    where: {
      id,
    },
  });

  revalidatePath("/");
}
