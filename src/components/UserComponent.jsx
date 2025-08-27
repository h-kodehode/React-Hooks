import userData from "./userData.js";
import { useState } from "react";

export default function UserComponent() {
  const [users, setUsers] = useState(userData);
  //   const [newUser, setNewUser] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  function handleAddUser() {
    if (username.trim() === "" || email.trim() === "") return;

    const newUser = { username, email };
    setUsers([...users, newUser]);

    setUsername("");
    setEmail("");
  }

  return (
    <>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.username} - {user.email}
          </li>
        ))}
      </ul>

      <label htmlFor="userName"></label>
      <input
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        type="text"
        placeholder="Username"
        className="bg-amber-50"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="text"
        placeholder="Email"
        className="text-amber-50"
      />

      <button onClick={handleAddUser}>Add new user</button>
    </>
  );
}
