import React, { useState, Fragment } from "react";
import { useSelector } from "react-redux";
import { Label, SpinnerButton, TextField } from "../..";
import { addMetawonzToUser } from "../../../store/slices/UserSlice";

import {
  moralisSelector,
  getUserTokenBalancer,
} from "../../../store/slices/MoralisSlice";
//import { useDispatch } from "react-redux";
import { useMoralis } from "react-moralis";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const BuyModal = ({ showModal, modalOpen }) => {
  const [process, setProcess] = useState(false);

  const dispatch = useDispatch();

  const { userBalances } = useSelector(moralisSelector);

  const [amountToBePurchased, setAmountToBePurchased] = useState(0);
  const [errorForm, setError] = useState(false);

  const { Moralis, enableWeb3, user } = useMoralis();

  const dispatcher = async () => {
    await dispatch(getUserTokenBalancer(user));
  };

  const handleChange = (event) => {
    const { value } = event.target;
    if (value > userBalances || value < 1 || value === 0) {
      setError(true);
      setAmountToBePurchased(value);
      return;
    }
    setError(false);
    setAmountToBePurchased(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setProcess(true);

      if (amountToBePurchased === 0) {
        setError(true);
        return;
      }

      let metamask = await Moralis.isMetaMaskInstalled();

      await enableWeb3({ provider: metamask ? "" : "walletconnect" });

      const transactionOptions = {
        type: "erc20",
        amount: Moralis.Units.Token(`${amountToBePurchased}`, "18"),
        receiver: "0x712dfBfda89595D62D0EFD60AFD37059034657DB",
        contractAddress: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
        awaitReceipt: false, // should be switched to false
      };

      const transaction = await Moralis.transfer(transactionOptions);

      transaction
        .on("receipt", async (receipt) => {
          const values = {
            purchasedMetawonz: amountToBePurchased,
          };

          await dispatch(addMetawonzToUser(values));
          await dispatcher();

          setAmountToBePurchased(0);
          setProcess(false);
          toast("Payment Successfully!");
          setError(false);
        })
        .on("error", (error) => {
          console.log(error);
          setProcess(false);
        });
    } catch (error) {
      toast("Error");
      setProcess(false);
    }
  };

  return (
    <>
      {modalOpen ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-2xl font-semibold"> Buy </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => showModal(false)}
                  >
                    <span className="text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      X
                    </span>
                  </button>
                </div>
                {/*body*/}
                <form onSubmit={handleSubmit}>
                  <div className="relative p-6 flex-auto">
                    <Fragment>
                      <Label
                        text={`How many BUSD do you want to buy? You have ${userBalances} BUSD`}
                      />
                      {process ? (
                        <TextField
                          disabled
                          type="number"
                          placeholder="BUSD value to buy"
                          value={amountToBePurchased}
                          name="busdValue"
                        />
                      ) : (
                        <TextField
                          type="number"
                          placeholder="BUSD value to buy"
                          value={amountToBePurchased}
                          name="busdValue"
                          onChange={handleChange}
                        />
                      )}
                      {errorForm ? (
                        <span className="text-red-500">
                          please do not enter more than the number of busd you
                          have
                        </span>
                      ) : null}
                    </Fragment>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    {process ? (
                      <SpinnerButton />
                    ) : (
                      <Fragment>
                        {errorForm ? (
                          <Fragment>
                            <button
                              onClick={() => showModal(false)}
                              className="bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="submit"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={() => showModal(false)}
                              disabled
                              className="bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="submit"
                            >
                              Buy Now
                            </button>
                          </Fragment>
                        ) : (
                          <Fragment>
                            <button
                              onClick={() => showModal(false)}
                              className="bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="submit"
                            >
                              Cancel
                            </button>
                            <button
                              className="bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="submit"
                            >
                              Buy Now
                            </button>
                          </Fragment>
                        )}
                      </Fragment>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </>
      ) : null}
    </>
  );
};

export default BuyModal;
