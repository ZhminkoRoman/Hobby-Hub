export default function HobbyCard() {
  return (
    <div className="flex flex-col w-60 h-80 bg-gradient-to-br to-[#6FD6FF] from-[#BFF098] p-4 gap-2 shadow-[#BFF098] shadow-[3px_3px_0_rgba(89,89,89,0.5)]">
      <div className="self-center p-2 bg-gray-800 rounded-full w-32 h-32"></div>
      <p className="text-gray-800 font-bold self-center">Hobby name</p>
      <p className="flex-1 bg-gray-800 p-2 rounded-md">Hobby description</p>
    </div>
  );
}
