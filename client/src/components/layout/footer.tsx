import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16" data-testid="footer">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <i className="fas fa-leaf text-primary-foreground text-lg"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold">Earthly Plates</h3>
                <p className="text-sm text-background/70">International</p>
              </div>
            </div>
            <p className="text-background/80 text-sm mb-4">
              Your trusted partner for premium eco-friendly tableware exports from India to the world.
            </p>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center text-background/70 hover:text-background hover:bg-background/20 transition-colors"
                data-testid="link-linkedin"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center text-background/70 hover:text-background hover:bg-background/20 transition-colors"
                data-testid="link-facebook"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center text-background/70 hover:text-background hover:bg-background/20 transition-colors"
                data-testid="link-instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-background/80 text-sm">
              <li>
                <Link href="/products/areca" className="hover:text-background transition-colors" data-testid="footer-link-areca">
                  Areca Tableware
                </Link>
              </li>
              <li>
                <Link href="/products/bagasse" className="hover:text-background transition-colors" data-testid="footer-link-bagasse">
                  Bagasse Tableware
                </Link>
              </li>
              <li>
                <a href="/api/catalogues/areca-catalogue.pdf" className="hover:text-background transition-colors" data-testid="link-download-catalogues">
                  Download Catalogues
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-background transition-colors" data-testid="footer-link-samples">
                  Request Samples
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-background/80 text-sm">
              <li>
                <Link href="/about" className="hover:text-background transition-colors" data-testid="footer-link-about">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/why-choose-us" className="hover:text-background transition-colors" data-testid="footer-link-why-choose">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors" data-testid="footer-link-certifications">
                  Certifications
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors" data-testid="footer-link-sustainability">
                  Sustainability
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-background/80 text-sm">
              <li>
                <Link href="/contact" className="hover:text-background transition-colors" data-testid="footer-link-contact">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors" data-testid="footer-link-faq">
                  Export FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors" data-testid="footer-link-shipping">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors" data-testid="footer-link-documentation">
                  Documentation
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/70 text-sm mb-4 md:mb-0" data-testid="text-copyright">
              © 2024 Earthly Plates International. All rights reserved.
            </p>
            <div className="flex space-x-6 text-background/70 text-sm">
              <a href="#" className="hover:text-background transition-colors" data-testid="link-privacy">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-background transition-colors" data-testid="link-gdpr">
                GDPR Compliance
              </a>
              <a href="#" className="hover:text-background transition-colors" data-testid="link-cookies">
                Cookie Notice
              </a>
              <a href="#" className="hover:text-background transition-colors" data-testid="link-terms">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
