import Link from "next/link"

export default function SiteFooter() {
  return (
    <footer className="bg-background border-t border-border py-12 lg:py-16">
      <div className="gutter-mobile md:gutter-desktop">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-serif text-xl lg:text-2xl text-foreground mb-4">Wooden Art Gallery</h4>
            <p className="font-sans text-sm lg:text-base text-muted-foreground leading-relaxed max-w-md">
              Handcrafted furniture and wooden art celebrating Sri Lankan craftsmanship with contemporary design
              sensibilities.
            </p>
          </div>

          <div>
            <h5 className="font-sans text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Quick Links
            </h5>
            <ul className="space-y-3 font-sans text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-accent transition-polene">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-accent transition-polene">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-accent transition-polene">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-sans text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Contact Info
            </h5>
            <div className="font-sans text-sm text-muted-foreground space-y-3">
              <p>
                <a href="mailto:shopwoodenart@gmail.com" className="hover:text-accent transition-polene">
                  shopwoodenart@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+94112345678" className="hover:text-accent transition-polene">
                  +94 11 234 5678
                </a>
              </p>
              <p>Colombo, Sri Lanka</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 lg:mt-12 pt-8 text-center">
          <p className="font-sans text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Wooden Art Gallery. All rights reserved.
          </p>
          <p className="font-sans text-xs text-muted-foreground mt-2">
            Built by{" "}
            <a
              href="https://www.infrasurge.com/"
              className="hover:text-accent transition-polene"
              target="_blank"
              rel="noreferrer"
            >
              Infrasurge
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
