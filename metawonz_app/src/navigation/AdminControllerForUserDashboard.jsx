import React, { Fragment } from "react";
import useAdminController from "../hooks/useAdminControler";

import { Redirect } from "react-router-dom";

import { ProtectedRoutes } from "../config/RouteConfig";

const AdminControllerForUserDashboard = ({ children }) => {
  const { isLoading, isAdmin } = useAdminController();

  return isLoading ? null : isAdmin ? (
    <Redirect to={ProtectedRoutes.ADMIN_DASHBOARD} />
  ) : (
    <Fragment>{children}</Fragment>
  );
};

export default AdminControllerForUserDashboard;
