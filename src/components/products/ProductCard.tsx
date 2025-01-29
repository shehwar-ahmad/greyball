import React from 'react';
import { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card border rounded-lg shadow-lg p-4">
      <img className="w-full h-48 object-cover mb-4" src={product.image} alt={product.title} />
      <h2 className="text-xl font-bold mb-2">{product.title}</h2>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-lg font-semibold">{product.currency} {product.price}</p>
      <p className="text-sm text-gray-500">Rating: {product.rating}</p>
    </div>
  );
};

export default ProductCard;
