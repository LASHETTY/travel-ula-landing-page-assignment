
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Gallery = () => {
  const [activeImage, setActiveImage] = useState(0);
  const { toast } = useToast();

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

  const handleImageChange = (index: number) => {
    setActiveImage(index);
    toast({
      title: images[index].caption,
      description: "Click to view in full resolution",
      duration: 3000,
    });
  };

  const navigate = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    } else {
      setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

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
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl group">
            <button 
              onClick={() => navigate('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/20 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/40"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <img
              src={`${images[activeImage].url}?auto=format&fit=crop&w=1920&q=80`}
              alt={images[activeImage].caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <button 
              onClick={() => navigate('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/20 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/40"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => handleImageChange(index)}
                className={`aspect-[16/9] overflow-hidden rounded-lg transform transition-all duration-300 hover:-translate-y-1 ${
                  activeImage === index 
                    ? "ring-2 ring-safari-500 shadow-lg" 
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={`${image.url}?auto=format&fit=crop&w=400&q=80`}
                  alt={image.caption}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
