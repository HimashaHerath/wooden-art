import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav 
      aria-label="Breadcrumb" 
      className={cn("container mx-auto px-4 py-4", className)}
    >
      <ol className="flex items-center space-x-2 text-sm text-amber-600">
        {/* Home link */}
        <li>
          <Link 
            href="/" 
            className="flex items-center hover:text-amber-800 transition-colors"
            aria-label="Go to homepage"
          >
            <Home className="w-4 h-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        
        {/* Breadcrumb items */}
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={index} className="flex items-center">
              <ChevronRight className="w-4 h-4 mx-2 text-amber-400" />
              
              {item.href && !isLast ? (
                <Link 
                  href={item.href}
                  className="hover:text-amber-800 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span 
                  className={cn(
                    isLast 
                      ? "text-amber-800 font-medium" 
                      : "text-amber-600"
                  )}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}