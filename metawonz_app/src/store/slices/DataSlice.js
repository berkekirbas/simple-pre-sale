import { createSlice } from "@reduxjs/toolkit";
import AdminService from "../../services/Admin.service";

export const initialState = {
  loading: false,
  hasErrors: false,
  users: [],
};

export const dataSelector = (state) => state.dataSlice;

const dataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {
    getUsers: (state) => {
      state.loading = true;
    },
    getUsersSuccess: (state, { payload }) => {
      state.users = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getUsersFail: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const { getUsers, getUsersSuccess, getUsersFail } = dataSlice.actions;

// The reducer
export default dataSlice.reducer;

export const getAllUsers = () => {
  return async (dispatch) => {
    dispatch(getUsers());
    try {
      const data = await AdminService.getAllUsers();
      dispatch(getUsersSuccess(data));
    } catch (error) {
      dispatch(getUsersFail());
    }
  };
};
