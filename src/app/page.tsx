import ProductCard from "@/components/ProductCard";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ArrowRight, Sparkles, Award, Leaf } from "lucide-react";

interface Product {
  _sys: { filename: string };
  name: string;
  description: string;
  price: number;
  category: string;
  featured_image: string;
  gallery?: { image: string; alt: string }[];
  dimensions?: string;
  material?: string;
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
  const categories = Array.from(new Set(products.map(product => product.category)));
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="py-20 px-4 bg-white/50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-amber-100 text-amber-800 mb-4">
                <Sparkles className="w-4 h-4 mr-2" />
                Featured Collection
              </Badge>
              <h2 className="text-4xl font-bold text-amber-900 mb-6">
                Handpicked Masterpieces
              </h2>
              <p className="text-xl text-amber-700 max-w-2xl mx-auto">
                Discover our most beloved pieces, each carefully selected for their exceptional 
                craftsmanship and timeless beauty.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredProducts.map((product) => (
                <ProductCard key={product._sys.filename} product={product} />
              ))}
            </div>
            
            <div className="text-center">
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
                <Link href="/products">
                  View All Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Categories Section */}
      {categories.length > 0 && (
        <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-amber-900 mb-6">
                Shop by Category
              </h2>
              <p className="text-xl text-amber-700 max-w-2xl mx-auto">
                From functional pieces to decorative art, find exactly what you&apos;re looking for.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category) => {
                const categoryProducts = products.filter(p => p.category === category);
                const count = categoryProducts.length;
                
                return (
                  <Link 
                    key={category}
                    href={`/products?category=${encodeURIComponent(category)}`}
                    className="group"
                  >
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-amber-100">
                      <div className="text-3xl mb-3">
                        {category === 'Sculptures' && '🗿'}
                        {category === 'Furniture' && '🪑'}
                        {category === 'Decorative' && '🎨'}
                        {category === 'Functional' && '🥄'}
                        {category === 'Art Pieces' && '🖼️'}
                        {category === 'Custom' && '⚒️'}
                      </div>
                      <h3 className="font-semibold text-amber-900 group-hover:text-amber-700 transition-colors">
                        {category}
                      </h3>
                      <p className="text-sm text-amber-600 mt-1">
                        {count} item{count !== 1 ? 's' : ''}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-6">
              Why Choose Our Wooden Art?
            </h2>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">
              Every piece tells a story of dedication, skill, and love for the craft.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100">
              <div className="bg-amber-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-4">Master Craftsmanship</h3>
              <p className="text-amber-700">
                Over 10 years of experience creating exceptional wooden pieces with traditional techniques.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100">
              <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-4">Sustainable Materials</h3>
              <p className="text-amber-700">
                We source our wood from responsibly managed forests, ensuring environmental stewardship.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100">
              <div className="bg-amber-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-4">Unique Designs</h3>
              <p className="text-amber-700">
                Each piece is one-of-a-kind, showcasing the natural beauty and character of the wood.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Bring Natural Beauty to Your Home?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Explore our collection of handcrafted wooden art pieces or commission a custom piece 
            that&apos;s perfect for your space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-amber-600 hover:bg-amber-50">
              <Link href="/products">
                Browse Collection
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600">
              <Link href="/contact">
                Request Custom Piece
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
