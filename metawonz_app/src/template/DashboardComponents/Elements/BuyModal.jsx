import React, { useState, Fragment } from "react";
import { useSelector } from "react-redux";
import { Label, SpinnerButton, TextField } from "../..";
//import { userSelector } from "../../../store/slices/UserSlice";

import { moralisSelector } from "../../../store/slices/MoralisSlice";
//import { useDispatch } from "react-redux";
import Moralis from "moralis";

const BuyModal = ({ showModal, modalOpen }) => {
  const [loading, setLoading] = useState(false);
  //const { userAccount } = useSelector(userSelector);

  const { userBalances } = useSelector(moralisSelector);

  const [amountToBePurchased, setAmountToBePurchased] = useState(0);
  const [errorForm, setError] = useState(false);

  const handleChange = (event) => {
    const { value } = event.target;
    if (value > userBalances) {
      setError(true);
      setAmountToBePurchased(value);
      return;
    }
    setError(false);
    setAmountToBePurchased(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    await Moralis.authenticate();
    const transactionOptions = {
      type: "erc20",
      amount: Moralis.Units.Token(`${amountToBePurchased}`, "18"),
      receiver: "0x712dfBfda89595D62D0EFD60AFD37059034657DB",
      contractAddress: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
      awaitReceipt: false, // should be switched to false
    };

    const transaction = await Moralis.transfer(transactionOptions);

    transaction
      .on("transactionHash", (hash) => {
        console.log(hash);
        setLoading(false);
      })
      .on("receipt", (receipt) => {
        console.log(receipt);
        setLoading(false);
      })
      .on("confirmation", (confirmationNumber, receipt) => {
        console.log(confirmationNumber);
        console.log(receipt);
        setLoading(false);
      })
      .on("error", (error) => {
        console.log(error);
        setLoading(false);
      });
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
                      <TextField
                        type="number"
                        placeholder="BUSD value to buy"
                        value={amountToBePurchased}
                        name="busdValue"
                        onChange={handleChange}
                      />
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
                    {loading ? (
                      <SpinnerButton />
                    ) : (
                      <Fragment>
                        {errorForm ? (
                          <Fragment>
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
        </>
      ) : null}
    </>
  );
};

export default BuyModal;
