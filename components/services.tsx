'use client'

import { useState, useEffect, useRef } from 'react';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import { setupIntersectionObserver } from '@/utils/animation';
import ServicePopup from './ServicePopup';

interface Service {
  title: string;
  description: string;
  image: string;
  details: string[];
  images: string[];
}

const services: Service[] = [
  {
    title: 'General Construction',
    description: 'Building reliable structures with precision and quality.',
    image: '/genconst.jpg',
    details: [
      'Commercial and Residential Construction',
      'Project Management',
      'Site Preparation and Excavation',
      'Structural Engineering',
      'Building Information Modeling (BIM)'
    ],
    images: ['/genconst.jpg', '/genconst2.jpg', '/genconst3.jpg'],
  },
  {
    title: 'Engineering and Architectural Design',
    description: 'Crafting innovative and functional designs tailored to your needs.',
    image: '/EngineeringAndArchitecturalDesign.jpg',
    details: [
      'Architectural Design',
      'Structural Engineering',
      'MEP (Mechanical, Electrical, Plumbing) Design',
      'Sustainable Design Solutions',
      '3D Modeling and Visualization'
    ],
    images: ['/EngineeringAndArchitecturalDesign.jpg', '/EngineeringAndArchitecturalDesign2.jpg', '/EngineeringAndArchitecturalDesign3.jpg'],
  },
  {
    title: 'Fit-Out Works',
    description: 'Transforming spaces into fully functional and aesthetic environments.',
    image: '/fitoutworks.png',
    details: [
      'Office Fit-Outs',
      'Retail Space Customization',
      'Restaurant and Hospitality Fit-Outs',
      'Industrial Facility Fit-Outs',
      'Sustainable Fit-Out Solutions'
    ],
    images: ['/fitoutworks.png', '/fitoutworks2.png', '/fitoutworks3.png'],
  },
  {
    title: 'Renovation and Restoration',
    description: 'Reviving and upgrading spaces with care and expertise.',
    image: '/RenovationAndRestoration.jpg',
    details: [
      'Roofing and Wall Finishes',
      'Painting & Repainting Works',
      'Waterproofing Works',
      'General Electrical Works',
      'Plumbing, Piping & Sanitary Lines'
    ],
    images: ['/RenovationAndRestoration.jpg', '/RenovationAndRestoration2.jpg', '/RenovationAndRestoration3.jpg'],
  },
  {
    title: 'Interior Design',
    description: 'Creating stunning interiors that inspire and elevate daily living.',
    image: '/InteriorDesign.jpg',
    details: [
      'Residential Interior Design',
      'Commercial Interior Design',
      'Space Planning and Layout',
      'Custom Furniture Design',
      'Color and Material Selection'
    ],
    images: ['/InteriorDesign.jpg', '/InteriorDesign2.jpg', '/InteriorDesign3.jpg'],
  },
];

export default function Services() {
  const servicesRef = useRef<HTMLElement>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  useEffect(() => {
    const observer = setupIntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('translate-y-10', 'opacity-0');
          observer.unobserve(entry.target);
        }
      });
    });

    const currentServicesRef = servicesRef.current;
    if (currentServicesRef) {
      const serviceItems = currentServicesRef.querySelectorAll('.animate-on-scroll');
      serviceItems.forEach((item) => observer.observe(item));
    }

    return () => {
      if (currentServicesRef) {
        const serviceItems = currentServicesRef.querySelectorAll('.animate-on-scroll');
        serviceItems.forEach((item) => observer.unobserve(item));
      }
    };
  }, []);

  return (
    <section
      ref={servicesRef}
      className="py-20 bg-[#003B5C] relative"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 59, 92, 0.9), rgba(0, 59, 92, 0.9)), 
          url('/cubespattern.png')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      id="services"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#FFB800] mb-4">
            WHAT WE OFFER
          </h2>
          <p className="text-lg italic font-regular text-white/90">
            Comprehensive solutions tailored to build, transform, and elevate your spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setSelectedService(service)}
              className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm flex flex-col animate-on-scroll translate-y-10 opacity-0 transition-all duration-1000 ease-out shadow-lg hover:scale-105 hover:shadow-xl transform transition-all duration-150 cursor-pointer"
            >
              <div className="aspect-square relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
              <div className="p-6 flex flex-col justify-between flex-1">
                <h3 className="text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-white/90 text-sm line-clamp-2 italic mb-4">
                  {service.description}
                </p>
                <div
                  className="inline-flex items-center text-[#FFB800] hover:text-white transition-colors font-bold"
                >
                  Learn More <ArrowRightIcon className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedService && (
        <ServicePopup
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
}

