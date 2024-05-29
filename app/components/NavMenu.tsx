"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavMenu() {
  const pathname = usePathname();

  if (pathname === "/login") return null;

  return (
    <div className="mb-8">
      <ul className="flex gap-8">
        <Link href="/" className="nav-button">
          <li>Home</li>
        </Link>
        <Link href="/dashboard" className="nav-button">
          <li>Dashboard</li>
        </Link>
      </ul>
    </div>
  );
}
