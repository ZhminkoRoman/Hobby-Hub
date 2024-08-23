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
    href: "/events",
    label: "Events",
  },
  {
    href: "#",
    label: "Hobbies",
  },
  {
    href: "#",
    label: "People",
  },
  {
    href: "#",
    label: "Communities",
  },
];

export default function NavMenu() {
  const pathname = usePathname();

  return (
    <div className="flex gap-4">
      <div className="w-fit flex z-30 bg-[#111] rounded-2xl rounded-ss-[2rem] rounded-br-xl p-2 mb-4">
        <ul className="flex gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={`${"regular-page"}`}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-row justify-between bg-[#111] p-4 rounded-tr-[2rem] rounded-tl-xl relative before:bg-[#777b7e] before:absolute before:h-10 before:w-10 before:-left-10 before:rounded-full before:bottom-0 before:z-20 after:bg-[#111] after:absolute after:h-5 after:block after:w-5 after:bottom-0 after:-left-5 w-full">
        <input
          type="text"
          className="block bg-[#191919] outline-none rounded-xl h-auto self-center px-4 py-2"
        />
        <div className="flex">
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
    </div>
  );
}
