import { Heart, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary-foreground/20 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-primary-foreground/15 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container relative z-10 text-center px-6 py-16">
        <div className="flex justify-center gap-2 mb-6">
          <Heart className="w-8 h-8 text-primary-foreground animate-float" />
          <Heart className="w-8 h-8 text-primary-foreground animate-float" style={{ animationDelay: "0.5s" }} />
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-4 text-balance">
          Overview
        </h1>
        
        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-2">
          Twin Heart Meditation & Pranic Healing
        </p>

        <div className="flex items-center justify-center gap-2 text-primary-foreground/80 text-sm">
          <Sparkles className="w-4 h-4" />
          <span>Healing body, mind & spirit</span>
          <Sparkles className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
