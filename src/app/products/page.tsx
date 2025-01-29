import { fetchProducts } from "@/services/product";
import ProductsCatalog from "@/components/products/ProductsCatalog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products - Greyball",
  description: "Greyball is a combat sports accessories store.",
};

export default async function Products() {
  const products = await fetchProducts();

  return (
    <div className="flex flex-col gap-8 w-full">
      <h1 className="text-2xl font-semibold">Available Products</h1>
      <ProductsCatalog products={products} />
    </div>
  );
}
