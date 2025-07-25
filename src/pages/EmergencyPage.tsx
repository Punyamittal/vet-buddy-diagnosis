import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Phone, Clock, Thermometer, Heart, Zap } from "lucide-react";

interface EmergencyCondition {
  id: string;
  name: string;
  symptoms: string[];
  immediateActions: string[];
  timeframe: string;
  severity: "Critical" | "Urgent";
}

const emergencies: EmergencyCondition[] = [
  {
    id: "bloat",
    name: "Bloat (Acute)",
    symptoms: [
      "Severely distended left side of abdomen",
      "Difficulty breathing",
      "Excessive drooling",
      "Restlessness or collapse",
      "Blue or pale gums"
    ],
    immediateActions: [
      "Call veterinarian IMMEDIATELY",
      "Keep animal standing if possible",
      "Do NOT give oral medications",
      "Remove from pasture",
      "Monitor breathing closely"
    ],
    timeframe: "30 minutes",
    severity: "Critical"
  },
  {
    id: "dystocia",
    name: "Difficult Birth (Dystocia)",
    symptoms: [
      "Labor for more than 2 hours without progress",
      "Visible part of calf/lamb but no progress for 30 minutes",
      "Abnormal presentation",
      "Exhausted mother",
      "Green/brown discharge before birth"
    ],
    immediateActions: [
      "Call veterinarian immediately",
      "Wash hands and arms thoroughly",
      "Gentle examination only",
      "Do NOT pull aggressively",
      "Keep mother calm and comfortable"
    ],
    timeframe: "1 hour",
    severity: "Critical"
  },
  {
    id: "choke",
    name: "Choking/Esophageal Obstruction",
    symptoms: [
      "Difficulty swallowing",
      "Excessive salivation",
      "Neck extension",
      "Coughing or retching",
      "Food/water coming from nose"
    ],
    immediateActions: [
      "Remove all feed and water",
      "Call veterinarian",
      "Do NOT attempt to push object down",
      "Keep animal calm",
      "Monitor for bloat development"
    ],
    timeframe: "2 hours",
    severity: "Urgent"
  },
  {
    id: "severe-colic",
    name: "Severe Colic (Horses)",
    symptoms: [
      "Rolling or thrashing",
      "Pawing at ground",
      "Looking at flanks",
      "Sweating profusely",
      "Elevated heart rate (>60 bpm)"
    ],
    immediateActions: [
      "Call veterinarian immediately",
      "Remove all feed",
      "Walk horse gently if safe",
      "Prevent rolling if possible",
      "Monitor vital signs"
    ],
    timeframe: "1 hour",
    severity: "Critical"
  },
  {
    id: "hypocalcemia",
    name: "Milk Fever (Hypocalcemia)",
    symptoms: [
      "Weakness and inability to stand",
      "Cold ears and legs",
      "S-shaped neck curve",
      "Muscle tremors",
      "Rapid heart rate"
    ],
    immediateActions: [
      "Call veterinarian immediately",
      "Keep animal warm and comfortable",
      "Provide soft bedding",
      "Do NOT give oral calcium",
      "Monitor breathing"
    ],
    timeframe: "2 hours",
    severity: "Critical"
  },
  {
    id: "severe-bleeding",
    name: "Severe Bleeding",
    symptoms: [
      "Continuous heavy bleeding",
      "Pale gums",
      "Weakness or collapse",
      "Rapid breathing",
      "Cold extremities"
    ],
    immediateActions: [
      "Apply direct pressure to wound",
      "Call veterinarian immediately",
      "Keep animal calm and still",
      "Do NOT remove embedded objects",
      "Monitor for shock signs"
    ],
    timeframe: "30 minutes",
    severity: "Critical"
  }
];

export default function EmergencyPage() {
  const getSeverityIcon = (severity: string) => {
    return severity === "Critical" ? <Zap className="h-4 w-4" /> : <AlertTriangle className="h-4 w-4" />;
  };

  const getSeverityColor = (severity: string) => {
    return severity === "Critical" 
      ? "bg-red-100 text-red-800 border-red-200" 
      : "bg-orange-100 text-orange-800 border-orange-200";
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-vet-primary mb-4">Emergency Guide</h1>
        <p className="text-muted-foreground text-lg">
          Critical emergency conditions requiring immediate veterinary attention
        </p>
      </div>

      {/* Emergency Contact Alert */}
      <Alert className="mb-8 border-red-200 bg-red-50">
        <Phone className="h-4 w-4" />
        <AlertDescription className="text-red-800">
          <strong>Emergency Veterinary Services:</strong> Always have your local emergency vet contact information readily available. 
          In life-threatening situations, call immediately and inform them you're on your way.
        </AlertDescription>
      </Alert>

      {/* General Emergency Guidelines */}
      <Card className="mb-8 border-vet-warning/30">
        <CardHeader>
          <CardTitle className="text-vet-primary flex items-center gap-2">
            <Heart className="h-5 w-5" />
            General Emergency Guidelines
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Before Emergency Strikes:</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Keep emergency vet contact information posted</li>
                <li>• Maintain a basic first aid kit</li>
                <li>• Know your animal's normal vital signs</li>
                <li>• Have transportation ready</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">During Emergency:</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Stay calm and assess the situation</li>
                <li>• Call veterinarian immediately</li>
                <li>• Follow phone instructions precisely</li>
                <li>• Prepare for transport if advised</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Emergency Conditions */}
      <div className="grid gap-6">
        {emergencies.map((emergency) => (
          <Card key={emergency.id} className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl text-vet-primary flex items-center gap-2">
                    {getSeverityIcon(emergency.severity)}
                    {emergency.name}
                  </CardTitle>
                  <div className="flex items-center gap-4 mt-2">
                    <Badge className={`${getSeverityColor(emergency.severity)} font-medium`}>
                      {emergency.severity}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      Action needed within: {emergency.timeframe}
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-vet-secondary mb-3 flex items-center gap-1">
                  <Thermometer className="h-4 w-4" />
                  Warning Signs:
                </h4>
                <div className="grid md:grid-cols-2 gap-2">
                  {emergency.symptoms.map((symptom, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                      {symptom}
                    </div>
                  ))}
                </div>
              </div>

              <Alert className="border-red-200 bg-red-50">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <strong className="text-red-800">IMMEDIATE ACTIONS REQUIRED:</strong>
                  <ol className="mt-2 space-y-1 text-red-800">
                    {emergency.immediateActions.map((action, index) => (
                      <li key={index} className="text-sm">
                        {index + 1}. {action}
                      </li>
                    ))}
                  </ol>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Footer Disclaimer */}
      <div className="mt-12 p-6 bg-muted rounded-lg">
        <p className="text-sm text-muted-foreground text-center">
          <strong>Important:</strong> This guide provides general emergency information only. 
          Always consult with a qualified veterinarian for proper diagnosis and treatment. 
          Time is critical in emergencies - when in doubt, call your veterinarian immediately.
        </p>
      </div>
    </div>
  );
}