// import { SessionProvider } from "next-auth/react";
import NavMenu from "../_components/NavMenu";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen w-full">
      <NavMenu />
      <div className="bg-[#111] rounded-l-3xl rounded-br-3xl rounded-ss-xl h-full p-4">
        {children}
      </div>
    </div>
  );
}
