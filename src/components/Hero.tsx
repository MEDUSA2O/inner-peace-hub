import { Heart } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[35vh] flex items-center justify-center gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary-foreground/20 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-primary-foreground/15 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container relative z-10 px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
          {/* Logo - left */}
          <img
            src="/arahant-logo.png"
            alt="Arahant Pranic Healing Center"
            className="h-36 sm:h-44 md:h-52 w-auto object-contain drop-shadow-xl"
          />
          {/* Center name - right */}
          <div className="text-center flex flex-col items-center">
            <h1
              className="text-black font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)] font-serif"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Arahant Pranic Healing Center
            </h1>
            <div className="flex items-center justify-center gap-2 mt-2 text-primary-foreground text-sm font-medium">
              <Heart className="w-4 h-4 shrink-0" style={{ color: "rgba(255,255,255,0.95)", fill: "rgba(255,255,255,0.95)" }} />
              <span>Healing body, mind & spirit</span>
              <Heart className="w-4 h-4 shrink-0" style={{ color: "rgba(255,255,255,0.95)", fill: "rgba(255,255,255,0.95)" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
