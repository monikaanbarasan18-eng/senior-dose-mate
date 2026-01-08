import { Heart, Pill } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 px-6 md:px-12 bg-secondary/50 border-t border-border mt-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <Pill className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-elder-lg font-bold text-foreground">MediMind</h3>
              <p className="text-elder-sm text-muted-foreground">Caring for your health</p>
            </div>
          </div>
          
          <p className="flex items-center gap-2 text-elder-base text-muted-foreground">
            Made with <Heart className="w-5 h-5 text-accent fill-accent" /> for you
          </p>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-elder-sm text-muted-foreground">
            Remember: Always consult your doctor about your medications.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
