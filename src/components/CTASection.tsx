import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Ready to switch to Doofy?
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Join hundreds choosing<br />
          affordable, smarter support<br />
          today.
        </p>
        <Button variant="default" size="lg" className="rounded-full">
          Start Your Free Trial
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
