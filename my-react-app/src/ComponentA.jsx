import ComponentB from "./ComponentB.jsx";
import {useState, createContext} from "react";

export const UserContext = createContext();

function ComponentA(){

  const [user, setUser] = useState({
    firstName: "Chukky",
    lastName: "Nze",
    isMember: true,
  });

  return(
    <div className="box">
      <h1>Component A</h1>
      <h2>{`Hello ${user.firstName}`}</h2>
      <UserContext.Provider value={user}>
        <ComponentB />
      </UserContext.Provider>
    </div>
  );
}

export default ComponentA
