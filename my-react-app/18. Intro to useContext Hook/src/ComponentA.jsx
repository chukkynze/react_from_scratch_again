import ComponentB from "./ComponentB.jsx";
import {useState} from "react";
import {UserContext} from "./Context.jsx";


function ComponentA(){

  const [user] = useState({
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
