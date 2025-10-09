import React, { useState, useContext } from "react";
import UserContext from "../context/userContext";

function Profile() {
  //useContext can get UserContext and fetch the methods from it.
  const { user } = useContext(UserContext);
  if (!user) return <div>Please Login</div>;
  else return <div>Welcome {user.username}</div>;
}

export default Profile;
