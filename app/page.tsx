import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  return (
    <>
      {session?.user ? (
        <p>{session.user.name}</p>
      ) : (
        <p>You are not logged in</p>
      )}
    </>
  );
}
