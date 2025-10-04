import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6 text-center">
        <h2 
          className={`text-4xl md:text-5xl font-bold text-foreground mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Ready to switch to Doofy?
        </h2>
        <p 
          className={`text-lg text-muted-foreground mb-8 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Join hundreds choosing<br />
          affordable, smarter support<br />
          today.
        </p>
        <div 
          className={`transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Button 
            variant="default" 
            size="lg" 
            className="rounded-full transition-all duration-300 hover:scale-110 hover:shadow-xl"
          >
            Start Your Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
