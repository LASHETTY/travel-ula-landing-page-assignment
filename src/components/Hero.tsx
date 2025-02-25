
import { PlaneLanding, MapPin, Calendar } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500 hover:scale-105"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <span className="inline-block px-4 py-1 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium animate-fade-in">
          Diwali 2023 Special
        </span>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
          Big Cats Week at
          <br />
          Maasai Mara
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "400ms" }}>
          Experience the breathtaking beauty of Kenya's prime park during the best time of the year.
        </p>

        {/* Trip Details */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
          <div className="flex items-center gap-2 opacity-0 animate-fade-in" style={{ animationDelay: "600ms" }}>
            <PlaneLanding className="w-5 h-5" />
            <span>Nairobi, Kenya</span>
          </div>
          <div className="flex items-center gap-2 opacity-0 animate-fade-in" style={{ animationDelay: "700ms" }}>
            <MapPin className="w-5 h-5" />
            <span>Maasai Mara</span>
          </div>
          <div className="flex items-center gap-2 opacity-0 animate-fade-in" style={{ animationDelay: "800ms" }}>
            <Calendar className="w-5 h-5" />
            <span>Nov 14-17, 2023</span>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "1000ms" }}>
          <button 
            className="px-8 py-3 rounded-full bg-safari-500 text-white hover:bg-safari-600 transition-all transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-safari-500 focus:ring-offset-2"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Special Offer
          </button>
          <button 
            className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2"
            onClick={() => document.getElementById('itinerary')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Itinerary
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-0 animate-fade-in" style={{ animationDelay: "1200ms" }}>
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </div>
  );
};
