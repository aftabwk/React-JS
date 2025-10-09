import { useState } from "react";
import UserContext from "./userContext";
//Step:2 Create Provider.
const UserContextProvider = ({ children }) => {
  //this children will be the pages which can access the data.
  const [user, setUser] = useState(null);
  //this is the data which will be transfer in app.
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
