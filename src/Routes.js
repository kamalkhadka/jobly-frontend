import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import CompaniesList from "./companies/CompaniesList";
import Company from "./companies/Company";
import Home from "./Home";
import Jobs from "./jobs/Jobs";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import Profile from "./Profile";

const Routes = ({ setToken }) => {
  return (
    <div className="container mt-4 text-center">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login setToken={setToken} />
        </Route>
        <PrivateRoute exact path="/jobs">
          <Jobs />
        </PrivateRoute>
        <PrivateRoute exact path="/companies/:handle">
          <Company />
        </PrivateRoute>
        <PrivateRoute exact path="/companies">
          <CompaniesList />
        </PrivateRoute>
        <PrivateRoute exact path="/profile">
          <Profile />
        </PrivateRoute>

        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default Routes;
