// import { auth } from "@/auth";
import Image from "next/image";

export default async function Profile() {
  // const session = await auth();

  return (
    <main>
      <p>This is a profile page</p>
      {/* <p>{session?.user?.name}</p>
      <p>{session?.user?.email}</p>
      {session?.user?.image ? (
        <Image
          src={session.user.image}
          width={100}
          height={100}
          alt="User's picture"
        />
      ) : null} */}
    </main>
  );
}
