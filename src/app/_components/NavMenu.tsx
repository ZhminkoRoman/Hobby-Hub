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

  // hover:after:shadow-pixelBoxShadow after:w-full after:h-full after:top-0 after:left-0 after:absolute after:flex after:border-2

  return (
    <div className="flex gap-4 bg-[rgba(49,49,49,0.9)] justify-between p-2 backdrop-blur-sm">
      <div className="w-fit flex">
        <ul className="flex">
          {navLinks.map((link, index) => {
            return (
              <li
                key={`${link.href}_${index}`}
                className={`font-bold px-2 relative ${
                  pathname === link.href ? "bg-hoveredButton" : "text-gray-50"
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
      <div className="flex">
        {/* <input
          type="text"
          className="block bg-[#292929] outline-none h-auto self-center px-4 py-2"
        /> */}
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
