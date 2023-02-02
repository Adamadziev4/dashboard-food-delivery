import { configureStore } from "@reduxjs/toolkit";
import cartItems from "./slice/cartItems";

export const store = configureStore({
  reducer: {
    cartItems: cartItems,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
