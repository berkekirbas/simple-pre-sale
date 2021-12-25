import React, { Fragment } from "react";
import { Buy, Counter, Header, MetawonzCount, Wallet } from "../../template";

const Dashboard = () => {
  return (
    <div className="bg-gray-900">
      <Fragment>
        <Header />
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <MetawonzCount />
          <div className=" max-w-md  gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
            <Wallet />
            <Buy />
            <Counter />
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default Dashboard;
