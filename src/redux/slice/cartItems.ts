import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { ICartItem } from "../../types";

export interface CartItems {
  cartItems: ICartItem[];
  totalPrice: number;
}

const initialState: CartItems = {
  cartItems: [],
  totalPrice: 0,
};

export const cartItems = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ICartItem>) => {
      state.cartItems.push(action.payload);
      state.totalPrice += action.payload.price;
    },
    incItemById: (state, action: PayloadAction<number>) => {
      const findItem = state.cartItems.find(
        (item) => item.id === action.payload
      );

      state.cartItems = state.cartItems.map((item) => {
        if (item.id !== action.payload) return item;

        return {
          ...item,
          count: item.count + 1,
        };
      });

      if (findItem) {
        state.totalPrice += findItem.price;
      }
    },
    decItemById: (state, action: PayloadAction<number>) => {
      const findItem = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (findItem) {
        if (findItem.count === 1) {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== findItem.id
          );
        } else {
          state.cartItems = state.cartItems.map((item) => {
            if (item.id !== findItem.id) return item;

            return {
              ...item,
              count: item.count && item.count - 1,
            };
          });
        }
        state.totalPrice -= findItem.price;
      }
    },
    setCountById: (
      state,
      action: PayloadAction<{ id: number; count: number }>
    ) => {
      const { id, count } = action.payload;

      const filterItems = state.cartItems.map((item) => {
        if (item.id !== id) return item;

        return {
          ...item,
          count: count,
        };
      });
      const totalPrice = filterItems.reduce(
        (totalPrice, cartItem) => totalPrice + cartItem.price * cartItem.count,
        0
      );

      state.totalPrice = totalPrice;
      state.cartItems = filterItems;
    },
    deleteItemById: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.totalPrice = state.cartItems.reduce(
        (totalPrice, cartItem) => totalPrice + cartItem.price * cartItem.count,
        0
      );

      // Убавлять totalPrice
    },
  },
});

export const {
  addItem,
  incItemById,
  decItemById,
  setCountById,
  deleteItemById,
} = cartItems.actions;

export default cartItems.reducer;
