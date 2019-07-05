import * as React from "react";
import {
  ADD_EVENT,
  REMOVE_EVENT,
  SET_TITLE,
  RESET,
  eventReducer
} from "./event.reducer";
import { EventContext } from "./event.context";
import { Event } from "../../types/Event";

export const EventProvider = (props: any) => {
  const [state, dispatch] = React.useReducer(eventReducer, {
    title: "",
    eventList: [] as Event[]
  });
  const addEvent = (event: Event) => {
    dispatch({ type: ADD_EVENT, payload: event });
  };
  const removeEvent = (index: number) => {
    dispatch({ type: REMOVE_EVENT, payload: index });
  };
  const setTitle = (title: string) => {
    dispatch({ type: SET_TITLE, payload: title });
  };
  const reset = () => {
    dispatch({ type: RESET, payload: null });
  };
  return (
    <EventContext.Provider
      value={{
        title: state.title,
        eventList: state.eventList,
        addEvent: addEvent,
        removeEvent: removeEvent,
        setTitle: setTitle,
        reset: reset
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
};
