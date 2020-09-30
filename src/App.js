import React, { useEffect, useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import jwt_decode from "jwt-decode";
import Routes from "./Routes";
import JoblyApi from "./JoblyApi";
import UserContext from "./UserContext";
import Navigation from "./Navigation";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage("jobly_token");

  useEffect(() => {
    async function getCurrentUser() {
      try {
        let { username } = jwt_decode(token);
        let currentUser = await JoblyApi.getCurrentUser(username);
        setCurrentUser(currentUser);
      } catch (err) {
        setCurrentUser(null);
      }
    }
    document.title = "Jobly";
    getCurrentUser();
  }, [token]);

  const handleLogout = () => {
    setToken(null);
    setCurrentUser(null);
  };

  return (
    <div className="container-fluid">
      <BrowserRouter>
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
          <Navigation logout={handleLogout} />
          <Routes setToken={setToken} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
