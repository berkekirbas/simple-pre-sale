import React, { Fragment, useEffect } from "react";
import AdminService from "../../services/Admin.service";

import { PageContent, Navbar } from "../../template";

const AdminUserDashboard = () => {
  useEffect(() => {
    async function getUsers() {
      const data = await AdminService.getAllUsers();
      console.log(data);
    }
    getUsers();
  }, []);

  return (
    <Fragment>
      <Navbar />
      <div className="absolute bg-gray-200 w-full h-full">
        <div className="my-6 lg:my-12 container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between pb-4 border-b border-gray-300">
          <div>
            <h4 className="text-2xl font-bold leading-tight text-gray-800">
              All Users
            </h4>
          </div>
        </div>
      </div>
      <main>
        <PageContent />
      </main>
    </Fragment>
  );
};

export default AdminUserDashboard;
