import React from "react";

import { Switch, Route } from "react-router-dom";

import AuthenticationRoute from "./AuthenticationRoute";
import ProtectedRoute from "./ProtectedRoute";

import { AuthenticationRoutes, ProtectedRoutes } from "../config/RouteConfig";

import { Dashboard, Signin, Signup, NotFound } from "pages";

const Navigator = () => {
  return (
    <Switch>
      <ProtectedRoute
        exact
        path={ProtectedRoutes.PRESALE_DASHBOARD}
        component={() => <Dashboard />}
      />

      <AuthenticationRoute
        exact
        path={AuthenticationRoutes.SIGNIN}
        component={() => <Signin />}
      />

      <AuthenticationRoute
        exact
        path={AuthenticationRoutes.SIGNUP}
        component={() => <Signup />}
      />

      <Route path="*" component={() => <NotFound />}></Route>
    </Switch>
  );
};

export default Navigator;
