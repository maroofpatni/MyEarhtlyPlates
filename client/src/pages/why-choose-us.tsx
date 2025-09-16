import { Card, CardContent } from "@/components/ui/card";
import CertificationBadges from "@/components/certification-badges";

export default function WhyChooseUs() {
  return (
    <div className="py-20" data-testid="why-choose-us-page">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4" data-testid="text-page-title">
            Why Global Buyers Choose Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Certified manufacturing network with complete export compliance, flexible terms, and end-to-end trade support for international buyers.
          </p>
        </div>

        {/* Value Propositions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="p-6 hover:shadow-md transition-shadow">
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-certificate text-primary text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold">Global Certifications</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                FSC, ISO 9001, FSSC 22000, USDA Biobased, BSCI, CTPAT certified manufacturing partners ensuring quality and compliance.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">FSC</span>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">ISO 9001</span>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">USDA</span>
              </div>
            </CardContent>
          </Card>

          <Card className="p-6 hover:shadow-md transition-shadow">
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-shipping-fast text-secondary text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold">Export Excellence</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                ISPM-15 compliant packaging, phytosanitary certificates, complete CoO documentation, and flexible shipping terms (FOB, CIF, DDP).
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-secondary/10 text-secondary px-2 py-1 rounded text-xs">ISPM-15</span>
                <span className="bg-secondary/10 text-secondary px-2 py-1 rounded text-xs">CoO</span>
                <span className="bg-secondary/10 text-secondary px-2 py-1 rounded text-xs">FOB/CIF</span>
              </div>
            </CardContent>
          </Card>

          <Card className="p-6 hover:shadow-md transition-shadow">
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-handshake text-accent text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold">Flexible Partnership</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Custom branding, adaptable MOQs, private labeling solutions, and third-party testing reports to meet your specific market needs.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-accent/10 text-accent px-2 py-1 rounded text-xs">Custom Brand</span>
                <span className="bg-accent/10 text-accent px-2 py-1 rounded text-xs">Flexible MOQ</span>
                <span className="bg-accent/10 text-accent px-2 py-1 rounded text-xs">OEM</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications Section */}
        <div className="mb-16">
          <CertificationBadges />
        </div>

        {/* Export Services */}
        <Card className="p-8 mb-16">
          <CardContent className="p-0">
            <h3 className="text-2xl font-bold mb-8 text-center">Export Services & Documentation</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-4 flex items-center">
                  <i className="fas fa-file-alt text-primary mr-2"></i>
                  Documentation Support
                </h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    Certificate of Origin (CoO)
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    Phytosanitary Certificates
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    Quality Test Reports
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    FDA/BRC Certifications (where required)
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    Customs Declaration Support
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4 flex items-center">
                  <i className="fas fa-ship text-secondary mr-2"></i>
                  Shipping & Logistics
                </h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <i className="fas fa-check text-secondary mt-1 mr-2"></i>
                    FOB, CIF, DDP Terms Available
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-secondary mt-1 mr-2"></i>
                    ISPM-15 Compliant Packaging
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-secondary mt-1 mr-2"></i>
                    Container Loading Supervision
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-secondary mt-1 mr-2"></i>
                    Global Freight Forwarding Network
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-secondary mt-1 mr-2"></i>
                    Real-time Shipment Tracking
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Manufacturing Network */}
        <Card className="p-8 mb-16">
          <CardContent className="p-0">
            <h3 className="text-2xl font-bold mb-8 text-center">Certified Manufacturing Network</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center" data-testid="facility-feature-1">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-industry text-primary text-xl"></i>
                </div>
                <h4 className="font-semibold mb-2">Verified Facilities</h4>
                <p className="text-sm text-muted-foreground">ISO 9001 & FSSC 22000 certified manufacturing partners</p>
              </div>
              <div className="text-center" data-testid="facility-feature-2">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-microscope text-secondary text-xl"></i>
                </div>
                <h4 className="font-semibold mb-2">Quality Control</h4>
                <p className="text-sm text-muted-foreground">Third-party testing and continuous quality monitoring</p>
              </div>
              <div className="text-center" data-testid="facility-feature-3">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-leaf text-accent text-xl"></i>
                </div>
                <h4 className="font-semibold mb-2">Sustainability</h4>
                <p className="text-sm text-muted-foreground">Zero-waste production and renewable energy usage</p>
              </div>
              <div className="text-center" data-testid="facility-feature-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-users text-primary text-xl"></i>
                </div>
                <h4 className="font-semibold mb-2">Ethical Standards</h4>
                <p className="text-sm text-muted-foreground">BSCI certified for social compliance and worker welfare</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Global Reach */}
        <Card className="p-8">
          <CardContent className="p-0">
            <h3 className="text-2xl font-bold mb-8 text-center">Global Market Presence</h3>
            <div className="text-center mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2" data-testid="stat-countries">50+</div>
                  <p className="text-muted-foreground">Countries Served</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2" data-testid="stat-clients">500+</div>
                  <p className="text-muted-foreground">Active Clients</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2" data-testid="stat-shipments">1000+</div>
                  <p className="text-muted-foreground">Monthly Shipments</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2" data-testid="stat-satisfaction">99%</div>
                  <p className="text-muted-foreground">Client Satisfaction</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 items-center">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">🇬🇧 United Kingdom</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">🇩🇪 Germany</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">🇫🇷 France</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">🇳🇱 Netherlands</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">🇺🇸 United States</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">🇨🇦 Canada</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">🇦🇺 Australia</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">🇯🇵 Japan</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
