import React from "react";
import { ProtectedRoutes } from "../../../config/RouteConfig";
import { Link } from "react-router-dom";

const PageTitle = () => {
  return (
    <div className="absolute bg-gray-200 w-full h-full">
      <div className="my-6 lg:my-12 container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between pb-4 border-b border-gray-300">
        <div>
          <h4 className="text-2xl font-bold leading-tight text-gray-800">
            Welcome to the Admin Dashboard, Other features is will be add.
          </h4>
          <br/>
          <button className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
            <Link to={ProtectedRoutes.ADMIN_DASHBOARD_USER_AREA}>
              Click for Manage User
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
