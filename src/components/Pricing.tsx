
import { Check, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export const Pricing = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const features = [
    "Luxury accommodation in Maasai Mara",
    "All meals and beverages",
    "Professional photography guidance",
    "Game drives in 4x4 vehicles",
    "Flight transfers (Nairobi - Mara - Nairobi)",
    "Park fees and conservation charges"
  ];

  const handleReservation = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    
    toast({
      title: "Reservation initiated!",
      description: "Our team will contact you shortly to confirm your booking.",
      duration: 5000,
    });
  };

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1 mb-6 rounded-full bg-safari-50 text-safari-600 text-sm font-medium">
            Special Diwali Offer
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Reserve Your Safari Experience
          </h2>
          <p className="text-gray-600 text-lg">
            All-inclusive luxury package with expert guides and premium accommodation.
          </p>
        </div>

        <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <div className="p-8 text-center border-b border-gray-100">
            <div className="mb-4 group cursor-pointer">
              <span className="text-5xl font-display font-bold group-hover:text-safari-600 transition-colors">$3,499</span>
              <span className="text-gray-600">/person</span>
            </div>
            <p className="text-gray-600">Based on double occupancy</p>
          </div>

          <div className="p-8">
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-3 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Check className="w-5 h-5 text-safari-500 mt-0.5" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>

            <button 
              className={`w-full px-8 py-4 rounded-full bg-safari-500 text-white hover:bg-safari-600 
                transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-safari-500 
                focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center
                ${isLoading ? 'cursor-not-allowed' : 'hover:shadow-lg'}`}
              onClick={handleReservation}
              disabled={isLoading}
              aria-label="Reserve your spot for the Maasai Mara Safari"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                "Reserve Your Spot"
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
