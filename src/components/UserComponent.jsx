import userData from "./userData.js";
import { useEffect, useState } from "react";

export default function UserComponent() {
  const [users, setUsers] = useState(userData);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  function handleAddUser() {
    if (username.trim() === "" || email.trim() === "") return;

    const newUser = { username, email };
    console.log(newUser);

    setUsers([...users, newUser]);

    const updatedUsers = [...users, newUser];

    setUsers(updatedUsers);

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setUsername("");
    setEmail("");
  }

  //Hente nye brukere fra localStorage

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    } else {
      setUsers(userData);
    }
  }, []);

  return (
    <>
      <div className="">
        <div className="mb-3 w-xl border-1 py-5 px-15 shadow-2xl">
          <h1 className="text-5xl text-white font-bold my-8 text-center">
            Users
          </h1>
          <ul className="mb-7 space-y-2 text-black">
            {users.map((user, index) => (
              <li key={index} className="p-4 bg-amber-100 rounded shadow-xl">
                <span className=" font-semibold">
                  Username: {user.username} <br />
                  Email: {user.email}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col w-xl border-1 space-y-2 py8 px-14 mb-20 shadow-2xl ">
          <section className=" flex flex-col py-5 px-10 text-white">
            <h2 className="text-3xl text-white mb-8 font-semibold">
              Register new user
            </h2>

            <label htmlFor="username" className="text-xl mb-3 text-white">
              <span className="text-white">Username:</span>
              <input
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                type="text"
                placeholder="Enter username"
                id="username"
                className="text-black bg-amber-50 hover:bg-orange-200 focus:bg-orange-200 italic ml-3 py-1 px-2"
              />
            </label>
            <label htmlFor="email" className="text-xl text-white">
              Email:
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder="Enter email address"
                id="email"
                className="text-black bg-amber-50 hover:bg-orange-200 focus:bg-orange-200 transition-colors italic mb-2 ml-3 py-1 px-2"
              />
            </label>
          </section>
          <section className="flex flex-col justify-center items-center  w-full">
            <button
              onClick={handleAddUser}
              className="w-96 mb-5 py-6 bg-amber-50 shadow hover:bg-orange-300 active:scale-95 transition-transform  cursor-pointer"
            >
              <p className="text-xl text-black font-extrabold">Add new user</p>
            </button>
          </section>
        </div>
      </div>
    </>
  );
}
