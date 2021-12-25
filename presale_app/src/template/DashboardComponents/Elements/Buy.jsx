import React from "react";

const Buy = () => {
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
            1 BUSD <br /> <span className="text-green-500"> = </span> <br /> 4
            METAWONZ
          </div>
        </div>
      </div>
      <div>
        <button className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
          Buy
        </button>
        <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
          Don't miss out on metaverse benefits with metawonz
        </p>
      </div>
    </div>
  );
};

export default Buy;
