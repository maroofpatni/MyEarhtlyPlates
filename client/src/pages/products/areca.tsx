import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProductGallery from "@/components/product-gallery";

export default function ArecaProducts() {
  const arecaProducts = [
    {
      icon: "fas fa-circle",
      name: "Round Plates",
      sizes: '6", 7", 8", 10", 12"',
    },
    {
      icon: "fas fa-square",
      name: "Square Plates",
      sizes: '4", 6", 8", 10", 12"',
    },
    {
      icon: "fas fa-rectangle-landscape",
      name: "Rectangle Plates & Trays",
      sizes: '6", 8", 10", 12", 13"×10", 15"×10"',
    },
    {
      icon: "fas fa-star",
      name: "Designer & Specialty Plates",
      sizes: '6", 8", 10", 12"',
    },
    {
      icon: "fas fa-circle-dot",
      name: "Round Bowls",
      sizes: '3.5", 4", 5", 6"',
    },
    { icon: "fas fa-square", name: "Square Bowls", sizes: '4", 5", 6"' },
  ];

  return (
    <div className="py-20" data-testid="areca-products-page">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1
            className="text-4xl font-bold text-foreground mb-4"
            data-testid="text-page-title"
          >
            <i className="fas fa-leaf text-primary mr-3"></i>
            Areca Palm Leaf Tableware
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Premium eco-friendly tableware crafted from naturally fallen areca
            palm leaves. Heat-pressed without chemicals for food-safe,
            biodegradable dining solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://i.ibb.co/gbPxRm9k/Generated-Image-September-14-2025-2-00-PM.png"
              alt="Areca palm leaf plates and tableware products"
              className="rounded-lg shadow-lg w-full"
              data-testid="img-areca-main"
              width="800"
              height="600"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Natural Excellence
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">
              Our areca palm leaf tableware is made from naturally fallen
              leaves, ensuring no trees are cut in the manufacturing process.
              Each piece undergoes careful heat-pressing to create durable,
              leak-resistant products that maintain their integrity with hot and
              cold foods.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <i className="fas fa-check-circle text-primary"></i>
                <span className="text-foreground">
                  100% Natural & Chemical-Free
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-check-circle text-primary"></i>
                <span className="text-foreground">
                  Leak-Resistant & Heat-Resistant
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-check-circle text-primary"></i>
                <span className="text-foreground">
                  Biodegradable within 90 Days
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-check-circle text-primary"></i>
                <span className="text-foreground">
                  FSC Certified & Export Ready
                </span>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="/api/catalogues/areca-catalogue.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  data-testid="button-download-catalogue"
                >
                  <i className="fas fa-download mr-2"></i>Download Catalogue
                </Button>
              </a>
              <a href="mailto:earthlyplatesinternational@gmail.com?subject=Areca Products Inquiry">
                <Button variant="outline" data-testid="button-contact-inquiry">
                  <i className="fas fa-envelope mr-2"></i>Contact for Inquiry
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Product Gallery */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Product Range</h3>
          <ProductGallery products={arecaProducts} />
        </div>

        {/* Manufacturing Process */}
        <Card className="p-8 mb-16">
          <CardContent className="p-0">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Clean Manufacturing Process
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center" data-testid="manufacturing-step-1">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-primary">1</span>
                </div>
                <h4 className="font-semibold mb-2">Collection</h4>
                <p className="text-sm text-muted-foreground">
                  Natural collection of fallen leaves
                </p>
              </div>
              <div className="text-center" data-testid="manufacturing-step-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-primary">2</span>
                </div>
                <h4 className="font-semibold mb-2">Cleaning</h4>
                <p className="text-sm text-muted-foreground">
                  Washing and sanitization
                </p>
              </div>
              <div className="text-center" data-testid="manufacturing-step-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-primary">3</span>
                </div>
                <h4 className="font-semibold mb-2">Pressing</h4>
                <p className="text-sm text-muted-foreground">
                  Heat-pressing into shapes
                </p>
              </div>
              <div className="text-center" data-testid="manufacturing-step-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-primary">4</span>
                </div>
                <h4 className="font-semibold mb-2">Quality Check</h4>
                <p className="text-sm text-muted-foreground">
                  UV treatment and inspection
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Usage & Applications */}
        <Card className="p-8 mb-16">
          <CardContent className="p-0">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Usage & Applications
            </h3>
            <p className="text-muted-foreground text-center mb-8">
              Our areca tableware is trusted by restaurants, hotels, caterers,
              event planners, and retail packaging companies around the world.
              Designed to handle both hot and cold food, it offers a reliable
              and eco-friendly option for diverse settings—whether it's outdoor
              festivals, weddings, corporate events, or daily service.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div
                className="text-center"
                data-testid="application-restaurants"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-utensils text-primary text-xl"></i>
                </div>
                <h4 className="font-semibold mb-2">Restaurants & Hotels</h4>
                <p className="text-sm text-muted-foreground">
                  Premium dining and service
                </p>
              </div>
              <div className="text-center" data-testid="application-events">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-glass-cheers text-primary text-xl"></i>
                </div>
                <h4 className="font-semibold mb-2">Events & Catering</h4>
                <p className="text-sm text-muted-foreground">
                  Weddings, festivals, corporate events
                </p>
              </div>
              <div className="text-center" data-testid="application-retail">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-shopping-cart text-primary text-xl"></i>
                </div>
                <h4 className="font-semibold mb-2">Retail Packaging</h4>
                <p className="text-sm text-muted-foreground">
                  Custom branding solutions
                </p>
              </div>
              <div className="text-center" data-testid="application-outdoor">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-leaf text-primary text-xl"></i>
                </div>
                <h4 className="font-semibold mb-2">Outdoor & Festivals</h4>
                <p className="text-sm text-muted-foreground">
                  Natural, durable solutions
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sustainability & Certifications */}
        <Card className="p-8 mb-16">
          <CardContent className="p-0">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Sustainability & Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-muted-foreground mb-6">
                  Our tableware is made from naturally fallen areca palm leaves,
                  ensuring no trees are ever cut in the process. Each product is
                  100% biodegradable, industrially compostable, and has been
                  lab-tested for safety and performance.
                </p>
                <h4 className="font-semibold text-lg mb-4">
                  Environmental Benefits
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Zero tree cutting - uses naturally fallen leaves</li>
                  <li>• 100% biodegradable and compostable</li>
                  <li>• Free from plastics, chemicals, and harmful coatings</li>
                  <li>• Completely food-safe and eco-conscious</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4">
                  International Standards
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• FSC Certified (paper divisions)</li>
                  <li>• USDA Biobased (for qualifying lines)</li>
                  <li>• ISO 9001 Quality Management</li>
                  <li>• FSSC 22000 Food Safety</li>
                  <li>• Lab-tested for safety and performance</li>
                </ul>
                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary font-medium">
                    <i className="fas fa-certificate mr-2"></i>
                    All certifications available upon request for import
                    compliance
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Export, Packaging & Logistics */}
        <Card className="p-8 mb-16">
          <CardContent className="p-0">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Export, Packaging & Logistics
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-4 flex items-center">
                  <i className="fas fa-box text-primary mr-2"></i>
                  Export Packaging
                </h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Durable export-grade cartons</li>
                  <li>• ISPM-15 compliant pallets</li>
                  <li>• Fumigation-ready packaging</li>
                  <li>• Secure pallet configuration</li>
                  <li>• Long-distance shipping protection</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4 flex items-center">
                  <i className="fas fa-file-alt text-secondary mr-2"></i>
                  Documentation
                </h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Certificate of Origin (CoO)</li>
                  <li>• Phytosanitary Certificate</li>
                  <li>• Quality Test Reports</li>
                  <li>• FDA/BRC Certifications (as required)</li>
                  <li>• Regulatory compliance documents</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4 flex items-center">
                  <i className="fas fa-ship text-accent mr-2"></i>
                  Shipping Options
                </h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• FOB (Free on Board)</li>
                  <li>• CIF (Cost, Insurance & Freight)</li>
                  <li>• DDP (Delivered Duty Paid)</li>
                  <li>• Trusted freight forwarder network</li>
                  <li>• End-to-end logistics management</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
              <div className="text-center">
                <h4 className="font-semibold text-lg mb-2">
                  Complete Export Support
                </h4>
                <p className="text-muted-foreground mb-4">
                  From packing and paperwork to port handling and delivery, we
                  manage the entire export process so that buyers can focus on
                  their business with confidence.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <span className="bg-white/80 px-3 py-1 rounded-full text-sm font-medium">
                    🌍 Global Logistics
                  </span>
                  <span className="bg-white/80 px-3 py-1 rounded-full text-sm font-medium">
                    📋 Complete Documentation
                  </span>
                  <span className="bg-white/80 px-3 py-1 rounded-full text-sm font-medium">
                    🚢 Multiple Shipping Terms
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Specifications */}
        <Card className="p-8">
          <CardContent className="p-0">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Technical Specifications
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-4">
                  Physical Properties
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Material: 100% Natural Areca Palm Leaves</li>
                  <li>• Processing: Heat-pressed without chemicals</li>
                  <li>• Surface: Natural leaf texture</li>
                  <li>• Strength: Leak-resistant and heat-resistant</li>
                  <li>• Food Safety: UV treated and sanitized</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4">
                  Environmental Impact
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Biodegradation: 60-90 days</li>
                  <li>• Compostable: Industrial & Home</li>
                  <li>• Source: Naturally fallen leaves only</li>
                  <li>• Chemical Treatment: None</li>
                  <li>• Tree Impact: Zero cutting required</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
