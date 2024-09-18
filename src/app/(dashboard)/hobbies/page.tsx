import HobbyCard from "../../_components/HobbyCard";

const hobbies = [
  "Reading",
  "Painting",
  "Hiking",
  "Photography",
  "Cooking",
  "Gardening",
  "Traveling",
  "Knitting",
  "Writing",
  "Playing musical instruments",
  "Cycling",
  "Swimming",
  "Jogging",
  "Drawing",
  "Fishing",
  "Birdwatching",
  "Collecting stamps",
  "Woodworking",
  "Baking",
  "Rock climbing",
  "Yoga",
  "Dancing",
  "Pottery",
  "Playing video games",
  "Learning languages",
  "Chess",
  "Sewing",
  "Scrapbooking",
  "Meditation",
  "Candle making",
  "Origami",
  "Surfing",
  "Sculpting",
  "Wine tasting",
  "Calligraphy",
  "Horseback riding",
  "Astronomy",
  "Archery",
  "Martial arts",
  "Kite flying",
  "Skateboarding",
  "Camping",
  "Puzzles",
  "Robotics",
  "Blogging",
  "Podcasting",
  "DIY projects",
  "Volunteering",
  "Journaling",
  "Board games",
];

export default function Hobbies() {
  return (
    <div className="flex flex-row gap-2">
      <ul className="flex flex-row flex-wrap justify-between gap-4 gap-y-8">
        {hobbies.map((hobby, index) => {
          return <HobbyCard title={hobby} key={`${index}_${hobby}`} />;
        })}
      </ul>
    </div>
  );
}
