import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import CompaniesList from "./companies/CompaniesList";
import Company from "./companies/Company";
import Home from "./Home";
import Jobs from "./jobs/Jobs";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import Profile from "./Profile";
import UserContext from "./UserContext";

const Routes = ({ setToken }) => {
  const { currentUser } = useContext(UserContext);
 
  return (
    <div className="container mt-4 text-center">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login setToken={setToken} />
        </Route>
        <Route exact path="/jobs">
          <Jobs />
        </Route>
        <Route exact path="/companies/:handle">
          <Company />
        </Route>
        <Route exact path="/companies">
          <CompaniesList />
        </Route>
        <PrivateRoute exact path="/profile">
          <Profile />
        </PrivateRoute>

        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default Routes;
