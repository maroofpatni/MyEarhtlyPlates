import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      className="hero-gradient text-white py-20"
      data-testid="hero-section"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                <i className="fas fa-globe mr-2"></i>Trusted Globally
              </span>
              <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                <i className="fas fa-certificate mr-2"></i>EU Certified
              </span>
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              data-testid="text-hero-title"
            >
              Premium Eco-Friendly Tableware{" "}
              <span className="text-accent">From India to the World</span>
            </h1>
            <p
              className="text-xl mb-8 text-white/90 leading-relaxed"
              data-testid="text-hero-description"
            >
              Your trusted export partner for FSC-certified areca palm leaf and
              bagasse tableware. Serving UK, EU, and global markets with
              sustainable solutions and complete export compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products/areca">
                <Button
                  className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 font-semibold"
                  data-testid="button-view-products"
                >
                  <i className="fas fa-leaf mr-2"></i>View Products
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-2 text-primary hover:bg-primary hover:text-white px-8 py-3 font-semibold"
                  data-testid="button-request-quote"
                >
                  <i className="fas fa-envelope mr-2"></i>Request Quote
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://i.ibb.co/wZmttRkX/Generated-Image-September-14-2025-1-48-PM.png"
              alt="Eco-friendly disposable tableware products"
              className="rounded-xl shadow-2xl w-[800px] h-[600px]"
              data-testid="img-hero"
            />

            <div className="absolute -bottom-4 -left-4 bg-card text-card-foreground p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <i className="fas fa-shipping-fast text-primary text-xl"></i>
                <div>
                  <p className="font-semibold text-sm">Export Ready</p>
                  <p className="text-xs text-muted-foreground">FOB, CIF, DDP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
