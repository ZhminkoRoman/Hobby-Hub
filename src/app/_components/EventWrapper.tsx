import { getUserEvents } from "@/src/actions/actions";
import EventCard from "./EventCard";
import { Suspense } from "react";

export default async function EventWrapper() {
  const user = await getUserEvents();

  return (
    <div className="grid grid-cols-[repeat(auto-fill,_350px)] gap-2">
      {user?.events?.map((hobbyEvent, index) => {
        return (
          <Suspense key={`${hobbyEvent.id}`} fallback={<p>...Loading...</p>}>
            <EventCard
              title={hobbyEvent.title}
              key={`${hobbyEvent.id}`}
              description={hobbyEvent.content}
              userName={user.name}
              userImage={user.image}
              eventImage={hobbyEvent.eventImage}
            />
          </Suspense>
        );
      })}
    </div>
  );
}
