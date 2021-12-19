import useAuth from "hooks/useAuth";
import React, { useEffect, useState } from "react";

import { Route, Redirect } from "react-router-dom";

import { AuthenticationRoutes, ProtectedRoutes } from "../config/RouteConfig";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [authStatus, setAuthStatus] = useState(null);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    setAuthStatus(isAuthenticated);
  }, [isAuthenticated]);

  return (
    <Route
      {...rest}
      render={(props) =>
        authStatus ? (
          <Component {...props} />
        ) : (
          <Redirect to={AuthenticationRoutes.SIGNIN} />
        )
      }
    />
  );
};

export default ProtectedRoute;
