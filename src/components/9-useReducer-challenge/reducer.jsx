import { data } from "../../data";

export const reeducerFn = (state, action) => {
  if (action.type === "CLEAR_LIST") {
    return { ...state, people: [] };
  }

  if (action.type === "RESET_LIST") {
    return { ...state, people: data };
  }

  if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter(
      (pers) => pers.id !== action.payload.id
    );
    return { ...state, people: newPeople };
  }

  return state;
};
