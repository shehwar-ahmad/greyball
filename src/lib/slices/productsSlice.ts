"use client";

import { createSlice } from "@reduxjs/toolkit";
import { Product } from "@/types/product";
import { PayloadAction } from "@reduxjs/toolkit";

interface InitialStateType {
  allProducts: Product[];
}

const initialState: InitialStateType = {
  allProducts: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setAllProducts: (state, action: PayloadAction<Product[]>) => {
      state.allProducts = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAllProducts } = productsSlice.actions;

export default productsSlice.reducer;
