'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { setupIntersectionObserver } from '@/utils/animation'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = setupIntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('translate-y-10', 'opacity-0');
          observer.unobserve(entry.target); // Stop observing after animation
        }
      });
    });

    const currentHeroRef = heroRef.current;
    if (currentHeroRef) {
      const animatedElements = currentHeroRef.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((element) => observer.observe(element));
    }

    return () => {
      if (currentHeroRef) {
        const animatedElements = currentHeroRef.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach((element) => observer.unobserve(element));
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-[url('/HeroSection.png')] bg-cover bg-center bg-no-repeat font-sans"
    >
      <div className="absolute inset-0 bg-black/10" />
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg translate-y-10 opacity-0 transition-all duration-1000 ease-out delay-300 animate-on-scroll">
          <span className="text-white">WHERE </span>
          <span className="text-[#FFB800]">VISION</span>
          <br />
          <span className="text-white">MEETS </span>
          <span className="text-[#003B5C]">FOUNDATION</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-[#003B5C] mb-8 leading-relaxed italic translate-y-10 opacity-0 transition-all duration-1000 ease-out delay-600 animate-on-scroll">
          Committed to building high-quality, safe, and affordable structures that
          exceed expectations, we aim to be the nation&apos;s leading construction company
          through strong relationships and exceptional results.
        </p>
        <Link
          href="#contact"
          className="inline-block bg-[#FFB800] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#FFB800]/90 transition-colors translate-y-10 opacity-0 transition-all duration-1000 ease-out delay-900 animate-on-scroll"
        >
          Start Your Vision
        </Link>
      </div>
    </section>
  );
}