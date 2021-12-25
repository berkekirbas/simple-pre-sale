import useAuth from "../hooks/useAuth";
import React from "react";

import { Route, Redirect } from "react-router-dom";

import { AuthenticationRoutes } from "../config/RouteConfig";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated, isLoading } = useAuth();

  return isLoading ? null : (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={AuthenticationRoutes.SIGNIN} />
        )
      }
    />
  );
};

export default ProtectedRoute;
