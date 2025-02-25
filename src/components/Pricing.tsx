
import { Check } from "lucide-react";

export const Pricing = () => {
  const features = [
    "Luxury accommodation in Maasai Mara",
    "All meals and beverages",
    "Professional photography guidance",
    "Game drives in 4x4 vehicles",
    "Flight transfers (Nairobi - Mara - Nairobi)",
    "Park fees and conservation charges"
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
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

        <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8 text-center border-b border-gray-100">
            <div className="mb-4">
              <span className="text-5xl font-display font-bold">$3,499</span>
              <span className="text-gray-600">/person</span>
            </div>
            <p className="text-gray-600">Based on double occupancy</p>
          </div>

          <div className="p-8">
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-safari-500 mt-0.5" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>

            <button 
              className="w-full px-8 py-4 rounded-full bg-safari-500 text-white hover:bg-safari-600 transition-colors font-medium"
              onClick={() => window.location.href = "#contact"}
            >
              Reserve Your Spot
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
