import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Star, Leaf, Award } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100/50" />
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="flex items-center space-x-3">
              <Badge className="bg-amber-600/10 text-amber-700 border-amber-200 px-4 py-2">
                <Star className="w-4 h-4 mr-2 fill-current" />
                Handcrafted with Love
              </Badge>
              <Badge variant="outline" className="border-green-200 text-green-700 bg-green-50/50 px-4 py-2">
                <Leaf className="w-4 h-4 mr-2" />
                Sustainable
              </Badge>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-amber-900 leading-tight">
                Beautiful
                <span className="block text-amber-700">Wooden Art</span>
                <span className="block text-amber-600 text-3xl lg:text-4xl xl:text-5xl font-medium">
                  for Your Home
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-amber-700/80 leading-relaxed max-w-xl">
                Discover unique, handcrafted wooden pieces that bring warmth and natural beauty to your space. 
                Each item tells a story of skilled craftsmanship and natural artistry.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 py-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-900">10+</div>
                <div className="text-sm text-amber-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-900">500+</div>
                <div className="text-sm text-amber-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-900">100%</div>
                <div className="text-sm text-amber-600">Handcrafted</div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg group"
              >
                <Link href="/products">
                  Shop Collection
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-amber-300 text-amber-700 hover:bg-amber-50 px-8 py-6 text-lg"
              >
                <Link href="/about">
                  Our Story
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm text-amber-700">5.0 from 200+ reviews</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-amber-600" />
                <span className="text-sm text-amber-700">Award-winning craftsmanship</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            {/* Main showcase */}
            <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-2xl shadow-amber-200/20">
              <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Placeholder for hero image */}
                <div className="text-8xl opacity-20">🌳</div>
                
                {/* Floating elements */}
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <Star className="w-6 h-6 text-amber-600 fill-current" />
                </div>
                
                <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="text-xs text-amber-600 font-medium">Featured Piece</div>
                  <div className="text-sm font-bold text-amber-900">Handcrafted Oak Bowl</div>
                  <div className="text-lg font-bold text-amber-600">$85</div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-amber-200/30 rounded-full blur-xl" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-orange-200/30 rounded-full blur-xl" />
            </div>

            {/* Floating cards */}
            <div className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg transform -rotate-6">
              <div className="flex items-center space-x-2">
                <Leaf className="w-5 h-5 text-green-600" />
                <div>
                  <div className="text-sm font-semibold text-gray-900">Eco-Friendly</div>
                  <div className="text-xs text-gray-600">Sustainable materials</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg transform rotate-6">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-amber-600" />
                <div>
                  <div className="text-sm font-semibold text-gray-900">Lifetime Quality</div>
                  <div className="text-xs text-gray-600">Built to last generations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}