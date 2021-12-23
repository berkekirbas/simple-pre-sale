import React from "react";

import Spinner from "./Spinner";

const SpinnerButton = () => {
  return (
    <button
      disabled
      className="  w-full py-3 bg-primary text-white ring-red-400 focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300 poppins "
    >
      <div className="inline-flex item-center">
        <Spinner /> <span className="ml-1">Processing</span>
      </div>
    </button>
  );
};

export default SpinnerButton;
