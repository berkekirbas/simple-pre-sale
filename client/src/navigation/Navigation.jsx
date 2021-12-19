/* Library Imports */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* Components */
import { Loader } from "../template";

/* Router Config */
import {
  AuthenticationRoutes,
  ProtectedRoutes,
  PublicRoutes,
} from "../config/RouteConfig";

/* Router Utils */
import ProtectedRoute from "./ProtectedRoute";
import AuthenticationRoute from "./AuthenticationRoute";

/* Pages */
const Home = React.lazy(() => import("../pages/Home"));
const Signin = React.lazy(() => import("../pages/Signin"));

const Navigation = () => {
  return (
    <Router>
      <React.Suspense fallback={<Loader />}>
        <Switch>
          {/* Public Routes */}
          <Route exact path={PublicRoutes.HOME} component={() => <Home />} />

          {/* Authentication Routes */}

          <AuthenticationRoute
            exact
            path={AuthenticationRoutes.LOGIN}
            component={() => <Signin />}
          />

          <AuthenticationRoute
            exact
            path={AuthenticationRoutes.REGISTER}
            component={<>pro</>}
          />
          <AuthenticationRoute
            exact
            path={AuthenticationRoutes.RESET_PASSWORD}
            component={<>pro</>}
          />

          {/* Protected Routes */}
          <ProtectedRoute
            exact
            path={ProtectedRoutes.PRESALE_DASHBOARD}
            component={<>pro</>}
          />
        </Switch>
      </React.Suspense>
    </Router>
  );
};

export default Navigation;
