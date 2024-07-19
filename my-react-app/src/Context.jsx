import {createContext, useContext} from "react";

export const UserContext = createContext(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export function useUserContext(){
  const user = useContext(UserContext);

  if (user === undefined) {
    throw new Error("The user object in the UserContext is currently undefined while being used.");
  }

  return user;
}
