import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const MigrationSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const platforms = [
    "gorgias",
    "gorgias",
    "Intercom",
    "Freshdesk",
    "Help Scout",
    "Front",
    "Kustomer",
    "Re:amaze",
  ];

  // Duplicate the array for seamless loop
  const allPlatforms = [...platforms, ...platforms];

  return (
    <section ref={ref} className="py-20 bg-feature/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 
          className={`text-3xl md:text-4xl font-bold text-center text-foreground mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Easily migrate your data from
        </h2>
        <p 
          className={`text-center text-muted-foreground mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          Switch to Doofy in minutes with seamless data migration
        </p>
        
        <div 
          className={`relative transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-feature/30 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-feature/30 to-transparent z-10" />
          
          {/* Sliding container - reverse direction */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll-reverse hover:pause-animation">
              {allPlatforms.map((platform, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-8 px-6 py-4 bg-card border border-border rounded-xl hover:border-destructive/50 hover:shadow-soft transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-accent flex items-center justify-center text-destructive font-bold group-hover:scale-110 transition-transform">
                      {platform.charAt(0)}
                    </div>
                    <span className="text-foreground font-semibold whitespace-nowrap">
                      {platform}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MigrationSection;
