import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section className="min-h-[70vh] flex items-center justify-center bg-gradient-primary pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-accent/20 to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 py-24 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-up text-green-700">
          Meet Doofy.
        </h1>
        <p className="text-3xl md:text-4xl font-bold text-foreground mb-8 animate-fade-up [animation-delay:100ms] opacity-0 [animation-fill-mode:forwards]">
          A smarter, affordable Gorgias alternative.
        </p>
        <div className="animate-fade-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
          <Button variant="default" size="lg" className="rounded-full transition-all duration-300 hover:scale-110 shadow-glow hover:shadow-xl">
            Get Started
          </Button>
        </div>
      </div>
    </section>;
};
export default Hero;