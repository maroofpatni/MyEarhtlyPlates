import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProductGallery from "@/components/product-gallery";

export default function BagasseProducts() {
  const bagasseProducts = [
    { icon: "fas fa-circle", name: "Round Plates", sizes: "6\", 7\", 8\", 9\", 10\"" },
    { icon: "fas fa-square", name: "Square Plates", sizes: "6\", 7\", 8\", 9\", 10\"" },
    { icon: "fas fa-utensils", name: "Bowls", sizes: "12oz, 16oz, 20oz, 24oz" },
    { icon: "fas fa-box", name: "Containers", sizes: "1-5 Compartments" },
    { icon: "fas fa-archive", name: "Clamshells", sizes: "6\"×6\", 9\"×6\", 9\"×9\"" },
    { icon: "fas fa-grip-horizontal", name: "Trays", sizes: "Various Compartments" },
  ];

  return (
    <div className="py-20" data-testid="bagasse-products-page">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4" data-testid="text-page-title">
            <i className="fas fa-seedling text-secondary mr-3"></i>
            Bagasse Tableware
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative tableware made from sugarcane bagasse fiber. Strong, microwave-safe containers perfect for food service and catering applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Sustainable Innovation</h2>
            <p className="text-muted-foreground mb-6 text-lg">
              Bagasse tableware is crafted from the fibrous residue left after sugarcane juice extraction. This waste material is transformed into durable, food-safe containers that offer excellent thermal insulation and grease resistance.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <i className="fas fa-check-circle text-secondary"></i>
                <span className="text-foreground">Microwave & Freezer Safe</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-check-circle text-secondary"></i>
                <span className="text-foreground">Oil & Grease Resistant</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-check-circle text-secondary"></i>
                <span className="text-foreground">Superior Thermal Insulation</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-check-circle text-secondary"></i>
                <span className="text-foreground">USDA Biobased Certified</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="/api/catalogues/bagasse-catalogue.pdf" target="_blank" rel="noopener noreferrer">
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90" data-testid="button-download-catalogue">
                  <i className="fas fa-download mr-2"></i>Download Catalogue
                </Button>
              </a>
              <a href="mailto:earthlyplatesinternational@gmail.com?subject=Bagasse Products Inquiry">
                <Button variant="outline" data-testid="button-contact-inquiry">
                  <i className="fas fa-envelope mr-2"></i>Contact for Inquiry
                </Button>
              </a>
            </div>
          </div>
          <div>
            <img 
              src="https://i.ibb.co/1Ggj4xpw/Generated-Image-September-14-2025-2-04-PM.png" 
              alt="Bagasse sugarcane fiber tableware and containers" 
              className="rounded-lg shadow-lg w-full h-auto"
              data-testid="img-bagasse-main"
            />
          </div>
        </div>

        {/* Product Gallery */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Product Range</h3>
          <ProductGallery products={bagasseProducts} />
        </div>

        {/* Sample Products from Catalogue */}
        <Card className="p-8 mb-16">
          <CardContent className="p-0">
            <h3 className="text-2xl font-bold mb-8 text-center">Featured Products</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-border rounded-lg p-4" data-testid="product-6-inch-plate">
                <h4 className="font-semibold mb-2">6" Round Plate</h4>
                <p className="text-sm text-muted-foreground mb-2">Weight: 6.5 gms/pc</p>
                <p className="text-sm text-muted-foreground mb-2">Pack: 2000/cs (40 Pack x 50 Qty.)</p>
                <p className="text-sm text-muted-foreground">Box: L 18.75" x W 12.50" x H 12.50"</p>
              </div>
              <div className="border border-border rounded-lg p-4" data-testid="product-7-inch-plate">
                <h4 className="font-semibold mb-2">7" Round Plate</h4>
                <p className="text-sm text-muted-foreground mb-2">Weight: 7.5 gms/pc</p>
                <p className="text-sm text-muted-foreground mb-2">Pack: 1800/cs (72 Pack x 25 Qty.)</p>
                <p className="text-sm text-muted-foreground">Box: L 21.25" x W 14.17" x H 13.00"</p>
              </div>
              <div className="border border-border rounded-lg p-4" data-testid="product-clamshell">
                <h4 className="font-semibold mb-2">6"×6" Clamshell</h4>
                <p className="text-sm text-muted-foreground mb-2">Weight: 22.0 gms/pc</p>
                <p className="text-sm text-muted-foreground mb-2">Pack: 500/cs (20 Pack x 25 Qty.)</p>
                <p className="text-sm text-muted-foreground">Box: L 13.00" x W 12.40" x H 18.50"</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Applications */}
        <Card className="p-8 mb-16">
          <CardContent className="p-0">
            <h3 className="text-2xl font-bold mb-8 text-center">Applications & Uses</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center" data-testid="application-restaurants">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-utensils text-secondary text-xl"></i>
                </div>
                <h4 className="font-semibold mb-2">Restaurants</h4>
                <p className="text-sm text-muted-foreground">Takeaway containers and dining</p>
              </div>
              <div className="text-center" data-testid="application-catering">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-truck text-secondary text-xl"></i>
                </div>
                <h4 className="font-semibold mb-2">Catering</h4>
                <p className="text-sm text-muted-foreground">Event and bulk food service</p>
              </div>
              <div className="text-center" data-testid="application-delivery">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-motorcycle text-secondary text-xl"></i>
                </div>
                <h4 className="font-semibold mb-2">Food Delivery</h4>
                <p className="text-sm text-muted-foreground">Online food delivery services</p>
              </div>
              <div className="text-center" data-testid="application-retail">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-store text-secondary text-xl"></i>
                </div>
                <h4 className="font-semibold mb-2">Retail</h4>
                <p className="text-sm text-muted-foreground">Grocery and convenience stores</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sustainability & Certifications */}
        <Card className="p-8 mb-16">
          <CardContent className="p-0">
            <h3 className="text-2xl font-bold mb-8 text-center">Sustainability & Certifications</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-muted-foreground mb-6">
                  Bagasse tableware transforms agricultural waste into high-performance food packaging. Made from sugarcane fiber that would otherwise be discarded, our products offer superior strength, heat resistance, and environmental benefits.
                </p>
                <h4 className="font-semibold text-lg mb-4">Environmental Benefits</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Made from 100% agricultural waste (sugarcane bagasse)</li>
                  <li>• Reduces landfill waste by repurposing fiber residue</li>
                  <li>• Completely plastic-free and chemical-free</li>
                  <li>• Carbon-neutral production process</li>
                  <li>• Industrial and home compostable</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4">International Standards</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• USDA Biobased Certified</li>
                  <li>• ISO 9001 Quality Management</li>
                  <li>• FSSC 22000 Food Safety</li>
                  <li>• BPI Compostable Certified (select lines)</li>
                  <li>• FDA approved for food contact</li>
                </ul>
                <div className="mt-6 p-4 bg-secondary/10 rounded-lg">
                  <p className="text-sm text-secondary font-medium">
                    <i className="fas fa-certificate mr-2"></i>
                    Complete documentation available for regulatory compliance
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Export, Packaging & Logistics */}
        <Card className="p-8 mb-16">
          <CardContent className="p-0">
            <h3 className="text-2xl font-bold mb-8 text-center">Export, Packaging & Logistics</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-4 flex items-center">
                  <i className="fas fa-box text-secondary mr-2"></i>
                  Export Packaging
                </h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Moisture-resistant export cartons</li>
                  <li>• ISPM-15 certified wooden pallets</li>
                  <li>• Protective wrap and corner guards</li>
                  <li>• Container-optimized pallet sizing</li>
                  <li>• Long-transit protection standards</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4 flex items-center">
                  <i className="fas fa-file-alt text-primary mr-2"></i>
                  Documentation
                </h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Certificate of Origin (CoO)</li>
                  <li>• Phytosanitary Certificate</li>
                  <li>• FDA/BRC Compliance Certificates</li>
                  <li>• Quality Assurance Test Reports</li>
                  <li>• Commercial invoice and packing list</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4 flex items-center">
                  <i className="fas fa-ship text-accent mr-2"></i>
                  Shipping Terms
                </h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• FOB (Free on Board) - Port of origin</li>
                  <li>• CIF (Cost, Insurance & Freight)</li>
                  <li>• DDP (Delivered Duty Paid)</li>
                  <li>• Sea freight and air cargo options</li>
                  <li>• Express courier for samples</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-6 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-lg">
              <div className="text-center">
                <h4 className="font-semibold text-lg mb-2">Seamless International Trade</h4>
                <p className="text-muted-foreground mb-4">
                  Our experienced export team handles all documentation, logistics coordination, and regulatory compliance, ensuring smooth delivery to your destination port worldwide.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <span className="bg-white/80 px-3 py-1 rounded-full text-sm font-medium">🌍 Worldwide Shipping</span>
                  <span className="bg-white/80 px-3 py-1 rounded-full text-sm font-medium">📋 Complete Compliance</span>
                  <span className="bg-white/80 px-3 py-1 rounded-full text-sm font-medium">🚢 Flexible Terms</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Specifications */}
        <Card className="p-8">
          <CardContent className="p-0">
            <h3 className="text-2xl font-bold mb-8 text-center">Technical Specifications</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-4">Performance Features</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Material: 100% Sugarcane Bagasse Fiber</li>
                  <li>• Temperature Range: -20°C to +120°C</li>
                  <li>• Oil & Grease Resistance: Excellent</li>
                  <li>• Microwave Safe: Yes (up to 3 minutes)</li>
                  <li>• Freezer Safe: Yes (-20°C compatible)</li>
                  <li>• Leak Resistance: Superior performance</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4">Environmental Impact</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Biodegradation: 90-120 days</li>
                  <li>• Industrial Compostable: ASTM D6400</li>
                  <li>• Home Compostable: ASTM D6868</li>
                  <li>• Raw Material: Agricultural waste only</li>
                  <li>• Carbon Footprint: Neutral to negative</li>
                  <li>• Renewable Resource: 100% sustainable</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
