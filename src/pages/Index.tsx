import VetDiagnosisForm from "@/components/VetDiagnosisForm";
import heroImage from "@/assets/vet-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={heroImage} 
          alt="Veterinary care" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-vet-secondary/80 to-vet-primary/70 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              VetBuddy Diagnosis
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
              Professional veterinary disease diagnosis assistant for farmers and animal caretakers
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <VetDiagnosisForm />
      </div>

      {/* Footer */}
      <footer className="bg-vet-secondary text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-90">
            VetBuddy Diagnosis - Supporting animal health through technology
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
