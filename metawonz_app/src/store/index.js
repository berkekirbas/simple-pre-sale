import { combineReducers, configureStore } from "@reduxjs/toolkit";

import MoralisSlice from "./slices/MoralisSlice";
import UserSlice from "./slices/UserSlice";
import DataSlice from "./slices/DataSlice";

const rootReducer = combineReducers({
  moralisSlice: MoralisSlice,
  userSlice: UserSlice,
  dataSlice: DataSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
