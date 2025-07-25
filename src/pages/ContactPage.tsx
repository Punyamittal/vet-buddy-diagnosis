import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, MessageCircle, HeadphonesIcon } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    urgency: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll respond within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      urgency: "",
      message: ""
    });
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const emergencyContacts = [
    {
      region: "North America",
      phone: "+1-800-VET-HELP",
      email: "emergency@vetbuddy.com",
      hours: "24/7"
    },
    {
      region: "Europe",
      phone: "+44-800-VET-HELP",
      email: "emergency-eu@vetbuddy.com",
      hours: "24/7"
    },
    {
      region: "Asia Pacific",
      phone: "+61-800-VET-HELP",
      email: "emergency-apac@vetbuddy.com",
      hours: "24/7"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-vet-primary mb-4">Contact Us</h1>
        <p className="text-muted-foreground text-lg">
          Get in touch with our team for support, questions, or emergency assistance
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card className="border-vet-primary/20">
            <CardHeader>
              <CardTitle className="text-vet-primary flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Send us a Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => updateFormData("name", e.target.value)}
                      className="border-vet-primary/30 focus:border-vet-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                      className="border-vet-primary/30 focus:border-vet-primary"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => updateFormData("phone", e.target.value)}
                      className="border-vet-primary/30 focus:border-vet-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="urgency">Urgency Level</Label>
                    <Select value={formData.urgency} onValueChange={(value) => updateFormData("urgency", value)}>
                      <SelectTrigger className="border-vet-primary/30 focus:border-vet-primary">
                        <SelectValue placeholder="Select urgency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low - General inquiry</SelectItem>
                        <SelectItem value="medium">Medium - Technical support</SelectItem>
                        <SelectItem value="high">High - Account issues</SelectItem>
                        <SelectItem value="emergency">Emergency - Animal health crisis</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => updateFormData("subject", e.target.value)}
                    className="border-vet-primary/30 focus:border-vet-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => updateFormData("message", e.target.value)}
                    className="border-vet-primary/30 focus:border-vet-primary min-h-[120px]"
                    required
                  />
                </div>

                <Button type="submit" variant="vet" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          {/* General Contact */}
          <Card className="border-vet-primary/20">
            <CardHeader>
              <CardTitle className="text-vet-primary flex items-center gap-2">
                <HeadphonesIcon className="h-5 w-5" />
                General Contact
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-vet-primary" />
                <div>
                  <p className="font-medium">+1-800-VETBUDDY</p>
                  <p className="text-sm text-muted-foreground">Mon-Fri, 8AM-6PM EST</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-vet-primary" />
                <div>
                  <p className="font-medium">support@vetbuddy.com</p>
                  <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-vet-primary" />
                <div>
                  <p className="font-medium">VetBuddy HQ</p>
                  <p className="text-sm text-muted-foreground">
                    123 Veterinary Drive<br />
                    Animal Health City, AH 12345
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Emergency Contacts */}
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-800 flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Emergency Contacts
              </CardTitle>
              <CardDescription className="text-red-700">
                For urgent animal health emergencies
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="border-b border-red-200 last:border-b-0 pb-3 last:pb-0">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-medium text-red-800">{contact.region}</span>
                    <Badge className="bg-red-100 text-red-800 text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      {contact.hours}
                    </Badge>
                  </div>
                  <div className="space-y-1 text-sm">
                    <p className="text-red-700">📞 {contact.phone}</p>
                    <p className="text-red-700">✉️ {contact.email}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Support Hours */}
          <Card className="border-vet-primary/20">
            <CardHeader>
              <CardTitle className="text-vet-primary flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Support Hours
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Technical Support</span>
                <span className="text-sm font-medium">24/7</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">General Inquiries</span>
                <span className="text-sm font-medium">Mon-Fri, 8AM-6PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Emergency Hotline</span>
                <span className="text-sm font-medium text-red-600">24/7</span>
              </div>
            </CardContent>
          </Card>

          {/* Quick Links */}
          <Card className="border-vet-primary/20">
            <CardHeader>
              <CardTitle className="text-vet-primary">Quick Help</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" size="sm" className="w-full justify-start border-vet-primary/30">
                📋 User Manual
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start border-vet-primary/30">
                ❓ FAQ
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start border-vet-primary/30">
                🎥 Video Tutorials
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start border-vet-primary/30">
                👥 Community Forum
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-12 p-6 bg-muted rounded-lg">
        <p className="text-sm text-muted-foreground text-center">
          <strong>Important:</strong> For immediate animal health emergencies, contact your local veterinarian 
          or emergency animal hospital directly. VetBuddy support is for platform-related assistance and 
          general guidance only.
        </p>
      </div>
    </div>
  );
}