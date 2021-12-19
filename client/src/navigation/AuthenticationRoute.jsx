import React from "react";
import { Route, Redirect } from "react-router-dom";

import { ProtectedRoutes } from "../config/RouteConfig";

const AuthenticationRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("auth_key") ? (
          <Redirect to={ProtectedRoutes.PRESALE_DASHBOARD} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default AuthenticationRoute;
