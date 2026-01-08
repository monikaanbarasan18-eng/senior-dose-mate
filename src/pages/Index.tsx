import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TodaySchedule from "@/components/TodaySchedule";
import AddMedicineForm from "@/components/AddMedicineForm";
import Footer from "@/components/Footer";

interface Medicine {
  id: string;
  name: string;
  dosage: string;
  time: string;
  taken: boolean;
  period: 'morning' | 'afternoon' | 'evening';
}

const Index = () => {
  const [showForm, setShowForm] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [medicines, setMedicines] = useState<Medicine[]>([
    {
      id: "1",
      name: "Blood Pressure Pill",
      dosage: "1 tablet",
      time: "8:00 AM",
      taken: false,
      period: 'morning'
    },
    {
      id: "2",
      name: "Vitamin D",
      dosage: "2 capsules",
      time: "9:00 AM",
      taken: true,
      period: 'morning'
    },
    {
      id: "3",
      name: "Heart Medicine",
      dosage: "1 tablet with water",
      time: "2:00 PM",
      taken: false,
      period: 'afternoon'
    },
    {
      id: "4",
      name: "Sleep Aid",
      dosage: "1 tablet",
      time: "9:00 PM",
      taken: false,
      period: 'evening'
    }
  ]);

  const handleGetStarted = () => {
    setHasStarted(true);
    setTimeout(() => {
      document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleToggleTaken = (id: string) => {
    setMedicines(prev => 
      prev.map(med => 
        med.id === id ? { ...med, taken: !med.taken } : med
      )
    );
  };

  const handleAddMedicine = (medicine: { name: string; dosage: string; time: string; period: 'morning' | 'afternoon' | 'evening' }) => {
    const formattedTime = new Date(`1970-01-01T${medicine.time}`).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
    
    const newMedicine: Medicine = {
      id: Date.now().toString(),
      name: medicine.name,
      dosage: medicine.dosage,
      time: formattedTime,
      taken: false,
      period: medicine.period
    };
    
    setMedicines(prev => [...prev, newMedicine]);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {!hasStarted ? (
        <HeroSection onGetStarted={handleGetStarted} />
      ) : (
        <>
          <TodaySchedule medicines={medicines} onToggleTaken={handleToggleTaken} />
          
          {showForm ? (
            <AddMedicineForm onAdd={handleAddMedicine} onClose={() => setShowForm(false)} />
          ) : (
            <div className="py-8 px-6 md:px-12">
              <div className="max-w-4xl mx-auto flex justify-center">
                <Button 
                  variant="accent" 
                  size="xl" 
                  onClick={() => setShowForm(true)}
                  className="shadow-glow"
                >
                  <Plus className="w-7 h-7" />
                  Add New Medicine
                </Button>
              </div>
            </div>
          )}
        </>
      )}
      
      <Footer />
    </div>
  );
};

export default Index;
