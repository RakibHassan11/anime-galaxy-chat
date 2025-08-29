const HeroSection = () => {
  return (
    <section className="bg-gradient-hero py-20 relative overflow-hidden">
      {/* Animated Stars */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-sparkle"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-accent rounded-full animate-sparkle" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-40 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-sparkle" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 right-1/4 w-2 h-2 bg-accent rounded-full animate-sparkle" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-primary rounded-full animate-sparkle" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Planet Logo */}
      <div className="absolute top-10 right-10 hidden lg:block">
        <div className="relative">
          <div className="w-32 h-32 bg-gradient-accent rounded-full animate-float shadow-glow"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold text-primary-foreground">🪐</span>
          </div>
          {/* Orbit Ring */}
          <div className="absolute inset-0 border-2 border-primary/30 rounded-full w-40 h-40 -top-4 -left-4 animate-spin" style={{animationDuration: '10s'}}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
          Welcome to{" "}
          <span className="bg-gradient-accent bg-clip-text text-transparent">
            Anime Galaxy
          </span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
          Discover anime and manga, track your faves, chat with AI buddies! 
          Explore infinite worlds of adventure with your personal anime companions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
          <button className="px-8 py-3 bg-gradient-accent text-foreground font-semibold rounded-lg shadow-cosmic hover:shadow-glow transition-all duration-300 transform hover:scale-105">
            Start Exploring
          </button>
          <button className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            Browse Popular
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;