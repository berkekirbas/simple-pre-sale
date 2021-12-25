import React from "react";

const Wallet = () => {
  return (
    <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
      <div className="text-center">
        <div className="text-lg font-semibold">Your Wallet Address</div>
        <div className="flex items-center justify-center mt-2">
          <div className="mr-1 text-2xl font-bold">Not Setting</div>
        </div>
      </div>
      <div>
        <button className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none">
          Set
        </button>
        <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
          <span className="text-red-500">
            Please be sure write an BEP20 ADDRESS
          </span>
        </p>
      </div>
    </div>
  );
};

export default Wallet;
