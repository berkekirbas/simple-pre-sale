import React, { Fragment, useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { Buy, Counter, Header, MetawonzCount, Wallet } from "../../template";
import { useDispatch } from "react-redux";

import { getUserInfo } from "../../store/slices/UserSlice";
import Cookies from "js-cookie";

const Dashboard = () => {
  const { user } = useMoralis();

  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    setUserInfo(user);
  }, [user]);

  const dispatch = useDispatch();

  useEffect(() => {
    async function initializer() {
      await Cookies.remove("_csrf");
      await dispatch(getUserInfo());
    }
    initializer();
  }, [dispatch]);

  return (
    <div className="bg-gray-900">
      <Fragment>
        <Header />
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <MetawonzCount userInfo={userInfo} />
          <div className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
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
