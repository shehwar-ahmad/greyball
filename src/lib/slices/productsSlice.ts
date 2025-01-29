"use client";

import { createSlice } from "@reduxjs/toolkit";
import { Product } from "@/types/product";
import { PayloadAction } from "@reduxjs/toolkit";

interface Options {
  page: number;
  search: string;
}

interface InitialStateType {
  allProducts: Product[];
  filteredProducts: Product[];
  options: Options;
}

const initialState: InitialStateType = {
  allProducts: [],
  filteredProducts: [],
  options: {
    page: 1,
    search: "",
  },
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setAllProducts: (state, action: PayloadAction<Product[]>) => {
      state.allProducts = action.payload;
    },
    setFilteredProducts: (state, action: PayloadAction<Product[]>) => {
      state.filteredProducts = action.payload;
    },
    setOptions: (state, action: PayloadAction<Partial<Options>>) => {
      let options = { ...state.options, ...action.payload };
      state.options = options;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAllProducts, setOptions } = productsSlice.actions;

export default productsSlice.reducer;
