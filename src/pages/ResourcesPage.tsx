import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Download, ExternalLink, Users, Calendar, Thermometer } from "lucide-react";

interface Resource {
  id: string;
  title: string;
  description: string;
  type: "Guide" | "Checklist" | "Video" | "Article" | "Tool";
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  estimatedTime: string;
}

const resources: Resource[] = [
  {
    id: "animal-health-basics",
    title: "Animal Health Basics for Farmers",
    description: "Comprehensive guide covering daily health monitoring, nutrition requirements, and preventive care for livestock.",
    type: "Guide",
    category: "Health Management",
    difficulty: "Beginner",
    estimatedTime: "30 min"
  },
  {
    id: "vaccination-schedule",
    title: "Livestock Vaccination Schedule",
    description: "Essential vaccination timelines for cattle, sheep, goats, and pigs to prevent common diseases.",
    type: "Checklist",
    category: "Prevention",
    difficulty: "Intermediate",
    estimatedTime: "15 min"
  },
  {
    id: "body-condition-scoring",
    title: "Body Condition Scoring Guide",
    description: "Learn how to assess and score body condition in livestock to optimize nutrition and health.",
    type: "Tool",
    category: "Assessment",
    difficulty: "Intermediate",
    estimatedTime: "20 min"
  },
  {
    id: "first-aid-techniques",
    title: "Basic First Aid for Farm Animals",
    description: "Essential first aid techniques every farmer should know for treating minor injuries and emergencies.",
    type: "Video",
    category: "Emergency Care",
    difficulty: "Beginner",
    estimatedTime: "45 min"
  },
  {
    id: "biosecurity-measures",
    title: "Farm Biosecurity Best Practices",
    description: "Implement effective biosecurity measures to prevent disease introduction and spread on your farm.",
    type: "Guide",
    category: "Prevention",
    difficulty: "Advanced",
    estimatedTime: "40 min"
  },
  {
    id: "nutrition-calculator",
    title: "Livestock Nutrition Calculator",
    description: "Calculate nutritional requirements for different livestock species based on age, weight, and production stage.",
    type: "Tool",
    category: "Nutrition",
    difficulty: "Intermediate",
    estimatedTime: "10 min"
  },
  {
    id: "breeding-management",
    title: "Reproductive Management Guide",
    description: "Comprehensive guide to breeding management, pregnancy monitoring, and birthing assistance.",
    type: "Article",
    category: "Reproduction",
    difficulty: "Advanced",
    estimatedTime: "35 min"
  },
  {
    id: "record-keeping",
    title: "Animal Health Record Keeping",
    description: "Templates and best practices for maintaining comprehensive health records for regulatory compliance.",
    type: "Checklist",
    category: "Management",
    difficulty: "Beginner",
    estimatedTime: "25 min"
  }
];

const categories = ["All", "Health Management", "Prevention", "Assessment", "Emergency Care", "Nutrition", "Reproduction", "Management"];

export default function ResourcesPage() {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Guide": return <BookOpen className="h-4 w-4" />;
      case "Checklist": return <Calendar className="h-4 w-4" />;
      case "Video": return <ExternalLink className="h-4 w-4" />;
      case "Article": return <BookOpen className="h-4 w-4" />;
      case "Tool": return <Thermometer className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800 border-green-200";
      case "Intermediate": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Advanced": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-vet-primary mb-4">Learning Resources</h1>
        <p className="text-muted-foreground text-lg">
          Educational materials and tools to improve your animal husbandry knowledge and skills
        </p>
      </div>

      {/* Featured Section */}
      <Card className="mb-8 bg-gradient-to-r from-vet-primary/5 to-vet-secondary/5 border-vet-primary/20">
        <CardHeader>
          <CardTitle className="text-vet-primary flex items-center gap-2">
            <Users className="h-5 w-5" />
            Featured Training Program
          </CardTitle>
          <CardDescription>
            Complete Animal Health Management Course for Modern Farmers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <p className="text-muted-foreground mb-2">
                A comprehensive 12-module course covering everything from basic animal care to advanced disease prevention strategies.
              </p>
              <div className="flex gap-2">
                <Badge variant="secondary">Self-paced</Badge>
                <Badge variant="secondary">Certificate included</Badge>
                <Badge variant="secondary">Expert-led</Badge>
              </div>
            </div>
            <Button variant="vet" className="flex items-center gap-2">
              <ExternalLink className="h-4 w-4" />
              Start Course
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              size="sm"
              className="border-vet-primary/30 hover:bg-vet-primary hover:text-white"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Resources Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <Card key={resource.id} className="border-vet-primary/20 hover:shadow-lg transition-all hover:border-vet-primary/40">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  {getTypeIcon(resource.type)}
                  <Badge variant="outline" className="text-xs">
                    {resource.type}
                  </Badge>
                </div>
                <Badge className={`${getDifficultyColor(resource.difficulty)} text-xs`}>
                  {resource.difficulty}
                </Badge>
              </div>
              <CardTitle className="text-lg text-vet-primary">{resource.title}</CardTitle>
              <CardDescription>{resource.description}</CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span className="bg-vet-accent/50 px-2 py-1 rounded text-vet-secondary">
                  {resource.category}
                </span>
                <span>📖 {resource.estimatedTime}</span>
              </div>
              
              <div className="flex gap-2">
                <Button size="sm" variant="vet" className="flex-1">
                  <BookOpen className="h-4 w-4 mr-1" />
                  Access
                </Button>
                <Button size="sm" variant="outline" className="border-vet-primary/30">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Resources Section */}
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <Card className="border-vet-primary/20">
          <CardHeader>
            <CardTitle className="text-vet-primary">Quick Reference Guides</CardTitle>
            <CardDescription>
              Downloadable PDF guides for common procedures and assessments
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Normal Vital Signs Chart</span>
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Emergency Contact Template</span>
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Medication Administration Log</span>
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-vet-primary/20">
          <CardHeader>
            <CardTitle className="text-vet-primary">Community Resources</CardTitle>
            <CardDescription>
              Connect with other farmers and veterinary professionals
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start border-vet-primary/30">
                <Users className="h-4 w-4 mr-2" />
                Join Farmer Forum
              </Button>
              <Button variant="outline" className="w-full justify-start border-vet-primary/30">
                <ExternalLink className="h-4 w-4 mr-2" />
                Expert Q&A Sessions
              </Button>
              <Button variant="outline" className="w-full justify-start border-vet-primary/30">
                <Calendar className="h-4 w-4 mr-2" />
                Local Training Events
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}