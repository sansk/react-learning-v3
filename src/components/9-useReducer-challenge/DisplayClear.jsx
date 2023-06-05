import { useState, useReducer } from "react";
import { data } from "../../data";
import { reeducerFn } from "./reducer";

const defaultState = {
  people: data,
};

export const DisplayClear = () => {
  const [state, dispatchFn] = useReducer(reeducerFn, defaultState);

  const removeItem = (id) => {
    dispatchFn({ type: "REMOVE_ITEM", payload: { id } });
  };

  const clearAllItems = () => {
    dispatchFn({ type: "CLEAR_LIST" });
  };
  const resetAllItems = () => {
    dispatchFn({ type: "RESET_LIST" });
  };

  return (
    <div className="container">
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button
              type="button"
              className="btn"
              onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        );
      })}
      {state.people.length ? (
        <button type="button" className="btn" onClick={clearAllItems}>
          clear
        </button>
      ) : (
        <button type="button" className="btn" onClick={resetAllItems}>
          Reset
        </button>
      )}
    </div>
  );
};
