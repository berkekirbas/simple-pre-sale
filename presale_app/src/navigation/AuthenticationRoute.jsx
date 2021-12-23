import useAuth from "hooks/useAuth";
import React, { useEffect, useState } from "react";

import { Route, Redirect } from "react-router-dom";

import { ProtectedRoutes } from "../config/RouteConfig";

const AuthenticationRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated, isLoading } = useAuth();

  return isLoading ? null : (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Redirect to={ProtectedRoutes.PRESALE_DASHBOARD} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default AuthenticationRoute;
