"use client";

import Link from "next/link";
import SignButton from "./SignButton";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/dashboard",
    label: "Dashboard",
  },
  {
    href: "/dashboard/posts",
    label: "Posts",
  },
  {
    href: "/dashboard/profile",
    label: "Profile",
  },
];

export default async function NavMenu() {
  const pathname = usePathname();

  return (
    <div className="mb-8 w-full flex justify-between bg-gray-700">
      <ul className="flex gap-8">
        {navLinks.map((link) => (
          <li>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <button> Logout </button>
    </div>
  );
}
