"use client";

import Link from "next/link";
import SignButton from "./SignButton";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const navLinks = [
  {
    href: "/",
    label: "Dashboard",
  },
  {
    href: "/posts",
    label: "Posts",
  },
];

export default function NavMenu() {
  const pathname = usePathname();

  return (
    <div className="w-full flex justify-between ">
      <ul className="flex gap-2 ">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={`${"regular-page"}`}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex flex-row">
        <div>
          <Link className={`${"regular-page"}`} href="/profile">
            Profile
          </Link>
        </div>
        <button onClick={() => signOut()} className="px-4">
          {" "}
          Logout{" "}
        </button>
      </div>
    </div>
  );
}
