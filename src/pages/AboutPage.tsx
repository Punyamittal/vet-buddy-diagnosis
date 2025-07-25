import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Users, Globe, Award, Stethoscope, Heart } from "lucide-react";

export default function AboutPage() {
  const features = [
    "AI-powered disease diagnosis",
    "Comprehensive disease database",
    "Emergency response guides",
    "Educational resources",
    "Mobile-friendly interface",
    "Professional veterinary backing"
  ];

  const teamMembers = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Lead Veterinarian",
      experience: "15+ years in large animal practice",
      specialization: "Bovine medicine and herd health"
    },
    {
      name: "Dr. James Thompson",
      role: "Emergency Medicine Specialist",
      experience: "12+ years in emergency care",
      specialization: "Critical care and emergency surgery"
    },
    {
      name: "Dr. Maria Rodriguez",
      role: "Animal Nutrition Expert",
      experience: "10+ years in livestock nutrition",
      specialization: "Feed optimization and metabolic disorders"
    }
  ];

  const stats = [
    { number: "50,000+", label: "Animals Diagnosed" },
    { number: "1,200+", label: "Farmers Helped" },
    { number: "95%", label: "Accuracy Rate" },
    { number: "24/7", label: "Availability" }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-vet-primary mb-4">About VetBuddy</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Empowering farmers and animal caretakers with AI-powered veterinary diagnosis 
          and comprehensive animal health resources to ensure the wellbeing of livestock worldwide.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="border-vet-primary/20">
          <CardHeader>
            <CardTitle className="text-vet-primary flex items-center gap-2">
              <Heart className="h-5 w-5" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              To bridge the gap between farmers and veterinary expertise by providing accessible, 
              accurate, and immediate animal health assessments. We believe every animal deserves 
              quality healthcare, regardless of geographic location or economic constraints.
            </p>
          </CardContent>
        </Card>

        <Card className="border-vet-primary/20">
          <CardHeader>
            <CardTitle className="text-vet-primary flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Our Vision
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              A world where technology and veterinary science work together to create healthier 
              livestock, more sustainable farming practices, and improved food security for 
              communities worldwide.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Statistics */}
      <Card className="mb-12 bg-gradient-to-r from-vet-primary/5 to-vet-secondary/5 border-vet-primary/20">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-vet-primary">Impact by Numbers</CardTitle>
          <CardDescription>Making a difference in animal healthcare globally</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-vet-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Features */}
      <Card className="mb-12 border-vet-primary/20">
        <CardHeader>
          <CardTitle className="text-vet-primary flex items-center gap-2">
            <Award className="h-5 w-5" />
            What Makes VetBuddy Special
          </CardTitle>
          <CardDescription>
            Cutting-edge features designed for modern animal husbandry
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-vet-primary flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Expert Team */}
      <div className="mb-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-vet-primary mb-4">Our Expert Team</h2>
          <p className="text-muted-foreground">
            Backed by experienced veterinarians and animal health specialists
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-vet-primary/20 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-vet-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="h-8 w-8 text-vet-primary" />
                </div>
                <CardTitle className="text-lg text-vet-primary">{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <Badge variant="secondary" className="text-xs">
                  {member.experience}
                </Badge>
                <p className="text-sm text-muted-foreground">
                  {member.specialization}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Technology & Approach */}
      <Card className="mb-12 border-vet-primary/20">
        <CardHeader>
          <CardTitle className="text-vet-primary">Our Technology & Approach</CardTitle>
          <CardDescription>
            Combining artificial intelligence with veterinary expertise
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold text-vet-secondary mb-2">AI-Powered Diagnosis</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our advanced machine learning algorithms analyze symptoms, animal characteristics, 
              and visual indicators to provide accurate preliminary diagnoses. The system is 
              trained on thousands of verified veterinary cases and continuously updated with 
              new data.
            </p>
          </div>

          <Separator />

          <div>
            <h4 className="font-semibold text-vet-secondary mb-2">Expert Validation</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every diagnosis recommendation is validated against established veterinary protocols 
              and reviewed by our expert panel. We maintain the highest standards of accuracy 
              while ensuring recommendations are practical for field application.
            </p>
          </div>

          <Separator />

          <div>
            <h4 className="font-semibold text-vet-secondary mb-2">Continuous Learning</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our platform learns from every interaction, improving diagnosis accuracy and 
              treatment recommendations. We collaborate with veterinary institutions worldwide 
              to stay current with the latest developments in animal health.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Contact & Support */}
      <Card className="border-vet-primary/20">
        <CardHeader>
          <CardTitle className="text-vet-primary flex items-center gap-2">
            <Users className="h-5 w-5" />
            Support & Community
          </CardTitle>
          <CardDescription>
            We're here to help you provide the best care for your animals
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-vet-secondary mb-2">24/7 Support</h4>
              <p className="text-sm text-muted-foreground">
                Our technical support team is available around the clock to assist with any 
                questions or issues you may encounter while using VetBuddy.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-vet-secondary mb-2">Community Forum</h4>
              <p className="text-sm text-muted-foreground">
                Connect with other farmers, share experiences, and learn from a community 
                of dedicated animal caretakers and veterinary professionals.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Disclaimer */}
      <div className="mt-12 p-6 bg-muted rounded-lg">
        <p className="text-sm text-muted-foreground text-center">
          <strong>Important:</strong> VetBuddy is designed to assist and support animal health decisions, 
          not replace professional veterinary care. Always consult with a qualified veterinarian for 
          definitive diagnosis and treatment, especially in emergency situations.
        </p>
      </div>
    </div>
  );
}