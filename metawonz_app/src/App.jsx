import React from "react";

import { withRouter } from "react-router-dom";

import Navigator from "./navigation/Navigator";

const App = () => {
  return <Navigator />;
};

export default withRouter(App);
