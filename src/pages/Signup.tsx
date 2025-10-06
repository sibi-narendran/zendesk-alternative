import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsLoading(false);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-primary flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-radial from-accent/20 to-transparent pointer-events-none" />
        <Card className="w-full max-w-md relative z-10 shadow-2xl">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl font-bold text-green-700">
              Welcome to Doofy!
            </CardTitle>
            <CardDescription className="text-lg">
              Thank you for starting your free trial. We'll be in touch soon!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">What's Next?</h3>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Check your email for setup instructions</li>
                <li>• We'll create your account within 24 hours</li>
                <li>• Start exploring all of Doofy's features</li>
              </ul>
            </div>
            <div className="flex gap-3">
              <Button 
                onClick={() => navigate('/')} 
                variant="outline" 
                className="flex-1"
              >
                Back to Home
              </Button>
              <Button 
                onClick={() => window.open('https://cal.com/sibinarendran/demo', '_blank')}
                className="flex-1"
              >
                Book a Demo
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-primary flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-gradient-radial from-accent/20 to-transparent pointer-events-none" />
      
      <Card className="w-full max-w-md relative z-10 shadow-2xl">
        <CardHeader>
          <div className="flex items-center gap-2 mb-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleGoBack}
              className="p-2 hover:bg-gray-100"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <span className="text-sm text-muted-foreground">Back</span>
          </div>
          
          <CardTitle className="text-3xl font-bold text-center text-green-700">
            Start Your Free Trial
          </CardTitle>
          <CardDescription className="text-center text-lg">
            Join hundreds of businesses already using Doofy as their gorgias alternative
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Work Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 text-lg"
                disabled={isLoading}
              />
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">What you get:</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>✓ 14-day free trial</li>
                <li>✓ No credit card required</li>
                <li>✓ Full access to all features</li>
                <li>✓ Free migration from gorgias</li>
                <li>✓ 24/7 support</li>
              </ul>
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 text-lg font-semibold rounded-full shadow-glow hover:shadow-xl transition-all duration-300 hover:scale-105"
              disabled={isLoading || !email}
            >
              {isLoading ? "Setting up your trial..." : "Start Free Trial"}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              By continuing, you agree to our terms of service and privacy policy.
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
