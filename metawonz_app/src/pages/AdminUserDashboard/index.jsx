import React, { Fragment } from "react";

import { PageContent, Navbar } from "../../template";

const AdminUserDashboard = () => {
  return (
    <Fragment>
      <div className="absolute bg-gray-200 w-full h-full">
        <Navbar />
        <div className="my-6 lg:my-12 container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between pb-4 border-b border-gray-300">
          <div>
            <h4 className="text-2xl font-bold leading-tight text-gray-800">
              All Users
            </h4>
          </div>
        </div>
        <PageContent />
      </div>
    </Fragment>
  );
};

export default AdminUserDashboard;
