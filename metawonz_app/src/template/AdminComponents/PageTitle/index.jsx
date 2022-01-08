import React from "react";

const PageTitle = () => {
  return (
    <div className="absolute bg-gray-200 w-full h-full">
      <div className="my-6 lg:my-12 container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between pb-4 border-b border-gray-300">
        <div>
          <h4 className="text-2xl font-bold leading-tight text-gray-800">
            All Users
          </h4>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
