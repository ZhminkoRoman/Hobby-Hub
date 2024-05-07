import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();

  return (
    <>
      <p>getServerSession Result</p>
      {session?.user?.name ? (
        <div>{session.user.name}</div>
      ) : (
        <div>Not logged in</div>
      )}
    </>
  );
}
