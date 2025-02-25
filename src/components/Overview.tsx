
import { Sun, Camera, Map } from "lucide-react";

export const Overview = () => {
  const features = [
    {
      icon: <Sun className="w-6 h-6 text-safari-500" />,
      title: "Perfect Season",
      description: "November offers dramatic skies and breathtaking sunsets, with the plains turning lush green from short rains."
    },
    {
      icon: <Camera className="w-6 h-6 text-safari-500" />,
      title: "Big Cat Sightings",
      description: "With migratory herds back in Tanzania, witness big cats venturing longer distances for hunting."
    },
    {
      icon: <Map className="w-6 h-6 text-safari-500" />,
      title: "Expert Guides",
      description: "Experienced Maasai guides lead you through the best spots for wildlife viewing and photography."
    }
  ];

  return (
    <section id="overview" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            A Once-in-a-Lifetime Safari Experience
          </h2>
          <p className="text-gray-600 text-lg">
            November is one of the best times to visit Kenya, especially its prime park, Maasai Mara. 
            Join us on this unforgettable journey curated to celebrate our first year in Nairobi.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-safari-50 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
