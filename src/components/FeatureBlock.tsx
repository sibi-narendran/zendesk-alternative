interface FeatureBlockProps {
  title: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
}

const FeatureBlock = ({ title, description, imageUrl, reverse = false }: FeatureBlockProps) => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
          <div className={`${reverse ? 'md:order-2' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
          <div className={`${reverse ? 'md:order-1' : ''}`}>
            <div className="bg-muted rounded-2xl aspect-[4/3] overflow-hidden">
              <img 
                src={imageUrl} 
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureBlock;
