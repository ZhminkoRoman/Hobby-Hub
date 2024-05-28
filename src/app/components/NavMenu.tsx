"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        {session.user?.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <div className="border-b-[6px] border-gray-900 border-double">
      {/* Not signed in <br /> */}
      <button
        className="border-l-2 border-t-2 border-transparent hover:border-gray-900 px-8 py-4"
        onClick={() => signIn()}
      >
        Sign In
      </button>
    </div>
  );
}

export default function NavMenu() {
  const pathname = usePathname();

  if (pathname === "/login") return null;

  return (
    <div className="mb-8">
      <AuthButton />
      <ul className="flex gap-8">
        <Link href="/" className="nav-button">
          <li>Home</li>
        </Link>
        <Link href="/protected" className="nav-button">
          <li>Protected Route</li>
        </Link>
        <Link href="/dashboard" className="nav-button">
          <li>Dashboard</li>
        </Link>
      </ul>
    </div>
  );
}
