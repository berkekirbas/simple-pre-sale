import React from "react";

import { Switch, Route } from "react-router-dom";

import AuthenticationRoute from "./AuthenticationRoute";
import ProtectedRoute from "./ProtectedRoute";

import { AuthenticationRoutes, ProtectedRoutes } from "../config/RouteConfig";

import {
  Dashboard,
  Signin,
  Signup,
  NotFound,
  AdminDashboard,
  AdminUserDashboard,
} from "../pages";

import { MoralisProvider } from "react-moralis";
import { Provider } from "react-redux";
import store from "../store";
import AdminController from "./AdminController";
import AdminControllerForUserDashboard from "./AdminControllerForUserDashboard";

const Navigator = () => {
  return (
    <Switch>
      <ProtectedRoute
        exact
        path={ProtectedRoutes.PRESALE_DASHBOARD}
        component={() => (
          <AdminControllerForUserDashboard>
            <MoralisProvider
              serverUrl={"https://ivhjvqqamaom.usemoralis.com:2053/server"}
              appId={"neyBlY7EjNj8KoRNf5B4rH2g0LqXlkrcGp6Dhr5u"}
            >
              <Provider store={store}>
                <Dashboard />
              </Provider>
            </MoralisProvider>
          </AdminControllerForUserDashboard>
        )}
      />

      <ProtectedRoute
        exact
        path={ProtectedRoutes.ADMIN_DASHBOARD}
        component={() => (
          <AdminController>
            <AdminDashboard />
          </AdminController>
        )}
      />

      <ProtectedRoute
        exact
        path={ProtectedRoutes.ADMIN_DASHBOARD_USER_AREA}
        component={() => (
          <AdminController>
            <Provider store={store}>
              <AdminUserDashboard />
            </Provider>
          </AdminController>
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
