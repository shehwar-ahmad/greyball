"use client";

import { createSlice } from "@reduxjs/toolkit";
import { Product } from "@/types/product";
import { PayloadAction } from "@reduxjs/toolkit";

interface Options {
  totalPages: number;
  currentPage: number;
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
    currentPage: 1,
    totalPages: 1,
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
    updateFilteredProducts: (
      state,
      action: PayloadAction<Product[] | undefined>
    ) => {
      let products = action?.payload || state.allProducts;

      let filteredProducts = [];

      filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(state.options.search.toLowerCase())
      );

      state.filteredProducts = filteredProducts;
      state.options.totalPages = Math.ceil(filteredProducts.length / 10);
    },
    setOptions: (state, action: PayloadAction<Partial<Options>>) => {
      let options = { ...state.options, ...action.payload };
      state.options = options;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAllProducts, setOptions, updateFilteredProducts } =
  productsSlice.actions;

export default productsSlice.reducer;
