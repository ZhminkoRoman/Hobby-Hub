"use client";
import { signOut, useSession, getSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function NavMenu() {
  const pathname = usePathname();

  const session = useSession();

  return (
    <div className="mb-8 w-full flex justify-between">
      <ul className="flex gap-8">
        <Link href="/" className="nav-button">
          <li>Home</li>
        </Link>
        <Link href="/dashboard" className="nav-button">
          <li>Dashboard</li>
        </Link>
      </ul>
      {session?.data?.user && session?.status === "authenticated" ? (
        <button onClick={() => signOut()} className="nav-button">
          Sign Out
        </button>
      ) : (
        <Link href="/login" className="nav-button">
          Sign In
        </Link>
      )}
    </div>
  );
}
