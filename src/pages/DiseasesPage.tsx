import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search, AlertTriangle, Clock, MapPin } from "lucide-react";

interface Disease {
  id: string;
  name: string;
  animals: string[];
  symptoms: string[];
  severity: "Low" | "Medium" | "High" | "Critical";
  description: string;
  treatment: string;
  prevention: string;
}

const diseases: Disease[] = [
  {
    id: "fmd",
    name: "Foot-and-Mouth Disease",
    animals: ["Cow", "Pig", "Sheep", "Goat"],
    symptoms: ["Excessive salivation", "Mouth blisters", "Difficulty walking", "Fever", "Loss of appetite"],
    severity: "Critical",
    description: "Highly contagious viral disease affecting cloven-hoofed animals. Causes severe economic losses and is notifiable in most countries.",
    treatment: "Isolate affected animals, provide supportive care, contact veterinary authorities immediately.",
    prevention: "Vaccination, quarantine new animals, biosecurity measures, movement restrictions."
  },
  {
    id: "mastitis",
    name: "Mastitis",
    animals: ["Cow", "Goat", "Sheep"],
    symptoms: ["Swollen udder", "Hot udder", "Reduced milk production", "Abnormal milk", "Fever"],
    severity: "High",
    description: "Inflammation of mammary glands, commonly caused by bacterial infection. Major cause of economic losses in dairy farming.",
    treatment: "Antibiotic therapy, anti-inflammatory drugs, frequent milking, proper hygiene.",
    prevention: "Good milking hygiene, teat dipping, dry cow therapy, proper nutrition."
  },
  {
    id: "pneumonia",
    name: "Pneumonia",
    animals: ["Cow", "Pig", "Sheep", "Goat", "Horse"],
    symptoms: ["Coughing", "Difficulty breathing", "Nasal discharge", "Fever", "Loss of appetite"],
    severity: "High",
    description: "Respiratory infection affecting lungs. Can be caused by bacteria, viruses, or parasites.",
    treatment: "Antibiotics, anti-inflammatory drugs, supportive care, proper ventilation.",
    prevention: "Vaccination, good ventilation, reduce stress, proper nutrition, quarantine sick animals."
  },
  {
    id: "bloat",
    name: "Bloat",
    animals: ["Cow", "Sheep", "Goat"],
    symptoms: ["Distended abdomen", "Difficulty breathing", "Restlessness", "Drooling", "Collapse"],
    severity: "Critical",
    description: "Accumulation of gas in rumen causing rapid distension. Can be fatal if not treated quickly.",
    treatment: "Emergency decompression, anti-foaming agents, veterinary intervention required.",
    prevention: "Gradual diet changes, avoid lush pastures, provide roughage, limit legume intake."
  },
  {
    id: "lameness",
    name: "Lameness",
    animals: ["Cow", "Horse", "Sheep", "Goat"],
    symptoms: ["Limping", "Reluctance to move", "Swelling", "Heat in hoof", "Abnormal posture"],
    severity: "Medium",
    description: "Impaired locomotion caused by various factors including hoof problems, injuries, or infections.",
    treatment: "Hoof trimming, antibiotics if infected, anti-inflammatory drugs, rest.",
    prevention: "Regular hoof trimming, dry bedding, proper nutrition, avoid overcrowding."
  },
  {
    id: "diarrhea",
    name: "Diarrhea",
    animals: ["Cow", "Pig", "Sheep", "Goat", "Horse"],
    symptoms: ["Loose stools", "Dehydration", "Loss of appetite", "Weakness", "Abdominal pain"],
    severity: "Medium",
    description: "Abnormal frequency and fluidity of bowel movements. Can be caused by infections, diet, or stress.",
    treatment: "Fluid therapy, electrolyte replacement, dietary management, identify underlying cause.",
    prevention: "Good hygiene, proper nutrition, clean water, stress reduction, gradual diet changes."
  }
];

export default function DiseasesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAnimal, setSelectedAnimal] = useState<string>("All");

  const animals = ["All", "Cow", "Pig", "Horse", "Sheep", "Goat"];

  const filteredDiseases = diseases.filter(disease => {
    const matchesSearch = disease.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         disease.symptoms.some(symptom => symptom.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesAnimal = selectedAnimal === "All" || disease.animals.includes(selectedAnimal);
    return matchesSearch && matchesAnimal;
  });

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical": return "bg-red-100 text-red-800 border-red-200";
      case "High": return "bg-orange-100 text-orange-800 border-orange-200";
      case "Medium": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Low": return "bg-green-100 text-green-800 border-green-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-vet-primary mb-4">Disease Database</h1>
        <p className="text-muted-foreground text-lg">
          Comprehensive database of common animal diseases, symptoms, and treatments
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search diseases or symptoms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 border-vet-primary/30 focus:border-vet-primary"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {animals.map((animal) => (
            <button
              key={animal}
              onClick={() => setSelectedAnimal(animal)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedAnimal === animal
                  ? "bg-vet-primary text-white"
                  : "bg-vet-accent text-vet-primary hover:bg-vet-primary/10"
              }`}
            >
              {animal}
            </button>
          ))}
        </div>
      </div>

      {/* Disease Cards */}
      <div className="grid gap-6">
        {filteredDiseases.map((disease) => (
          <Card key={disease.id} className="border-vet-primary/20 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl text-vet-primary">{disease.name}</CardTitle>
                  <CardDescription className="mt-2">{disease.description}</CardDescription>
                </div>
                <Badge className={`${getSeverityColor(disease.severity)} font-medium`}>
                  {disease.severity === "Critical" && <AlertTriangle className="h-3 w-3 mr-1" />}
                  {disease.severity}
                </Badge>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {disease.animals.map((animal) => (
                  <Badge key={animal} variant="outline" className="text-xs">
                    {animal}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-vet-secondary mb-2">Common Symptoms:</h4>
                <div className="flex flex-wrap gap-2">
                  {disease.symptoms.map((symptom, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {symptom}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-vet-secondary mb-2 flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    Treatment:
                  </h4>
                  <p className="text-sm text-muted-foreground">{disease.treatment}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-vet-secondary mb-2 flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    Prevention:
                  </h4>
                  <p className="text-sm text-muted-foreground">{disease.prevention}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredDiseases.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">No diseases found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
}