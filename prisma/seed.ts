import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const initialEvents: Prisma.EventCreateInput[] = [
  {
    title: "Event 1",
    slug: "event-1",
    content: "Content of event",
    author: {
      connectOrCreate: {
        where: {
          email: "zhminkors@gmail.com",
        },
        create: {
          email: "zhminkors@gmail.com",
        },
      },
    },
    published: true,
  },
];

async function main() {
  console.log("Start seeding ...");

  for (const hobbyEvent of initialEvents) {
    const newEvent = await prisma.event.create({
      data: hobbyEvent,
    });
    console.log(`Created event with id: ${newEvent.id}`);
  }

  console.log("Seeding finished.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
