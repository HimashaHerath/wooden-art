import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="gutter-mobile md:gutter-desktop">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-serif text-xl text-foreground mb-4">Wooden Art Gallery</h4>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              Handcrafted furniture and wooden art celebrating Sri Lankan craftsmanship with contemporary design sensibilities.
            </p>
          </div>
          <div>
            <h5 className="font-sans text-sm font-medium text-foreground mb-4">Quick Links</h5>
            <ul className="space-y-2 font-sans text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-accent transition-polene">Products</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-accent transition-polene">About</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-accent transition-polene">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-sans text-sm font-medium text-foreground mb-4">Contact Info</h5>
            <div className="font-sans text-sm text-muted-foreground space-y-2">
              <p>info@woodenartgallery.lk</p>
              <p>+94 11 234 5678</p>
              <p>Colombo, Sri Lanka</p>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="font-sans text-xs text-muted-foreground">&copy; 2024 Wooden Art Gallery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
