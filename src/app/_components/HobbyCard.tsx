export default function HobbyCard({ title }: { title: string }) {
  return (
    <li className="flex flex-col w-60 h-80 bg-gradient-to-br to-[#6FD6FF] from-[#BFF098] p-4 gap-2 shadow-[3px_3px_0_rgba(191,240,152,0.5)]">
      <div className="self-center p-2 bg-gray-800 rounded-full w-40 h-40"></div>
      <p className="text-gray-800 font-bold self-center">{title}</p>
      <p className="flex-1 bg-gray-800 p-2 rounded-md">Hobby description</p>
    </li>
  );
}
