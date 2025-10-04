import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-accent pt-20">
      <div className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-accent-foreground mb-4 animate-fade-up">
          Meet Doofy.
        </h1>
        <p className="text-3xl md:text-4xl font-bold text-foreground mb-8 animate-fade-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
          A smarter, affordable Gorgias alternative.
        </p>
        <div className="animate-fade-up [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
          <Button 
            variant="default" 
            size="lg" 
            className="rounded-full transition-all duration-300 hover:scale-110 hover:shadow-xl"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
