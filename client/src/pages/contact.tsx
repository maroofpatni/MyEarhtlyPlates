import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { InsertInquiry } from "@shared/schema";

export default function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState<InsertInquiry>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    country: "",
    interest: "",
    message: "",
  });

  const submitInquiry = useMutation({
    mutationFn: async (data: InsertInquiry) => {
      const response = await apiRequest("POST", "/api/inquiries", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Submitted Successfully!",
        description: "Thank you for your inquiry. We will contact you within 24 hours.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        country: "",
        interest: "",
        message: "",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/inquiries"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit inquiry. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitInquiry.mutate(formData);
  };

  const handleInputChange = (field: keyof InsertInquiry, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="py-20" data-testid="contact-page">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4" data-testid="text-page-title">
            Start Your Export Partnership
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to import premium eco-friendly tableware? Contact us for quotes, samples, or partnership opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-6">Request a Quote</h3>
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                      data-testid="input-first-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Smith"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                      data-testid="input-last-name"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <Label htmlFor="company">Company Name *</Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Your Company Ltd."
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    required
                    data-testid="input-company"
                  />
                </div>
                <div>
                  <Label htmlFor="country">Country *</Label>
                  <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
                    <SelectTrigger data-testid="select-country">
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="united-kingdom">United Kingdom</SelectItem>
                      <SelectItem value="germany">Germany</SelectItem>
                      <SelectItem value="france">France</SelectItem>
                      <SelectItem value="netherlands">Netherlands</SelectItem>
                      <SelectItem value="united-states">United States</SelectItem>
                      <SelectItem value="canada">Canada</SelectItem>
                      <SelectItem value="australia">Australia</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="interest">I want to import *</Label>
                  <Select value={formData.interest} onValueChange={(value) => handleInputChange("interest", value)}>
                    <SelectTrigger data-testid="select-interest">
                      <SelectValue placeholder="Select product interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="areca">Areca Palm Leaf Tableware</SelectItem>
                      <SelectItem value="bagasse">Bagasse Tableware</SelectItem>
                      <SelectItem value="both">Both Product Lines</SelectItem>
                      <SelectItem value="custom">Custom Requirements</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your requirements, estimated quantities, and timeline..."
                    value={formData.message || ""}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    data-testid="textarea-message"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={submitInquiry.isPending}
                  data-testid="button-submit-inquiry"
                >
                  {submitInquiry.isPending ? (
                    <>
                      <i className="fas fa-spinner animate-spin mr-2"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-2"></i>
                      Send Inquiry
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4" data-testid="contact-email">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <i className="fas fa-envelope text-primary"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p className="text-muted-foreground">earthlyplatesinternational@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4" data-testid="contact-whatsapp">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <i className="fab fa-whatsapp text-green-600"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">WhatsApp</h4>
                      <p className="text-muted-foreground">+91 93593 65622</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4" data-testid="contact-website">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <i className="fas fa-globe text-accent"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Website</h4>
                      <p className="text-muted-foreground">www.earthlyplatesinternational.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 bg-primary text-primary-foreground">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-4">
                  <i className="fas fa-clock mr-2"></i>Business Hours
                </h3>
                <div className="space-y-2 text-primary-foreground/90">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM (IST)</p>
                  <p>Saturday: 9:00 AM - 2:00 PM (IST)</p>
                  <p>Sunday: Closed</p>
                </div>
                <div className="mt-6 pt-6 border-t border-primary-foreground/20">
                  <p className="text-sm text-primary-foreground/80">
                    <i className="fas fa-info-circle mr-2"></i>
                    For urgent inquiries, use our WhatsApp for faster response times.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <Card className="p-8 mt-16">
          <CardContent className="p-0">
            <h3 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div data-testid="faq-moq">
                  <h4 className="font-semibold text-foreground mb-2">What are your minimum order quantities?</h4>
                  <p className="text-muted-foreground text-sm">MOQs are flexible based on product type and destination. Contact us for specific requirements.</p>
                </div>
                <div data-testid="faq-private-label">
                  <h4 className="font-semibold text-foreground mb-2">Do you offer private labeling?</h4>
                  <p className="text-muted-foreground text-sm">Yes, we provide custom branding and packaging solutions to meet your brand requirements.</p>
                </div>
                <div data-testid="faq-biodegradation">
                  <h4 className="font-semibold text-foreground mb-2">How long do products take to biodegrade?</h4>
                  <p className="text-muted-foreground text-sm">Our tableware is 100% biodegradable within 90 days in commercial composting facilities.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div data-testid="faq-countries">
                  <h4 className="font-semibold text-foreground mb-2">What countries do you export to?</h4>
                  <p className="text-muted-foreground text-sm">We serve 50+ countries worldwide, with strong presence in UK, EU, North America, and Asia-Pacific.</p>
                </div>
                <div data-testid="faq-microwave">
                  <h4 className="font-semibold text-foreground mb-2">Are your products microwave safe?</h4>
                  <p className="text-muted-foreground text-sm">Bagasse products are microwave safe. Areca products are heat-resistant but not recommended for microwave use.</p>
                </div>
                <div data-testid="faq-samples">
                  <h4 className="font-semibold text-foreground mb-2">Do you provide samples?</h4>
                  <p className="text-muted-foreground text-sm">Yes, we offer free samples for qualified international buyers to evaluate quality before placing orders.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
