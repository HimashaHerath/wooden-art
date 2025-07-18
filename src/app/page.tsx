import ProductCard from "@/components/ProductCard";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Sparkles, Award, Leaf } from "lucide-react";
import { getFeaturedProducts } from "@/lib/sanity.queries";

export default async function Home() {
  const featuredProducts = await getFeaturedProducts();
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/50">
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
                <ProductCard key={product._id} product={product} />
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


      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-6">
              Why Choose Wooden Art Gallery?
            </h2>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">
              Sri Lankan craftsmanship meets modern design in every piece we create.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100">
              <div className="bg-amber-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-4">Sri Lankan Heritage</h3>
              <p className="text-amber-700">
                Traditional Sri Lankan woodworking techniques passed down through generations, combined with contemporary design.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100">
              <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-4">Premium Materials</h3>
              <p className="text-amber-700">
                We use the finest local and imported hardwoods, each selected for its unique grain patterns and durability.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100">
              <div className="bg-amber-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-4">Custom Creations</h3>
              <p className="text-amber-700">
                From furniture to decorative art, we create bespoke pieces tailored to your vision and space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Transform Your Space with Sri Lankan Craftsmanship
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Discover our collection of handcrafted furniture and wooden art, or commission a custom piece 
            designed specifically for your home or office.
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
