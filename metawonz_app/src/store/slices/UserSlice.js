import { createSlice } from "@reduxjs/toolkit";
import SecureService from "../../services/Secure.service";
import UserService from "../../services/User.service";

export const initialState = {
  loading: false,
  hasErrors: false,
  userAccount: [],
  tempWalletAddress: "",
};

export const userSelector = (state) => state.userSlice;

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    getUser: (state) => {
      state.loading = true;
    },
    getUserSuccess: (state, { payload }) => {
      state.userAccount = payload;
      state.tempWalletAddress = state.userAccount.walletAddress;
      state.loading = false;
      state.hasErrors = false;
    },
    getUserFail: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },

    setWithdrawAddress: (state) => {
      state.loading = true;
    },
    setWithdrawAddressSuccess: (state, { payload }) => {
      state.userAccount.walletAddress = payload.walletAddress;
      state.tempWalletAddress = payload.walletAddress;
      state.loading = false;
      state.hasErrors = false;
    },
    setWithdrawAddressFail: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },

    addMetawonz: (state) => {
      state.loading = true;
    },
    addMetawonzSuccess: (state, { payload }) => {
      state.userAccount.metawonzValue = payload.data;
      state.loading = false;
      state.hasErrors = false;
    },
    addMetawonzFail: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const {
  getUser,
  getUserSuccess,
  getUserFail,
  setWithdrawAddress,
  setWithdrawAddressSuccess,
  setWithdrawAddressFail,
  addMetawonz,
  addMetawonzSuccess,
  addMetawonzFail,
} = userSlice.actions;

// The reducer
export default userSlice.reducer;

export const getUserInfo = () => {
  return async (dispatch) => {
    dispatch(getUser());
    try {
      const data = await UserService.getUser();

      dispatch(getUserSuccess(data.data));
    } catch (error) {
      dispatch(getUserFail());
    }
  };
};

export const changeUserWithdrawalAddress = (values) => {
  return async (dispatch) => {
    dispatch(setWithdrawAddress());
    await SecureService.getCSRFToken();
    try {
      const data = await UserService.setWithdrawalAddress(values);
      if (data.success) dispatch(setWithdrawAddressSuccess(values));
    } catch (error) {
      dispatch(setWithdrawAddressFail());
    }
  };
};

export const addMetawonzToUser = (purchasedMetawonz) => {
  return async (dispatch) => {
    dispatch(addMetawonz());
    await SecureService.getCSRFToken();
    try {
      const data = await UserService.addPurchasedMetawonz(purchasedMetawonz);
      if (data.success) dispatch(addMetawonzSuccess(data));
    } catch (error) {
      dispatch(setWithdrawAddressFail());
    }
  };
};
