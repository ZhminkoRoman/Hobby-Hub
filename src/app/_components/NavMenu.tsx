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
    <div className="flex gap-4 bg-[#111] shadow-[#444] shadow-[3px_3px_0_rgba(89,89,89,0.5)]">
      <div className="w-fit flex">
        <ul className="flex">
          {navLinks.map((link, index) => {
            return (
              <li
                key={`${link.href}_${index}`}
                className={`font-bold px-2 ${
                  pathname === link.href ? "bg-button" : "text-gray-50"
                }`}
              >
                <Link
                  href={link.href}
                  className={`${"regular-page"} font-secondary tracking-widest drop-shadow-pixelTextShadow`}
                >
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
          className="block bg-[#292929] outline-none h-auto self-center px-4 py-2"
        />
        <div className="flex items-center">
          <Link className={`${"regular-page"}`} href="/profile">
            Profile
          </Link>
          <button onClick={() => signOut()} className="px-4">
            {" "}
            Logout{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
