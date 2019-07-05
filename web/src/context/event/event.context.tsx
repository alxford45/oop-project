import * as React from "react";
import { Event } from "../../types/Event";

export const EventContext = React.createContext({
  title: "",
  eventList: [] as Event[],
  addEvent: (event: Event) => {},
  removeEvent: (index: number) => {},
  setTitle: (title: string) => {},
  reset: () => {}
});
