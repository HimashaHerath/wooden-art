import ProductGrid from "@/components/ProductGrid";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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

export default async function ProductsPage() {
  const products = await getProducts();
  const categories = Array.from(new Set(products.map(product => product.category)));

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">


      {/* Page Header */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-amber-900 mb-6">
            Our Products
          </h2>
          <p className="text-xl text-amber-700 mb-8 max-w-2xl mx-auto">
            Browse our complete collection of handcrafted wooden art pieces. 
            Each item is unique and made with the finest attention to detail.
          </p>
          
          <p className="text-amber-600">Choose a category to filter the catalog.</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          {products.length > 0 ? (
            <ProductGrid products={products} categories={categories} />
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🌳</div>
              <h3 className="text-2xl font-semibold text-amber-900 mb-2">No products yet</h3>
              <p className="text-amber-600 text-lg mb-6">
                Our artisans are hard at work creating beautiful pieces. Check back soon!
              </p>
              <Button asChild className="bg-amber-600 hover:bg-amber-700">
                <Link href="/">Return Home</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-amber-900 mb-4">
            Don&apos;t See What You&apos;re Looking For?
          </h3>
          <p className="text-xl text-amber-700 mb-8 max-w-2xl mx-auto">
            We specialize in custom wooden art pieces. Contact us to discuss your vision,
            and we&apos;ll work together to create something truly unique.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
              <Link href="/contact">Request Custom Piece</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-amber-300 text-amber-700">
              <Link href="/about">Learn About Our Process</Link>
            </Button>
          </div>
        </div>
      </section>


    </div>
  );
}