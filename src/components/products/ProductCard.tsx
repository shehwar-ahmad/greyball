"use client";

import React from "react";
import { Product } from "@/types/product";
import { useAppDispatch } from "@/lib/hooks";
import { addToCart, removeFromCart } from "@/lib/slices/productsSlice";
import { useAppSelector } from "@/lib/hooks";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.products.cart);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
  };

  const isAddedToCart = cart.find((item) => item.id === product.id);

  let classes = "product-card border rounded-lg shadow-lg p-4";

  if (isAddedToCart) {
    classes = `${classes} bg-green-100`;
  }

  return (
    <div className={classes}>
      <Image
        className="w-full h-48 object-cover mb-4"
        src={product.image}
        alt={product.title}
        width={600}
        height={192}
      />
      <h2 className="text-xl font-bold mb-2">{product.title}</h2>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-lg font-semibold">
        {product.currency} {product.price}
      </p>
      <p className="text-sm text-gray-500">Rating: {product.rating}</p>
      <div className=" mt-2 flex gap-1 justify-end font-bold">
        <button
          className="bg-blue-500 text-white px-2 py-1 h-fit rounded-md text-xs hover:bg-blue-600"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
        <button
          className="bg-red-500 text-white px-2 py-1 h-fit  text-xs rounded-md hover:bg-red-600"
          onClick={handleRemoveFromCart}
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
