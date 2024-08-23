// import { SessionProvider } from "next-auth/react";
import NavMenu from "../_components/NavMenu";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-fit w-full p-6 box-border">
      <NavMenu />
      <div className="flex bg-[#111] rounded-l-3xl rounded-br-3xl rounded-ss-xl p-4 h-full shadow-2xl">
        {children}
      </div>
    </div>
  );
}
