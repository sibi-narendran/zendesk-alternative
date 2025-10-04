import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-background border-b border-border transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-6 py-4 animate-slide-down">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <a 
              href="/" 
              className="text-2xl font-bold text-foreground hover:opacity-80 transition-opacity"
            >
              Doofy
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("features")}
              className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-105"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection("comparison")}
              className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-105"
            >
              Comparison
            </button>
            <button 
              onClick={() => scrollToSection("pricing")}
              className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-105"
            >
              Pricing
            </button>
          </div>

          <Button 
            variant="default" 
            size="sm" 
            className="rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg"
          >
            Start Free Trial
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
