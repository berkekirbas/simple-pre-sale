const Elements = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            The Number of Metawonz You Have
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <span className="relative text-white">0</span>
          </span>
        </h2>
      </div>
      <div className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
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
                1 BUSD <br /> <span className="text-green-500"> = </span> <br />{" "}
                4 METAWONZ
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

          <div>
            <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
              Coming Soon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Elements;
