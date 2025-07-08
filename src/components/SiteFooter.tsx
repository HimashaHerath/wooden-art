import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-amber-800 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-2xl font-bold mb-4">🌳 Wooden Art</h4>
            <p className="text-amber-100">
              Handcrafted wooden pieces made with passion and precision. Each item tells a story of natural beauty and skilled craftsmanship.
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
  );
}
