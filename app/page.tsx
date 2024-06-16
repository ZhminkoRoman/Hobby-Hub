import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  console.log("AAAAAAA", session);

  return (
    <>
      {session?.user ? (
        <p>{session.user.email}</p>
      ) : (
        <p>You are not logged in</p>
      )}
    </>
  );
}
