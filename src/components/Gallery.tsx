
import { useState } from "react";

export const Gallery = () => {
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
      caption: "Majestic Lion in Maasai Mara"
    },
    {
      url: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098",
      caption: "Leopard at Sunset"
    },
    {
      url: "https://images.unsplash.com/photo-1534759846116-5799c33ce22a",
      caption: "Cheetah Family"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Capture the Moment
          </h2>
          <p className="text-gray-600 text-lg">
            Preview the breathtaking moments that await you in the African savannah.
          </p>
        </div>

        <div className="grid gap-8">
          <div className="aspect-[16/9] overflow-hidden rounded-2xl">
            <img
              src={`${images[activeImage].url}?auto=format&fit=crop&w=1920&q=80`}
              alt={images[activeImage].caption}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`aspect-[16/9] overflow-hidden rounded-lg ${
                  activeImage === index 
                    ? "ring-2 ring-safari-500" 
                    : "opacity-70 hover:opacity-100"
                } transition-all`}
              >
                <img
                  src={`${image.url}?auto=format&fit=crop&w=400&q=80`}
                  alt={image.caption}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
