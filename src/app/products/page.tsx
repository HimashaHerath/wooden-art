import ProductCard from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

async function getProducts() {
  const productsDirectory = path.join(process.cwd(), "content/products");
  
  try {
    const filenames = fs.readdirSync(productsDirectory);
    const products = filenames.map((filename) => {
      const filePath = path.join(productsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      
      return {
        ...data,
        _sys: {
          filename: filename.replace(/\.md$/, ""),
        },
      };
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
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-amber-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-4">
              <h1 className="text-3xl font-bold text-amber-800">🌳 Wooden Art</h1>
              <Badge variant="outline" className="text-amber-700 border-amber-300">
                Handcrafted
              </Badge>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-amber-700 hover:text-amber-900 font-medium">
                Home
              </Link>
              <Link href="/products" className="text-amber-700 hover:text-amber-900 font-medium">
                Products
              </Link>
              <Link href="/about" className="text-amber-700 hover:text-amber-900 font-medium">
                About
              </Link>
              <Link href="/contact" className="text-amber-700 hover:text-amber-900 font-medium">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

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
          
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Badge variant="default" className="bg-amber-600 text-white px-4 py-2">
              All Products ({products.length})
            </Badge>
            {categories.map((category) => (
              <Badge key={category} variant="outline" className="border-amber-300 text-amber-700 px-4 py-2">
                {category} ({products.filter(p => p.category === category).length})
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product._sys.filename} product={product} />
              ))}
            </div>
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
            Don't See What You're Looking For?
          </h3>
          <p className="text-xl text-amber-700 mb-8 max-w-2xl mx-auto">
            We specialize in custom wooden art pieces. Contact us to discuss your vision, 
            and we'll work together to create something truly unique.
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

      {/* Footer */}
      <footer className="bg-amber-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-4">🌳 Wooden Art</h4>
              <p className="text-amber-100">
                Handcrafted wooden pieces made with passion and precision. 
                Each item tells a story of natural beauty and skilled craftsmanship.
              </p>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-amber-100">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li><Link href="/products" className="hover:text-white">Products</Link></li>
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Contact Info</h5>
              <div className="text-amber-100 space-y-2">
                <p>📧 info@woodenart.com</p>
                <p>📞 (555) 123-4567</p>
                <p>📍 123 Craftsman Lane, Woodville</p>
              </div>
            </div>
          </div>
          <div className="border-t border-amber-700 mt-8 pt-8 text-center text-amber-100">
            <p>&copy; 2024 Wooden Art. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}