const categories = [
  "Sport",
  "Art",
  "Science",
  "DIY",
  "Tech",
  "Internet",
  "Martial arts",
];

export default function Categories() {
  return (
    <ul className="flex flex-col bg-[rgba(49,49,49,0.9)] backdrop-blur-sm w-full max-w-48 h-fit">
      {categories?.map((category, index) => {
        return (
          <li className="flex px-4 py-2" key={`${index}_${category}`}>
            {category}
          </li>
        );
      })}
    </ul>
  );
}
