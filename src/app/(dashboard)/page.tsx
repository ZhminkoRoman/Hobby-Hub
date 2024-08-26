import { getUserEvents } from "@/src/actions/actions";
import EventWrapper from "../_components/EventWrapper";

export default async function Dashboard() {
  const user = await getUserEvents();

  return <EventWrapper user={user} />;
}
