import { createSlice } from "@reduxjs/toolkit";
import UserService from "../../services/User.service";

export const initialState = {
  loading: false,
  hasErrors: false,
  userAccount: [],
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
      state.userAccount.walletAddress = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    setWithdrawAddressFail: (state) => {
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
    try {
      const data = await UserService.setWithdrawalAddress(values);

      console.log(data);

      dispatch(setWithdrawAddressSuccess(data));
    } catch (error) {
      dispatch(setWithdrawAddressFail());
    }
  };
};
