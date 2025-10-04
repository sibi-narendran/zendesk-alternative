import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureBlock from "@/components/FeatureBlock";
import CTASection from "@/components/CTASection";
import aiContextImg from "@/assets/ai-context.jpg";
import automationImg from "@/assets/automation.jpg";
import costSavingsImg from "@/assets/cost-savings.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <FeatureBlock
        title="AI that understands context."
        description="Doofy uses advanced AI to resolve tickets faster and more accurately than Gorgias, making every interaction seamless."
        imageUrl={aiContextImg}
        reverse={false}
      />
      
      <FeatureBlock
        title="Superior automation tools."
        description="Automate repetitive tasks with smarter workflows and reduce manual effort, saving your team valuable time."
        imageUrl={automationImg}
        reverse={true}
      />
      
      <FeatureBlock
        title="Significantly lower cost."
        description="Get all the powerful features you need at a fraction of Gorgias's cost, delivering unbeatable value for growing businesses."
        imageUrl={costSavingsImg}
        reverse={false}
      />
      
      <CTASection />
    </div>
  );
};

export default Index;
