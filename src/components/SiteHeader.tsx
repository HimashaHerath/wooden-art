"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position for header background effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 h-16 transition-polene",
        isScrolled ? "header-scrolled" : "bg-transparent"
      )}
    >
      <div className="flex items-center justify-center h-full gutter-desktop">
        {/* Centered Wordmark */}
        <Link 
          href="/" 
          className="font-serif text-2xl text-foreground transition-polene hover:text-accent"
        >
          Wooden Art
        </Link>
      </div>
    </header>
  );
}
