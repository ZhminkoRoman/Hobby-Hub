import { auth } from "@/auth";
import prisma from "@/src/lib/db";
import Image from "next/image";

export default async function Profile() {
  const session = await auth();
  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email || "",
    },
    include: {
      posts: true,
      hobbies: true,
    },
  });

  return (
    <main className="flex p-6 flex-col gap-2">
      <h2 className="page-title self-center">This is a profile page</h2>
      {session?.user?.image ? (
        <div className="border-4 border-[#292929] p-2 rounded-lg w-[150px] overflow-hide box-border">
          <Image
            src={session.user.image}
            width={150}
            height={150}
            alt="User's picture"
            className="rounded-sm"
          />
        </div>
      ) : (
        <div className="border-4 border-[#292929] p-2 rounded-lg w-[150px] h-[150px]">
          <div className="bg-[#292929] w-full h-full rounded-sm" />
        </div>
      )}
      <p className="font-mono font-bold tracking-widest">
        Name: {session?.user?.name}
      </p>
      <p className="font-mono font-bold tracking-widest">
        Email: {session?.user?.email}
      </p>
      {user?.hobbies?.map((hobby) => (
        <div>
          <h2 className="font-mono font-bold tracking-widest">Hobbies: </h2>
          <p className="font-mono font-bold tracking-widest">
            Title - {hobby.hobbyTypeTitle}
          </p>
          <p className="font-mono font-bold tracking-widest">
            Progression level: {hobby.level}
          </p>
        </div>
      ))}
    </main>
  );
}
