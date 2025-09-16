import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="py-20" data-testid="about-page">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4" data-testid="text-page-title">
            About Earthly Plates International
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted export partner, bridging the gap between certified Indian manufacturers and international buyers across the UK, EU, and global markets.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Story & Mission</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Earthly Plates International was founded with a vision to make sustainable tableware solutions accessible to global markets while supporting India's rich manufacturing heritage. We recognized the growing demand for eco-friendly alternatives and the need for reliable export partnerships.
            </p>
            <p className="text-muted-foreground mb-6">
              Specializing in premium eco-friendly disposable tableware, we ensure every product meets international sustainability standards while providing complete export compliance support. Our mission is to make sustainable choices accessible worldwide through reliable supply chains and flexible partnership terms.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <i className="fas fa-check-circle text-primary"></i>
                <span className="text-foreground">Direct Manufacturer Partnerships</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-check-circle text-primary"></i>
                <span className="text-foreground">End-to-End Export Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-check-circle text-primary"></i>
                <span className="text-foreground">Global Compliance Expertise</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-check-circle text-primary"></i>
                <span className="text-foreground">Sustainable Supply Chain</span>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://i.ibb.co/Xxhr6GsN/Generated-Image-September-15-2025-9-39-PM.png" 
              alt="Sustainable manufacturing facility and production line" 
              className="rounded-xl shadow-lg w-full h-auto"
              data-testid="img-manufacturing"
            />
          </div>
        </div>

        {/* Values & Approach */}
        <Card className="p-8 mb-16">
          <CardContent className="p-0">
            <h3 className="text-2xl font-bold mb-8 text-center">Our Values & Approach</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center" data-testid="value-sustainability">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-leaf text-primary text-xl"></i>
                </div>
                <h4 className="font-semibold text-lg mb-3">Sustainability First</h4>
                <p className="text-muted-foreground">
                  Every product we export is 100% biodegradable, compostable, and made from renewable resources without compromising on quality or functionality.
                </p>
              </div>
              <div className="text-center" data-testid="value-quality">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-award text-secondary text-xl"></i>
                </div>
                <h4 className="font-semibold text-lg mb-3">Quality Assurance</h4>
                <p className="text-muted-foreground">
                  Rigorous quality control processes, third-party testing, and continuous monitoring ensure our products meet the highest international standards.
                </p>
              </div>
              <div className="text-center" data-testid="value-partnership">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-handshake text-accent text-xl"></i>
                </div>
                <h4 className="font-semibold text-lg mb-3">Partnership Focus</h4>
                <p className="text-muted-foreground">
                  We build long-term relationships with both manufacturers and buyers, providing personalized support and flexible solutions for mutual growth.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Manufacturing Process */}
        <Card className="p-8 mb-16">
          <CardContent className="p-0">
            <h3 className="text-2xl font-bold mb-8 text-center">Clean & Sustainable Manufacturing</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-4 text-primary">Areca Palm Leaf Process</h4>
                <ol className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                    Collection of naturally fallen areca palm leaves
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                    Washing and sanitization (no chemicals)
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                    Heat-pressing into plates, bowls and trays
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
                    UV treatment and quality checks
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">5</span>
                    Packing into export cartons - fumigation-ready (ISPM-15)
                  </li>
                </ol>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4 text-secondary">Bagasse Processing</h4>
                <ol className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                    Collection of sugarcane bagasse fiber waste
                  </li>
                  <li className="flex items-start">
                    <span className="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                    Pulping and fiber preparation
                  </li>
                  <li className="flex items-start">
                    <span className="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                    Molding into containers and plates
                  </li>
                  <li className="flex items-start">
                    <span className="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
                    Drying and surface treatment
                  </li>
                  <li className="flex items-start">
                    <span className="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">5</span>
                    Quality control and export packaging
                  </li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sustainability Commitment */}
        <Card className="p-8 mb-16">
          <CardContent className="p-0">
            <h3 className="text-2xl font-bold mb-8 text-center">Sustainability & Certifications</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-4">Environmental Impact</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-tree text-primary mt-1"></i>
                    <div>
                      <p className="font-medium">Zero Tree Cutting</p>
                      <p className="text-sm text-muted-foreground">Made from naturally fallen leaves and agricultural waste</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-recycle text-primary mt-1"></i>
                    <div>
                      <p className="font-medium">100% Biodegradable</p>
                      <p className="text-sm text-muted-foreground">Completely breaks down in 60-120 days</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-leaf text-primary mt-1"></i>
                    <div>
                      <p className="font-medium">Carbon Negative</p>
                      <p className="text-sm text-muted-foreground">Production process removes more CO2 than it produces</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4">Quality Standards</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-certificate text-secondary mt-1"></i>
                    <div>
                      <p className="font-medium">FSC Certified</p>
                      <p className="text-sm text-muted-foreground">Forest Stewardship Council approved materials</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-shield-alt text-secondary mt-1"></i>
                    <div>
                      <p className="font-medium">Food Safe</p>
                      <p className="text-sm text-muted-foreground">FSSC 22000 and FDA compliant materials</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-microscope text-secondary mt-1"></i>
                    <div>
                      <p className="font-medium">Lab Tested</p>
                      <p className="text-sm text-muted-foreground">Third-party testing for safety and performance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team & Contact */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Ready to Partner with Us?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're looking to import sustainable tableware or need guidance on export compliance, our team is here to support your business growth with reliable, eco-friendly solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:earthlyplatesinternational@gmail.com" 
              className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors inline-flex items-center justify-center"
              data-testid="button-email-contact"
            >
              <i className="fas fa-envelope mr-2"></i>Email Us
            </a>
            <a 
              href="https://wa.me/919359365622" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-600 transition-colors inline-flex items-center justify-center"
              data-testid="button-whatsapp-contact"
            >
              <i className="fab fa-whatsapp mr-2"></i>WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
