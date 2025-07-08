"use client";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Menu } from "lucide-react";

export default function SiteHeader() {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-amber-200 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-4">
            <h1 className="text-3xl font-bold text-amber-800">🌳 Wooden Art</h1>
            <Badge variant="outline" className="text-amber-700 border-amber-300">Handcrafted</Badge>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-amber-700 hover:text-amber-900 font-medium">Home</Link>
            <Link href="/products" className="text-amber-700 hover:text-amber-900 font-medium">Products</Link>
            <Link href="/about" className="text-amber-700 hover:text-amber-900 font-medium">About</Link>
            <Link href="/contact" className="text-amber-700 hover:text-amber-900 font-medium">Contact</Link>
          </nav>
          <div className="md:hidden">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="p-0 w-full max-w-xs" showCloseButton={false}>
                <nav className="grid gap-4 p-6 text-amber-700">
                  <Link href="/">Home</Link>
                  <Link href="/products">Products</Link>
                  <Link href="/about">About</Link>
                  <Link href="/contact">Contact</Link>
                </nav>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </header>
  );
}
