import React, { Fragment } from "react";
import { Elements, Header } from "template";

const Dashboard = () => {
  return (
    <div className="bg-gray-900">
      <Fragment>
        <Header />
        <main>
          <Elements />
        </main>
      </Fragment>
    </div>
  );
};

export default Dashboard;
