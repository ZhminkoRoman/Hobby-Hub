import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const initialPosts: Prisma.PostCreateInput[] = [
  {
    title: "Post 1",
    slug: "post-1",
    content: "Content of post",
    author: {
      connectOrCreate: {
        where: {
          email: "zhminkors@gmail.com",
        },
        create: {
          email: "zhminkors@gmail.com",
          hashedPassword: "11111111rs",
        },
      },
    },
  },
];

async function main() {
  console.log("Start seeding ...");

  for (const post of initialPosts) {
    const newPost = await prisma.post.create({
      data: post,
    });
    console.log(`Created post with id: ${newPost.id}`);
  }

  console.log("Seeding finished.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
