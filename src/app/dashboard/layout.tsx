// import { SessionProvider } from "next-auth/react";
import NavMenu from "../../components/NavMenu";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-full w-full p-6 box-border">
      <NavMenu />
      <div className="p-1 bg-gradient-to-b from-[#111] to-[#191919] h-full w-full rounded-md ">
        <div className="p-6 h-full w-full rounded screen">{children}</div>
      </div>
    </div>
  );
}
