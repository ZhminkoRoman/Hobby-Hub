import NavMenu from "../_components/NavMenu";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen w-full p-4 z-10 gap-4">
      <NavMenu />
      <div className="rounded-l-3xl rounded-br-3xl rounded-ss-xl h-full">
        {children}
      </div>
    </div>
  );
}
