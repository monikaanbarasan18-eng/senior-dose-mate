import { Button } from "@/components/ui/button";
import { Check, Clock, Pill } from "lucide-react";

interface Medicine {
  id: string;
  name: string;
  dosage: string;
  time: string;
  taken: boolean;
}

interface MedicineCardProps {
  medicine: Medicine;
  onToggleTaken: (id: string) => void;
}

const MedicineCard = ({ medicine, onToggleTaken }: MedicineCardProps) => {
  return (
    <div 
      className={`
        bg-card rounded-2xl p-6 shadow-soft border-2 transition-all duration-300
        ${medicine.taken 
          ? 'border-success/50 bg-success/5' 
          : 'border-border hover:border-primary/30 hover:shadow-soft-lg'
        }
      `}
    >
      <div className="flex items-start gap-5">
        <div 
          className={`
            w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors
            ${medicine.taken 
              ? 'bg-success/20 text-success' 
              : 'bg-primary/10 text-primary'
            }
          `}
        >
          <Pill className="w-8 h-8" />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className={`text-elder-xl font-bold mb-1 ${medicine.taken ? 'text-success' : 'text-foreground'}`}>
            {medicine.name}
          </h3>
          <p className="text-elder-base text-muted-foreground mb-2">
            {medicine.dosage}
          </p>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="w-5 h-5" />
            <span className="text-elder-base font-medium">{medicine.time}</span>
          </div>
        </div>

        <Button
          variant={medicine.taken ? "success" : "outline"}
          size="lg"
          onClick={() => onToggleTaken(medicine.id)}
          className="flex-shrink-0"
        >
          <Check className="w-6 h-6" />
          {medicine.taken ? "Taken!" : "Mark Done"}
        </Button>
      </div>
    </div>
  );
};

export default MedicineCard;
