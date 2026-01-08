import { CalendarDays, Sun, Sunset, Moon } from "lucide-react";
import MedicineCard from "./MedicineCard";

interface Medicine {
  id: string;
  name: string;
  dosage: string;
  time: string;
  taken: boolean;
  period: 'morning' | 'afternoon' | 'evening';
}

interface TodayScheduleProps {
  medicines: Medicine[];
  onToggleTaken: (id: string) => void;
}

const TodaySchedule = ({ medicines, onToggleTaken }: TodayScheduleProps) => {
  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const takenCount = medicines.filter(m => m.taken).length;
  const totalCount = medicines.length;
  const progress = totalCount > 0 ? (takenCount / totalCount) * 100 : 0;

  const morningMeds = medicines.filter(m => m.period === 'morning');
  const afternoonMeds = medicines.filter(m => m.period === 'afternoon');
  const eveningMeds = medicines.filter(m => m.period === 'evening');

  return (
    <section className="py-12 px-6 md:px-12" id="schedule">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <CalendarDays className="w-8 h-8 text-primary" />
              <h2 className="text-elder-2xl font-bold text-foreground">Today's Schedule</h2>
            </div>
            <p className="text-elder-base text-muted-foreground">{today}</p>
          </div>
          
          <div className="bg-card rounded-2xl p-4 shadow-soft border border-border min-w-[200px]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-elder-base text-muted-foreground">Progress</span>
              <span className="text-elder-lg font-bold text-primary">{takenCount}/{totalCount}</span>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-success rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {medicines.length === 0 ? (
          <div className="bg-card rounded-2xl p-12 shadow-soft border border-border text-center">
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
              <CalendarDays className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="text-elder-xl font-bold text-foreground mb-3">No medicines scheduled</h3>
            <p className="text-elder-base text-muted-foreground">
              Add your first medicine reminder to get started!
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            <MedicinePeriod
              icon={<Sun className="w-6 h-6" />}
              title="Morning"
              medicines={morningMeds}
              onToggleTaken={onToggleTaken}
            />
            <MedicinePeriod
              icon={<Sunset className="w-6 h-6" />}
              title="Afternoon"
              medicines={afternoonMeds}
              onToggleTaken={onToggleTaken}
            />
            <MedicinePeriod
              icon={<Moon className="w-6 h-6" />}
              title="Evening"
              medicines={eveningMeds}
              onToggleTaken={onToggleTaken}
            />
          </div>
        )}
      </div>
    </section>
  );
};

interface MedicinePeriodProps {
  icon: React.ReactNode;
  title: string;
  medicines: Medicine[];
  onToggleTaken: (id: string) => void;
}

const MedicinePeriod = ({ icon, title, medicines, onToggleTaken }: MedicinePeriodProps) => {
  if (medicines.length === 0) return null;

  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-secondary-foreground">
          {icon}
        </div>
        <h3 className="text-elder-xl font-bold text-foreground">{title}</h3>
      </div>
      <div className="space-y-4">
        {medicines.map(medicine => (
          <MedicineCard 
            key={medicine.id} 
            medicine={medicine} 
            onToggleTaken={onToggleTaken} 
          />
        ))}
      </div>
    </div>
  );
};

export default TodaySchedule;
