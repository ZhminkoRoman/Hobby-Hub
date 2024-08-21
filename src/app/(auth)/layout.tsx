import AuthAnimatedLayout from "@/src/app/_components/AuthAnimatedLayout";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full h-full font-mono flex flex-col justify-center gap-3 relative overflow-hidden">
      {children}
      <AuthAnimatedLayout />
    </main>
  );
}
