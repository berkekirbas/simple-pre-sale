import React from "react";

import { Switch, Route } from "react-router-dom";

import AuthenticationRoute from "./AuthenticationRoute";
import ProtectedRoute from "./ProtectedRoute";

import { AuthenticationRoutes, ProtectedRoutes } from "../config/RouteConfig";

import { Dashboard, Signin, Signup, NotFound } from "../pages";

import { MoralisProvider } from "react-moralis";

const Navigator = () => {
  return (
    <Switch>
      <ProtectedRoute
        exact
        path={ProtectedRoutes.PRESALE_DASHBOARD}
        component={() => (
          <MoralisProvider
            serverUrl={process.env.REACT_APP_MORALIS_SERVER_URL}
            appId={process.env.REACT_APP_MORALIS_APP_ID}
          >
            <Dashboard />
          </MoralisProvider>
        )}
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
