import React, { Fragment } from "react";
import { useMoralis } from "react-moralis";

import { metamaskDetector } from "../../../utils/metamaskDetector";

const ConnectWalletButton = () => {
  const { authenticate, isAuthenticated, logout } = useMoralis();

  const connect = async () => {
    // detect metamask
    /* let detect = metamaskDetector();

    if (detect) {
      authenticate({ chainId: 56 });
      return;
    }*/
    await authenticate({
      provider: "walletconnect",
      chainId: 56,
      signingMessage: "Metawonz Wallet Accessing",
    });
  };

  const disconnect = async () => {
    await logout();
  };

  return (
    <Fragment>
      {isAuthenticated ? (
        <button
          onClick={disconnect}
          className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          aria-label="Disconnect"
          title="Disconnect"
        >
          Disconnect
        </button>
      ) : (
        <button
          onClick={connect}
          className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          aria-label="Connect Wallet"
          title="Connect Wallet"
        >
          Connect Wallet
        </button>
      )}
    </Fragment>
  );
};

export default ConnectWalletButton;
