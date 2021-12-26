import { combineReducers, configureStore } from "@reduxjs/toolkit";

import MoralisSlice from "./slices/MoralisSlice";
import UserSlice from "./slices/UserSlice";

const rootReducer = combineReducers({
  moralisSlice: MoralisSlice,
  userSlice: UserSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
