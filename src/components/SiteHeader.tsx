"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-amber-200/60 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="text-3xl transition-transform group-hover:scale-105">🌳</div>
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-800 leading-tight">
                <span className="hidden sm:inline">Wooden Art Gallery</span>
                <span className="sm:hidden">Wooden Art</span>
              </h1>
              <Badge 
                variant="outline" 
                className="text-xs text-amber-600 border-amber-300 bg-amber-50/50 -mt-1 hidden md:inline-flex"
              >
                Sri Lankan Craftsmanship
              </Badge>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href || 
                (item.href !== "/" && pathname.startsWith(item.href));
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative font-medium transition-colors duration-200",
                    isActive
                      ? "text-amber-900"
                      : "text-amber-700 hover:text-amber-900"
                  )}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-600 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>


          {/* Mobile Menu */}
          <div className="md:hidden">
            <Dialog open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="text-amber-700">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="p-0 w-full max-w-full sm:max-w-sm top-0 translate-y-0 data-[state=open]:slide-in-from-top-0 data-[state=closed]:slide-out-to-top-0">
                <DialogTitle className="sr-only">Navigation Menu</DialogTitle>
                <div className="p-6">
                  {/* Mobile Logo */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="text-2xl">🌳</div>
                    <div>
                      <h2 className="text-xl font-bold text-amber-800">Wooden Art Gallery</h2>
                      <Badge variant="outline" className="text-xs text-amber-600 border-amber-300 bg-amber-50/50">
                        Sri Lankan Craftsmanship
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 my-6" />
                  
                  {/* Mobile Navigation */}
                  <nav className="space-y-4">
                    {navigation.map((item) => {
                      const isActive = pathname === item.href || 
                        (item.href !== "/" && pathname.startsWith(item.href));
                      
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={cn(
                            "block py-2 px-3 rounded-lg font-medium transition-colors",
                            isActive
                              ? "bg-amber-100 text-amber-900"
                              : "text-amber-700 hover:bg-amber-50 hover:text-amber-900"
                          )}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </nav>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </header>
  );
}
