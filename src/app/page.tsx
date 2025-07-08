import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface Product {
  _sys: { filename: string };
  name: string;
  description: string;
  price: number;
  category: string;
  featured_image: string;
  gallery?: { image: string; alt: string }[];
  dimensions?: string;
  material: string;
  available: boolean;
  featured: boolean;
  status: string;
}

async function getProducts(): Promise<Product[]> {
  const productsDirectory = path.join(process.cwd(), "content/products");
  
  try {
    const filenames = fs.readdirSync(productsDirectory);
    const products: Product[] = filenames.map((filename) => {
      const filePath = path.join(productsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        ...(data as Omit<Product, "_sys">),
        _sys: {
          filename: filename.replace(/\.md$/, ""),
        },
      } as Product;
    });
    
    return products;
  } catch (error) {
    console.error("Error reading products:", error);
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();
  const featuredProducts = products.filter((product) => product.featured);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <SiteHeader />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-amber-900 mb-6">
            Handcrafted Wooden Art
          </h2>
          <p className="text-xl text-amber-700 mb-8 max-w-2xl mx-auto">
            Discover unique, handcrafted wooden pieces that bring warmth and natural beauty to your home. 
            Each item is carefully crafted with attention to detail and quality.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
              <Link href="/products">Shop Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-amber-300 text-amber-700">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-amber-900 mb-4">Featured Products</h3>
              <p className="text-amber-700 text-lg">
                Discover our most popular handcrafted wooden pieces
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product._sys.filename} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Products */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-amber-900 mb-4">All Products</h3>
            <p className="text-amber-700 text-lg">
              Browse our complete collection of wooden art pieces
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product._sys.filename} product={product} />
            ))}
          </div>
          {products.length === 0 && (
            <div className="text-center py-12">
              <p className="text-amber-600 text-lg">
                No products available at the moment. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
