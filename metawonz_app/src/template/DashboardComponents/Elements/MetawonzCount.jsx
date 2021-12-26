import React, { Fragment, useEffect } from "react";
import { useMoralis } from "react-moralis";

import { useDispatch, useSelector } from "react-redux";
import {
  moralisSelector,
  getUserTokenBalancer,
} from "../../../store/slices/MoralisSlice";
import { userSelector } from "../../../store/slices/UserSlice";

const MetawonzCount = ({ userInfo }) => {
  const { isAuthenticated } = useMoralis();

  const { userBalances } = useSelector(moralisSelector);
  const { userAccount } = useSelector(userSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) dispatch(getUserTokenBalancer(userInfo));
  }, [dispatch, userInfo, isAuthenticated]);

  return (
    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <div>
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          Hello
        </p>
      </div>
      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        <span className="relative inline-block">
          <span className="relative text-white">{userAccount.name}</span>
        </span>
      </h2>

      <br />
      <hr />
      <br />

      <div>
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          The Number of Metawonz You Have
        </p>
      </div>
      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        <span className="relative inline-block">
          <span className="relative text-white">
            {userAccount.metawonzValue}
          </span>
        </span>
      </h2>

      <br />
      <hr />
      <br />

      <div>
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          Your BUSD Value in Wallet
        </p>
      </div>
      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        <span className="relative inline-block">
          <span className="relative text-white">
            {isAuthenticated ? (
              <Fragment>
                {userBalances > 0 ? (
                  userBalances
                ) : (
                  <span className="text-red-500">You dont have BUSD</span>
                )}
              </Fragment>
            ) : (
              <>Wallet is not connected</>
            )}
          </span>
        </span>
      </h2>
    </div>
  );
};

export default MetawonzCount;
