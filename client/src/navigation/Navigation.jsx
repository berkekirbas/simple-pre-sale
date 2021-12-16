import { Loader } from "../template";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { GuestRoutes } from "../config/RouteConfig";

import ProtectedRoute from './ProtectedRoute'
import {AuthenticationRoute} from "./AuthenticationRoute";

const Home = React.lazy(() => import("../pages/Home"));

function Navigation() {
  return (
    <Router>
      <React.Suspense fallback={<Loader />}>
        <Switch>
            <Route exact path={PUBLIC_ROUTES.HOME} render={() => <Home />} />
            <AuthenticationRoute exact path={} component={}/>
            <ProtectedRoute exact path={} component={}/>
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default Navigation;
