import useAuth from "hooks/useAuth";
import React, { useEffect, useState } from "react";

import { Route, Redirect } from "react-router-dom";

import { ProtectedRoutes } from "../config/RouteConfig";

const AuthenticationRoute = ({ component: Component, ...rest }) => {
  const [authStatus, setAuthStatus] = useState(null);
  const { isAuthenticated, error, isLoading } = useAuth();

  useEffect(() => {
    setAuthStatus(isAuthenticated);
  }, [isAuthenticated]);

  return (
    <Route
      {...rest}
      render={(props) =>
        authStatus ? (
          <Redirect to={ProtectedRoutes.PRESALE_DASHBOARD} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default AuthenticationRoute;
