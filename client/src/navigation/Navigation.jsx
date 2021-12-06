import { Loader } from "../template";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { GuestRoutes } from "../config/RouteConfig";

const Home = React.lazy(() => import("../pages/Home"));

function Navigation() {
  return (
    <Router>
      <React.Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={GuestRoutes.HOME} render={() => <Home />} />
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default Navigation;
