import ProductsPageClient from "@/components/ProductsPageClient";
import { getProducts } from "@/lib/sanity.queries";

// Server component for data fetching
export default async function Home() {
  const products = await getProducts();
  const categories = Array.from(new Set(products.map(product => product.category)));

  return <ProductsPageClient products={products} categories={categories} />;
}
