// import { SessionProvider } from "next-auth/react";
import NavMenu from "../../components/NavMenu";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <SessionProvider> */}
      <NavMenu />
      {children}
      {/* </SessionProvider> */}
    </>
  );
}
