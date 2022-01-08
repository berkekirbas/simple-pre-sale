import React, { Fragment } from "react";
import useAdminController from "../hooks/useAdminControler";

import { Redirect } from "react-router-dom";

import { ProtectedRoutes } from "../config/RouteConfig";

const AdminController = ({ children }) => {
  const { isLoading, isAdmin } = useAdminController();

  return isLoading ? null : isAdmin ? (
    <Fragment>{children}</Fragment>
  ) : (
    <Redirect to={ProtectedRoutes.PRESALE_DASHBOARD} />
  );
};

export default AdminController;
