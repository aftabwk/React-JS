import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    //we are wrapping up the childrens by UserContextProvider. it will circulate the whole data in children pages.
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
