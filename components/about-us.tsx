'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { setupIntersectionObserver } from '@/utils/animation'

export default function AboutUs() {
  const aboutRef = useRef<HTMLElement>(null);

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

    const currentAboutRef = aboutRef.current;
    if (currentAboutRef) {
      const animatedElements = currentAboutRef.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((element) => observer.observe(element));
    }

    return () => {
      if (currentAboutRef) {
        const animatedElements = currentAboutRef.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach((element) => observer.unobserve(element));
      }
    };
  }, []);

  return (
    <section
      ref={aboutRef}
      id="about"
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#003B5C] mb-12 text-center animate-on-scroll translate-y-10 opacity-0 transition-all duration-1000 ease-out">
          About Us
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll translate-y-10 opacity-0 transition-all duration-1000 ease-out delay-300">
            <h3 className="text-2xl font-bold text-[#003B5C] mb-4">Our Mission</h3>
            <p className="text-lg mb-6">
              To deliver exceptional construction services that exceed client&apos;s expectation through our integrity, safety and provisions of quality and affordable services.
            </p>
            
            <h3 className="text-2xl font-bold text-[#003B5C] mb-4">Our Vision</h3>
            <p className="text-lg">
              APLJ CONSTRUCTIONS CORPORATION&apos;s vision is to be recognized as one of the leading construction companies in the country by promoting a good relationship with our clients, together with the employer and construction workers. To deliver superior construction work performance and live our company values.
            </p>
          </div>
          
          <div className="animate-on-scroll translate-y-10 opacity-0 transition-all duration-1000 ease-out delay-600">
            <h3 className="text-2xl font-bold text-[#003B5C] mb-4">Meet Our CEO</h3>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <Image
                src="/CEO.jpg"
                alt="CEO of APLJ Construction Corp"
                width={200}
                height={300}
                className="rounded-lg shadow-lg"
              />
              <div>
                <h4 className="text-xl font-semibold text-[#003B5C] mb-2">Jun Lobitos</h4>
                <p className="text-lg mb-4">
                  With multiple years of experience and numerous clients in the construction industry, Jun Lobitos
                  leads APLJ Construction Corp with a vision for innovation and excellence. 
                  His commitment to quality and client satisfaction has been the driving 
                  force behind our company&apos;s success.
                </p>
                <p className="text-lg italic">
                  &lsquo;Our goal is not just to build structures, but to create lasting value 
                  for our clients and communities.&rsquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

