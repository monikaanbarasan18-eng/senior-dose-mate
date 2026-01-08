import { Button } from "@/components/ui/button";
import { Clock, Bell, CheckCircle } from "lucide-react";

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="py-12 md:py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-elder-3xl md:text-elder-4xl font-bold text-foreground mb-6 text-balance">
            Never Forget Your <span className="text-primary">Medicine</span> Again
          </h2>
          <p className="text-elder-lg md:text-elder-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance">
            A simple and friendly way to keep track of your daily medications. 
            We'll remind you when it's time to take them.
          </p>
          <Button variant="hero" size="xl" onClick={onGetStarted}>
            <Bell className="w-7 h-7" />
            Start Your Reminders
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <FeatureCard
            icon={<Clock className="w-10 h-10" />}
            title="Easy to Set Up"
            description="Add your medicines in just a few taps. No complicated menus!"
            delay="0"
          />
          <FeatureCard
            icon={<Bell className="w-10 h-10" />}
            title="Friendly Reminders"
            description="Get gentle notifications when it's time to take your medicine."
            delay="100"
          />
          <FeatureCard
            icon={<CheckCircle className="w-10 h-10" />}
            title="Track Your Progress"
            description="See all the medicines you've taken today at a glance."
            delay="200"
          />
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => {
  return (
    <div 
      className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
        {icon}
      </div>
      <h3 className="text-elder-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-elder-base text-muted-foreground">{description}</p>
    </div>
  );
};

export default HeroSection;
