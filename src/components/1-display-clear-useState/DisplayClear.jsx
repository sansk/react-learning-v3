import { useState } from "react";
import { data } from "../../data";

export const DisplayClear = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    const newPeople = people.filter((pers) => pers.id !== id);
    setPeople(newPeople);
  };

  const clearAllItems = () => {
    setPeople([]);
  };

  return (
    <div>
      {people.map((person) => {
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
      <button type="button" className="btn" onClick={clearAllItems}>
        clear all items
      </button>
    </div>
  );
};
