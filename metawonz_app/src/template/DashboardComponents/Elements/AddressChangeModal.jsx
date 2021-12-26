import React, { useEffect, useState, Fragment } from "react";
import { useSelector } from "react-redux";
import { Label, SpinnerButton, TextField } from "../..";
import {
  userSelector,
  changeUserWithdrawalAddress,
} from "../../../store/slices/UserSlice";

import { useDispatch } from "react-redux";
import SecureService from "../../../services/Secure.service";

const AddressChangeModal = ({ showModal, modalOpen }) => {
  const { userAccount, loading } = useSelector(userSelector);

  const [newAddress, setNewAddress] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value } = event.target;
    setNewAddress(value);
  };

  useEffect(() => {
    SecureService.getCSRFToken();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newAddress === userAccount.walletAddress) {
      setError(true);
      return;
    }

    const values = {
      walletAddress: newAddress,
    };

    dispatch(changeUserWithdrawalAddress(values));
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
                  <h3 className="text-2xl font-semibold">Withdraw Address</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => showModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <form onSubmit={handleSubmit}>
                  <div className="relative p-6 flex-auto">
                    {userAccount.walletAddress === "" ? (
                      <TextField
                        type="text"
                        placeholder="Your Withdraw Address"
                        value={newAddress}
                        name="walletAddress"
                        onChange={handleChange}
                      />
                    ) : (
                      <Fragment>
                        <Label>Old Address</Label>
                        <TextField
                          disabled
                          type="text"
                          placeholder="Old Address"
                          value={userAccount.walletAddress}
                          name="oldWalletAddress"
                        />

                        <br />

                        <Label>New Address</Label>
                        <TextField
                          type="text"
                          placeholder="Your Withdraw Address"
                          value={newAddress}
                          name="walletAddress"
                          onChange={handleChange}
                        />
                      </Fragment>
                    )}
                    {error ? (
                      <span className="text-red-500">
                        Old and new Address is same
                      </span>
                    ) : null}
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    {loading ? (
                      <SpinnerButton />
                    ) : (
                      <button
                        className="bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                      >
                        Change
                      </button>
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

export default AddressChangeModal;
