"use client";

import React from "react";
import { useEffect } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { setAllProducts } from "@/lib/slices/productsSlice";
import { useAppSelector } from "@/lib/hooks";
import ProductCard from "./ProductCard";
import { Product } from "@/types/product";

interface ProductsCatalogProps {
  products: Product[];
}

const ProductsCatalog: React.FC<ProductsCatalogProps> = ({ products }) => {
  const dispatch = useAppDispatch();
  const allProducts = useAppSelector((state) => state.products.allProducts);

  useEffect(() => {
    dispatch(setAllProducts(products));
  }, [dispatch, products]);

  return (
    <div>
      {allProducts?.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default ProductsCatalog;
