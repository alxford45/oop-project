import { Event, isEvent } from "../../types/Event";

export const ADD_EVENT = "ADD_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";
export const SET_TITLE = "SET_TITLE";
export const RESET = "RESET";

interface State {
  title: string;
  eventList: Event[];
}
interface Action {
  type: string;
  payload: Event | string | number | null;
}

type ListReducer = (state: State, action: Action) => State;

export const eventReducer: ListReducer = (state, action) => {
  try {
    switch (action.type) {
      case "SET_TITLE": {
        if (typeof action.payload !== "string") {
          throw "Error: expected payload to be type 'string' for 'SET_TITLE'";
        }
        const title = action.payload;
        return { title: title, eventList: state.eventList };
      }
      case "ADD_EVENT": {
        if (!isEvent(action.payload)) {
          throw "Error: expected payload to be type 'Event' for 'ADD_EVENT'";
        }
        const event: Event = action.payload;
        return {
          title: state.title,
          eventList: [...state.eventList, event]
        };
      }
      case "REMOVE_EVENT": {
        if (typeof action.payload !== "number") {
          throw "Error: expected payload to be type 'number' for 'REMOVE_EVENT'";
        }
        const eventList = state.eventList.filter(
          (_, index) => index !== action.payload
        );
        return { title: state.title, eventList: eventList };
      }
      case "RESET": {
        if (typeof action.payload !== null) {
          throw "Error: expected payload to be type 'null' for 'RESET'";
        }
        return { title: "", eventList: [] };
      }
      default:
        return state;
    }
  } catch (error) {
    console.log(error);
    console.log("Warning: returning previous state before error");
    return state;
  }
};
