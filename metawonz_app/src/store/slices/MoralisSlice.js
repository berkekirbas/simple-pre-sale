import { createSlice } from "@reduxjs/toolkit";
import Moralis from "moralis";

export const initialState = {
  loading: false,
  hasErrors: false,
  userBalances: [],
};

export const moralisSelector = (state) => state.moralisSlice;

const moralisSlice = createSlice({
  name: "moralisSlice",
  initialState,
  reducers: {
    getUserTokenBalances: (state) => {
      state.loading = true;
    },
    getUserTokenBalancesSuccess: (state, { payload }) => {
      state.userBalances = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getUserTokenBalancesFail: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const {
  getUserTokenBalances,
  getUserTokenBalancesSuccess,
  getUserTokenBalancesFail,
} = moralisSlice.actions;

// The reducer
export default moralisSlice.reducer;

export const getUserTokenBalancer = (userInfo) => {
  return async (dispatch) => {
    dispatch(getUserTokenBalances());
    try {
      const data = await Moralis.Web3API.account.getTokenBalances({
        chain: "bsc",
        address: userInfo?.attributes.ethAddress,
      });

      let busd = data.find((busd) => busd.symbol === "BUSD");

      dispatch(
        getUserTokenBalancesSuccess(Moralis.Units.FromWei(busd.balance))
      );
    } catch (error) {
      dispatch(getUserTokenBalancesFail());
    }
  };
};
