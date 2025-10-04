import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <section ref={ref} className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div 
          className={`bg-gradient-accent rounded-3xl p-12 text-center border border-accent/20 shadow-soft transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
            Doubts? Contact our team
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a personalized demo and let us answer all your questions
          </p>
          <Button 
            variant="default" 
            size="lg" 
            className="rounded-full transition-all duration-300 hover:scale-110 shadow-glow hover:shadow-xl"
            onClick={() => window.open('https://calendly.com', '_blank')}
          >
            Book a Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
