import React from "react";

const Counter = () => {
  return (
    <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
      <div className="text-center">
        <div className="text-lg font-semibold">On Presale</div>
        <div className="flex items-center justify-center mt-2">
          <div className="text-green-500 mr-1 text-2xl font-bold">
            0/200.000.000
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="text-lg font-semibold">You Bought in total</div>
        <div className="flex items-center justify-center mt-2">
          <div className="text-green-500 mr-1 text-2xl font-bold">0</div>
        </div>
      </div>

      <div className="text-center">
        <div className="text-lg font-semibold">Countdown</div>
        <div className="flex items-center justify-center mt-2">
          <div className="text-green-500 mr-1 text-2xl font-bold">0</div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
