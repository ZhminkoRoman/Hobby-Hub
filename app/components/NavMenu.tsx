import Link from "next/link";
import SignButton from "./SignButton";

export default async function NavMenu() {
  return (
    <div className="mb-8 w-full flex justify-between">
      <ul className="flex gap-8">
        <Link href="/dashboard" className="nav-button">
          <li>Dashboard</li>
        </Link>
        <Link href="/dashboard/profile" className="nav-button">
          <li>Profile</li>
        </Link>
      </ul>
      <SignButton />
    </div>
  );
}
