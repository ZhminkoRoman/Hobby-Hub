export default function HobbyCard() {
  return (
    <div className="flex flex-col border-4 border-gray-800 rounded-lg w-60 h-80 bg-gradient-to-b to-[#6FD6FF] from-[#BFF098] p-4 gap-2">
      <div className="self-center p-2 bg-gray-800 rounded-full w-32 h-32"></div>
      <p className="text-gray-800 font-bold self-center">Hobby name</p>
      <p className="flex-1 bg-gray-800 p-2 rounded-md">Hobby description</p>
    </div>
  );
}
