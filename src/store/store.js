import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import boardReducer from "./slices/boardSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    board: boardReducer,
  },
});

export default store;
