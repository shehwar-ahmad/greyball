"use client";

import React from "react";
import { useEffect } from "react";
import { useAppDispatch } from "@/lib/hooks";
import {
  setAllProducts,
  updateFilteredProducts,
} from "@/lib/slices/productsSlice";
import { useAppSelector } from "@/lib/hooks";
import ProductCard from "./ProductCard";
import { Product } from "@/types/product";
import { setOptions } from "@/lib/slices/productsSlice";

interface ProductsCatalogProps {
  products: Product[];
}

const ProductsCatalog: React.FC<ProductsCatalogProps> = ({ products }) => {
  const dispatch = useAppDispatch();
  const filteredProducts = useAppSelector(
    (state) => state.products.filteredProducts
  );
  const options = useAppSelector((state) => state.products.options);

  useEffect(() => {
    dispatch(setAllProducts(products));
    dispatch(updateFilteredProducts(products));
  }, [dispatch, products]);

  const start = (options.currentPage - 1) * 10;
  const end = start + 10;

  return (
    <div className="w-full flex flex-col gap-5">
      <div className="flex flex-row gap-2 justify-between flex-wrap">
        <input
          type="text"
          placeholder="Search products"
          className="w-full max-w-[300px] p-2 border border-gray-300 rounded-md focus:outline-none"
          value={options.search}
          onChange={(e) => {
            dispatch(
              setOptions({
                ...options,
                search: e.target.value,
                currentPage: 1,
              })
            );
            dispatch(updateFilteredProducts());
          }}
        />
        <div>
          {filteredProducts.length > 10 && (
            <select
              className="p-2 border border-gray-300 rounded-md"
              value={options.currentPage}
              onChange={(e) => {
                dispatch(
                  setOptions({
                    ...options,
                    currentPage: parseInt(e.target.value),
                  })
                );
                dispatch(updateFilteredProducts());
              }}
            >
              {Array.from({ length: options.totalPages }, (_, index) => (
                <option key={index + 1} value={index + 1}>
                  Page {index + 1}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        {filteredProducts?.slice(start, end)?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsCatalog;
