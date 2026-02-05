const Hero = () => {
  return (
    <section className="relative min-h-[35vh] flex items-center justify-center bg-amber-400 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-amber-200 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-amber-300 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container relative z-10 px-6 py-10 text-center">
        <h1
          className="text-black font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)] font-serif"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <span className="block">Overview of</span>
          <span className="block mt-1">Twin Heart Meditation and Pranic Healing</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
