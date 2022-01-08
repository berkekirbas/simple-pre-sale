import React from "react";

import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();

  return (
    <div className="max-w-screen-xl py-20 mx-auto px-6 ">
      <div className="flex flex-col items-center justify-center h-3/4 pt-24">
        <img
          className="w-96 object-contain"
          src="/assets/images/404.png"
          alt="Not found"
        />

        <button
          className="bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105"
          onClick={() => history.push("/auth/signin")}
        >
          Go back to Dashboard or Login Page
        </button>
      </div>
    </div>
  );
};

export default NotFound;
