import HeroSection from "@/components/hero-section";
import CertificationBadges from "@/components/certification-badges";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div>
      <HeroSection />
      
      {/* Trust Indicators */}
      <section className="py-16 bg-muted" data-testid="trust-indicators">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2" data-testid="metric-countries">50+</div>
              <p className="text-muted-foreground">Countries Served</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2" data-testid="metric-biodegradable">100%</div>
              <p className="text-muted-foreground">Biodegradable</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2" data-testid="metric-iso">ISO</div>
              <p className="text-muted-foreground">Certified Quality</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2" data-testid="metric-support">24/7</div>
              <p className="text-muted-foreground">Export Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Preview */}
      <section className="py-20" data-testid="product-categories">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sustainable Tableware Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Premium eco-friendly disposable tableware made from natural materials. Export-ready with complete compliance documentation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Areca Preview */}
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="mb-6">
                  <img 
                    src="https://i.ibb.co/N21V563p/IMG-20250915-202845.png" 
                    alt="Areca palm leaf plates and tableware products" 
                    className="rounded-lg shadow-lg w-full h-48 object-cover"
                    data-testid="img-areca-preview"
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  <i className="fas fa-leaf text-primary mr-2"></i>Areca Palm Leaf Tableware
                </h3>
                <p className="text-muted-foreground mb-6">
                  Premium plates, bowls, and trays crafted from naturally fallen areca palm leaves. Heat-pressed without chemicals, providing sturdy, leak-resistant, and 100% compostable solutions.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">100% Natural</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Leak Resistant</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Compostable</span>
                </div>
                <div className="flex gap-4">
                  <Link href="/products/areca">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90" data-testid="button-view-areca">
                      View Products
                    </Button>
                  </Link>
                  <a href="/api/catalogues/areca-catalogue.pdf" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" data-testid="button-download-areca-catalogue">
                      <i className="fas fa-download mr-2"></i>Download Catalogue
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Bagasse Preview */}
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="mb-6">
                  <img 
                    src="https://i.ibb.co/21VjvQYG/Generated-Image-September-15-2025-9-30-PM.png"
                    alt="Bagasse sugarcane fiber tableware and containers" 
                    className="rounded-lg shadow-lg w-full h-48 object-cover"
                    data-testid="img-bagasse-preview"
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  <i className="fas fa-seedling text-secondary mr-2"></i>Bagasse Tableware
                </h3>
                <p className="text-muted-foreground mb-6">
                  Innovative tableware made from sugarcane bagasse fiber. Strong, microwave-safe containers perfect for takeaway, food delivery, and catering applications with excellent insulation properties.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm">Microwave Safe</span>
                  <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm">Oil Resistant</span>
                  <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm">Freezer Safe</span>
                </div>
                <div className="flex gap-4">
                  <Link href="/products/bagasse">
                    <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90" data-testid="button-view-bagasse">
                      View Products
                    </Button>
                  </Link>
                  <a href="/api/catalogues/bagasse-catalogue.pdf" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" data-testid="button-download-bagasse-catalogue">
                      <i className="fas fa-download mr-2"></i>Download Catalogue
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-20 bg-muted" data-testid="manufacturing-process">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              From India to the World
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our clean, sustainable manufacturing process ensures premium quality and export readiness at every step.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center" data-testid="process-step-1">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-leaf text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">1. Natural Collection</h3>
              <p className="text-muted-foreground">
                Collection of naturally fallen areca palm leaves and sugarcane bagasse fiber. No trees cut, completely sustainable sourcing.
              </p>
            </div>

            <div className="text-center" data-testid="process-step-2">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-industry text-secondary text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">2. Clean Processing</h3>
              <p className="text-muted-foreground">
                Washing, sanitization, and heat-pressing in certified facilities. UV treatment and quality checks ensure food safety standards.
              </p>
            </div>

            <div className="text-center" data-testid="process-step-3">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shipping-fast text-accent text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">3. Export Ready</h3>
              <p className="text-muted-foreground">
                ISPM-15 compliant packaging, complete documentation, and global logistics support for seamless international delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20" data-testid="certifications-section">
        <div className="container mx-auto px-4">
          <CertificationBadges />
        </div>
      </section>
    </div>
  );
}
