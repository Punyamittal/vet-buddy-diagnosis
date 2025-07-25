import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Upload, Stethoscope, AlertTriangle, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DiagnosisResult {
  disease: string;
  explanation: string;
  treatment: string;
  vetConsultation: boolean;
  confidence: number;
}

export default function VetDiagnosisForm() {
  const [age, setAge] = useState("");
  const [animalType, setAnimalType] = useState("");
  const [symptoms, setSymptoms] = useState(["", "", ""]);
  const [image, setImage] = useState<File | null>(null);
  const [diagnosis, setDiagnosis] = useState<DiagnosisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  const animalTypes = [
    "Cow", "Dog", "Cat", "Horse", "Pig", "Goat", "Sheep", 
    "Chicken", "Duck", "Rabbit", "Other"
  ];

  const handleSymptomChange = (index: number, value: string) => {
    const newSymptoms = [...symptoms];
    newSymptoms[index] = value;
    setSymptoms(newSymptoms);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      toast({
        title: "Image uploaded",
        description: "Animal image has been uploaded successfully.",
      });
    }
  };

  const simulateDiagnosis = (): DiagnosisResult => {
    // This is a simulation - in a real app, this would call an AI service
    const symptomText = symptoms.join(" ").toLowerCase();
    
    if (symptomText.includes("salivation") && symptomText.includes("blister") && symptomText.includes("walking")) {
      return {
        disease: "Foot-and-Mouth Disease (FMD)",
        explanation: "The combination of excessive salivation, mouth blisters, and difficulty walking are classic symptoms of FMD. This highly contagious viral disease affects cloven-hoofed animals and requires immediate attention.",
        treatment: "Isolate the animal immediately. Provide soft feed and clean water. Apply antiseptic to mouth lesions. Contact veterinary authorities as FMD is a notifiable disease.",
        vetConsultation: true,
        confidence: 85
      };
    }
    
    return {
      disease: "General Health Assessment Required",
      explanation: "Based on the symptoms provided, a comprehensive examination is needed to determine the exact condition. Multiple conditions could present with these symptoms.",
      treatment: "Monitor the animal closely. Ensure adequate nutrition and hydration. Keep the animal comfortable and reduce stress factors.",
      vetConsultation: true,
      confidence: 60
    };
  };

  const handleDiagnosis = async () => {
    if (!age || !animalType || symptoms.filter(s => s.trim()).length === 0) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields before proceeding with diagnosis.",
        variant: "destructive"
      });
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate AI processing time
    setTimeout(() => {
      const result = simulateDiagnosis();
      setDiagnosis(result);
      setIsAnalyzing(false);
      
      toast({
        title: "Diagnosis Complete",
        description: "Analysis has been completed. Please review the results below.",
      });
    }, 2000);
  };

  const resetForm = () => {
    setAge("");
    setAnimalType("");
    setSymptoms(["", "", ""]);
    setImage(null);
    setDiagnosis(null);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card className="border-vet-primary/20 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-vet-primary to-vet-secondary text-white">
          <CardTitle className="text-2xl flex items-center gap-2">
            <Stethoscope className="h-6 w-6" />
            Veterinary Disease Diagnosis Assistant
          </CardTitle>
          <CardDescription className="text-white/90">
            Enter animal details and symptoms for professional disease assessment
          </CardDescription>
        </CardHeader>
        
        <CardContent className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="age" className="text-sm font-medium">
                Age of Animal *
              </Label>
              <Input
                id="age"
                type="number"
                placeholder="Enter age in years"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="border-vet-primary/30 focus:border-vet-primary"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="animal-type" className="text-sm font-medium">
                Type of Animal *
              </Label>
              <Select value={animalType} onValueChange={setAnimalType}>
                <SelectTrigger className="border-vet-primary/30 focus:border-vet-primary">
                  <SelectValue placeholder="Select animal type" />
                </SelectTrigger>
                <SelectContent>
                  {animalTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="image-upload" className="text-sm font-medium">
              Animal Image (Optional)
            </Label>
            <div className="border-2 border-dashed border-vet-primary/30 rounded-lg p-6 text-center hover:border-vet-primary/50 transition-colors">
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <label
                htmlFor="image-upload"
                className="cursor-pointer flex flex-col items-center gap-2"
              >
                <Upload className="h-8 w-8 text-vet-primary" />
                <span className="text-sm text-muted-foreground">
                  {image ? image.name : "Click to upload animal image"}
                </span>
              </label>
            </div>
          </div>

          <div className="space-y-4">
            <Label className="text-sm font-medium">Symptoms Observed *</Label>
            {symptoms.map((symptom, index) => (
              <div key={index} className="space-y-2">
                <Label htmlFor={`symptom-${index}`} className="text-xs text-muted-foreground">
                  Symptom {index + 1}
                </Label>
                <Textarea
                  id={`symptom-${index}`}
                  placeholder={`Describe symptom ${index + 1}...`}
                  value={symptom}
                  onChange={(e) => handleSymptomChange(index, e.target.value)}
                  className="border-vet-primary/30 focus:border-vet-primary min-h-[80px]"
                />
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <Button
              onClick={handleDiagnosis}
              disabled={isAnalyzing}
              className="flex-1 bg-vet-primary hover:bg-vet-secondary text-white"
            >
              {isAnalyzing ? "Analyzing..." : "Analyze Symptoms"}
            </Button>
            <Button variant="outline" onClick={resetForm} className="border-vet-primary/30">
              Reset Form
            </Button>
          </div>
        </CardContent>
      </Card>

      {diagnosis && (
        <Card className="border-vet-warning/30 shadow-lg">
          <CardHeader className="bg-vet-accent/20">
            <CardTitle className="text-xl flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Diagnosis Result
              <Badge variant="secondary" className="ml-auto">
                {diagnosis.confidence}% Confidence
              </Badge>
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-6 space-y-4">
            <div>
              <h3 className="font-semibold text-lg text-vet-primary mb-2">
                Likely Disease: {diagnosis.disease}
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                {diagnosis.explanation}
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold text-vet-secondary mb-2">
                Recommended Treatment:
              </h4>
              <p className="text-foreground/80 leading-relaxed">
                {diagnosis.treatment}
              </p>
            </div>

            {diagnosis.vetConsultation && (
              <>
                <Separator />
                <div className="bg-vet-warning/10 p-4 rounded-lg border border-vet-warning/30">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-vet-warning flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-vet-warning mb-1">
                        Veterinary Consultation Required
                      </h4>
                      <p className="text-sm text-foreground/80">
                        This condition requires professional veterinary assessment. 
                        Please contact a qualified veterinarian immediately for proper 
                        diagnosis and treatment.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}

            <div className="text-xs text-muted-foreground border-t pt-4">
              <p>
                <strong>Disclaimer:</strong> This tool provides preliminary assessments only. 
                Always consult with a qualified veterinarian for accurate diagnosis and treatment. 
                This system is designed to assist, not replace, professional veterinary care.
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}