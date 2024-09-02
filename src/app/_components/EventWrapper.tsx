import { getUserEvents } from "@/src/actions/actions";
import EventCard from "./EventCard";

export default async function EventWrapper() {
  const user = await getUserEvents();

  return (
    <div className="grid grid-cols-[repeat(auto-fill,_350px)] gap-2">
      {user?.events?.map((hobbyEvent, index) => {
        return (
          <EventCard
            title={hobbyEvent.title}
            key={`${hobbyEvent.id}`}
            description={hobbyEvent.content}
            userName={user.name}
            userImage={user.image}
            eventImage={hobbyEvent.eventImage}
          />
        );
      })}
    </div>
  );
}
