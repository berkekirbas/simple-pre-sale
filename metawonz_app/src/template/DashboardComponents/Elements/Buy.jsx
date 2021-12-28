import React, { useState, Fragment } from "react";
import { useSelector } from "react-redux";
import { moralisSelector } from "../../../store/slices/MoralisSlice";
import BuyModal from "./BuyModal";

import { useMoralis } from "react-moralis";

const Buy = () => {
  const [modalOpen, showModal] = useState(false);
  const { isAuthenticated } = useMoralis();
  const { userBalances } = useSelector(moralisSelector);

  return (
    <div className="relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow border-green-accent-400">
      <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
        <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded bg-green-accent-400">
          Buy Now
        </div>
      </div>
      <div className="text-center">
        <div className="text-lg font-semibold">Metawonz </div>
        <div className="flex items-center justify-center mt-2">
          <div className="mr-1 text-3xl font-bold">
            1 BUSD <br /> <span className="text-green-500"> = </span> <br /> 10
            METAWONZ
          </div>
        </div>
      </div>
      <div>
        <Fragment>
          {isAuthenticated ? (
            <Fragment>
              {userBalances > 0 ? (
                <button
                  onClick={() => showModal(true)}
                  className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                  Buy
                </button>
              ) : (
                <button
                  disabled
                  className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                  You dont have a BUSD
                </button>
              )}
            </Fragment>
          ) : (
            <button
              disabled
              className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Wallet is not connected
            </button>
          )}
        </Fragment>

        <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
          Don't miss out on metaverse benefits with metawonz
        </p>
      </div>
      {isAuthenticated ? (
        <BuyModal showModal={showModal} modalOpen={modalOpen} />
      ) : null}
    </div>
  );
};

export default Buy;
