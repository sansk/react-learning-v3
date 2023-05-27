import { useState } from "react";
import { data } from "../../data";

export const ControlledInput = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) return;

    const fakeId = Date.now();

    // const newUser = { id: fakeId, name };
    // const updatedUser = [...users, newUser];
    // setUsers(updatedUser);

    // The abv 3 lines can be written as below.
    setUsers([...users, { id: fakeId, name }]);

    setName("");
  };

  const removeUser = (id) => {
    setUsers(users.filter((person) => person.id !== id));
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <button className="btn" onClick={() => removeUser(user.id)}>
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
