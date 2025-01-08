import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  image: string;
  details: string[];
  images: string[];
}

interface ServicePopupProps {
  service: Service;
  onClose: () => void;
}

export default function ServicePopup({ service, onClose }: ServicePopupProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % service.images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [service.images.length]);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? service.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % service.images.length
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-[#003B5C]">{service.title}</h2>
            <button 
              onClick={onClose} 
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              <X size={24} />
            </button>
          </div>
          <div className="md:flex gap-6">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <p className="text-gray-700 mb-4">{service.description}</p>
              <h3 className="font-bold text-lg mb-2 text-[#003B5C]">Services Offered:</h3>
              <ul className="list-disc pl-5 text-gray-700">
                {service.details.map((detail, index) => (
                  <li key={index} className="mb-1">{detail}</li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-full h-[300px] bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={service.images[currentImageIndex]}
                  alt={`${service.title} image ${currentImageIndex + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="object-cover"
                  style={{ transform: 'translate3d(0, 0, 0)' }}
                />
                <button 
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
                  onClick={handlePrevImage}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                <button 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
                  onClick={handleNextImage}
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
              </div>
              <div className="flex justify-center items-center gap-2 mt-4">
                {service.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-[#003B5C]' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                    aria-current={index === currentImageIndex}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

