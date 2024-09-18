import Categories from "../_components/CategoriesNav";
import NavMenu from "../_components/NavMenu";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-full w-full p-4 z-10 gap-4">
      <NavMenu />
      <div className="flex gap-x-4 h-full w-full">
        <Categories />
        {children}
      </div>
    </div>
  );
}
