import {useUserContext} from "./Context.jsx";


function ComponentD(){

  const user = useUserContext();

  return(
    <div className="box">
      <h1>Component D</h1>
      <h2>{`Bye ${user.firstName} ${user.lastName}`}</h2>
    </div>
  );
}

export default ComponentD
