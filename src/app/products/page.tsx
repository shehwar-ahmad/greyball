import { fetchProducts } from "@/services/product";
import ProductsCatalog from "@/components/products/ProductsCatalog";

export default async function Products() {
  const products = await fetchProducts();

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-semibold">Products</h1>
      <ProductsCatalog products={products} />
    </div>
  );
}
