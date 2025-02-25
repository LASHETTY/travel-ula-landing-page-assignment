
import { Check } from "lucide-react";

export const Itinerary = () => {
  const days = [
    {
      day: "Day 1",
      title: "Arrival in Nairobi",
      activities: [
        "Welcome at Jomo Kenyatta International Airport",
        "Transfer to your luxury hotel in Nairobi",
        "Evening briefing about your safari adventure"
      ]
    },
    {
      day: "Day 2",
      title: "Journey to Maasai Mara",
      activities: [
        "Morning flight to Maasai Mara",
        "Game drive en route to the camp",
        "Evening safari drive to spot nocturnal predators"
      ]
    },
    {
      day: "Day 3",
      title: "Big Cats Photography",
      activities: [
        "Full day game drive focusing on big cats",
        "Professional photography guidance",
        "Sundowner in the savannah"
      ]
    },
    {
      day: "Day 4",
      title: "Departure",
      activities: [
        "Morning game drive",
        "Flight back to Nairobi",
        "Transfer to international airport"
      ]
    }
  ];

  return (
    <section id="itinerary" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Your Safari Journey
          </h2>
          <p className="text-gray-600 text-lg">
            An expertly crafted itinerary to maximize your big cats sightings and photographic opportunities.
          </p>
        </div>

        <div className="space-y-8">
          {days.map((day, index) => (
            <div 
              key={day.day}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="md:w-48">
                  <span className="text-safari-500 font-display text-xl font-semibold">
                    {day.day}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold mb-4">
                    {day.title}
                  </h3>
                  <ul className="space-y-3">
                    {day.activities.map((activity, activityIndex) => (
                      <li key={activityIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-safari-500 mt-0.5" />
                        <span className="text-gray-600">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
