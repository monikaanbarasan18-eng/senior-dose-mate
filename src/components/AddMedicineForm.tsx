import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Pill, X } from "lucide-react";

interface AddMedicineFormProps {
  onAdd: (medicine: { name: string; dosage: string; time: string; period: 'morning' | 'afternoon' | 'evening' }) => void;
  onClose: () => void;
}

const AddMedicineForm = ({ onAdd, onClose }: AddMedicineFormProps) => {
  const [name, setName] = useState("");
  const [dosage, setDosage] = useState("");
  const [time, setTime] = useState("08:00");
  const [period, setPeriod] = useState<'morning' | 'afternoon' | 'evening'>('morning');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && dosage.trim()) {
      onAdd({ name: name.trim(), dosage: dosage.trim(), time, period });
      setName("");
      setDosage("");
      setTime("08:00");
      setPeriod('morning');
    }
  };

  return (
    <section className="py-12 px-6 md:px-12" id="add-medicine">
      <div className="max-w-2xl mx-auto">
        <div className="bg-card rounded-3xl p-8 shadow-soft-lg border border-border">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Pill className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-elder-2xl font-bold text-foreground">Add New Medicine</h2>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-6 h-6" />
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="name" className="text-elder-base font-semibold">
                Medicine Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="e.g., Aspirin"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-14 text-elder-base px-5 rounded-xl"
                required
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="dosage" className="text-elder-base font-semibold">
                Dosage
              </Label>
              <Input
                id="dosage"
                type="text"
                placeholder="e.g., 1 tablet, 5ml"
                value={dosage}
                onChange={(e) => setDosage(e.target.value)}
                className="h-14 text-elder-base px-5 rounded-xl"
                required
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="time" className="text-elder-base font-semibold">
                Time to Take
              </Label>
              <Input
                id="time"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="h-14 text-elder-base px-5 rounded-xl"
                required
              />
            </div>

            <div className="space-y-3">
              <Label className="text-elder-base font-semibold">
                Time of Day
              </Label>
              <div className="grid grid-cols-3 gap-3">
                {(['morning', 'afternoon', 'evening'] as const).map((p) => (
                  <Button
                    key={p}
                    type="button"
                    variant={period === p ? "default" : "secondary"}
                    size="lg"
                    onClick={() => setPeriod(p)}
                    className="capitalize"
                  >
                    {p}
                  </Button>
                ))}
              </div>
            </div>

            <Button type="submit" variant="accent" size="xl" className="w-full mt-8">
              <Plus className="w-6 h-6" />
              Add Medicine
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddMedicineForm;
