"use client";

import React from "react";
import { useEffect } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { setAllProducts } from "@/lib/slices/productsSlice";
import { useAppSelector } from "@/lib/hooks";
import ProductCard from "./ProductCard";
import { Product } from "@/types/product";
import { setOptions } from "@/lib/slices/productsSlice";

interface ProductsCatalogProps {
  products: Product[];
}

const ProductsCatalog: React.FC<ProductsCatalogProps> = ({ products }) => {
  const dispatch = useAppDispatch();
  const allProducts = useAppSelector((state) => state.products.allProducts);
  const options = useAppSelector((state) => state.products.options);

  useEffect(() => {
    dispatch(setAllProducts(products));
  }, [dispatch, products]);

  return (
    <div className="w-full flex flex-col gap-5">
      {options.search}
      <div>
        <input
          type="text"
          placeholder="Search products"
          className="w-full max-w-[300px] p-2 border border-gray-300 rounded-md focus:outline-none"
          value={options.search}
          onChange={(e) =>
            dispatch(
              setOptions({
                ...options,
                search: e.target.value,
              })
            )
          }
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        {allProducts?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsCatalog;
