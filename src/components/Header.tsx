import { Pill, Heart } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full py-6 px-6 md:px-12 bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-soft">
            <Pill className="w-7 h-7 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-elder-xl font-bold text-foreground">MediMind</h1>
            <p className="text-elder-sm text-muted-foreground">Your caring companion</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Heart className="w-6 h-6 text-accent fill-accent" />
          <span className="text-elder-base hidden sm:inline">Stay healthy!</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
