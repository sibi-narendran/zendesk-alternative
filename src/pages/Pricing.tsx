import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">
            Simple, Fair Pricing
          </h1>
          <div className="bg-gradient-accent rounded-3xl p-12 shadow-soft">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Pay for our autonomous solved tickets
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Not seats.
            </p>
            <p className="text-2xl md:text-3xl font-bold text-primary">
              Forever free for seats
            </p>
          </div>
          <div className="flex justify-center gap-4 pt-8">
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full"
              onClick={() => window.open('https://calendly.com', '_blank')}
            >
              Book a Call
            </Button>
            <Button 
              variant="default" 
              size="lg" 
              className="rounded-full"
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pricing;
