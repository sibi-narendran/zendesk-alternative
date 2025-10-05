import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <section ref={ref} className="py-24 bg-gradient-accent relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-highlight/10 to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 
          className={`text-4xl md:text-5xl font-bold text-accent-foreground mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          Ready to switch?
        </h2>
        <p 
          className={`text-xl text-muted-foreground mb-8 max-w-2xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          Join hundreds of businesses that have already made the smart choice.
        </p>
        <div 
          className={`transition-all duration-700 flex flex-col sm:flex-row gap-4 justify-center ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <Button 
            variant="default" 
            size="lg" 
            className="rounded-full transition-all duration-300 hover:scale-110 shadow-glow hover:shadow-xl"
          >
            Start Free Trial
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full transition-all duration-300 hover:scale-110 border-2 hover:bg-accent hover:text-accent-foreground"
            onClick={() => window.open('https://calendly.com/sibinarendran/new-meeting?month=2025-10', '_blank')}
          >
            Book a Call
          </Button>
        </div>
        <div className={`mt-12 flex justify-center gap-12 text-sm text-muted-foreground transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '400ms' }}>
          <span>✓ No credit card required</span>
          <span>✓ 14-day free trial</span>
          <span>✓ Cancel anytime</span>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
