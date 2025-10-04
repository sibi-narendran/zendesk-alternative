import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const stats = [
    { value: "10x", label: "Faster Response Time" },
    { value: "50%", label: "Cost Reduction" },
    { value: "98%", label: "Customer Satisfaction" },
    { value: "24/7", label: "AI-Powered Support" },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-highlight/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-highlight mb-2 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
