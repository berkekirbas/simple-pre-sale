import React from "react";

import { Switch, Route } from "react-router-dom";

import AuthenticationRoute from "./AuthenticationRoute";
import ProtectedRoute from "./ProtectedRoute";

import { AuthenticationRoutes, ProtectedRoutes } from "../config/RouteConfig";

import NotFound from "pages/NotFound";

import Signin from "pages/Signin";
import Signup from "pages/Signup";
import Dashboard from "pages/Dashboard";

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
