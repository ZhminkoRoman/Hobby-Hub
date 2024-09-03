"use client";

import Link from "next/link";
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
    href: "/hobbies",
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
      <div className="w-fit flex z-30 p-2 mb-4">
        <ul className="flex gap-6">
          {navLinks.map((link, index) => {
            return (
              <li
                key={`${link.href}_${index}`}
                className={`font-bold ${
                  pathname === link.href
                    ? "text-emerald-500 focus:text-emerald-500"
                    : "text-gray-50"
                }`}
              >
                <Link href={link.href} className={`${"regular-page"}`}>
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-row justify-between w-full">
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
