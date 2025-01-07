'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { setupIntersectionObserver } from '@/utils/animation'

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = setupIntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('translate-y-[-10]', 'opacity-0');
          observer.unobserve(entry.target); // Stop observing after animation
        }
      });
    });

    if (navRef.current) {
      const animatedElements = navRef.current.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((element) => observer.observe(element));
    }

    return () => {
      if (navRef.current) {
        const animatedElements = navRef.current.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach((element) => observer.unobserve(element));
      }
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="absolute top-0 left-0 right-0 z-10 px-4 py-6"
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 animate-on-scroll">
          <Image
            src="/APLJ_transparent.png"
            alt="APLJ Construction Corp"
            width={50}
            height={50}
            className="h-12 w-auto"
          />
          <span className="text-lg font-bold text-[#003B5C]">APLJ Construction Corp</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="#services"
            className="text-[#003B5C] font-bold hover:text-[#FFB800] transition-colors animate-on-scroll translate-y-[-10] opacity-0 transition-all duration-1000 ease-out delay-300"
          >
            Services
          </Link>
          <Link
            href="#projects"
            className="text-[#003B5C] font-bold hover:text-[#FFB800] transition-colors animate-on-scroll translate-y-[-10] opacity-0 transition-all duration-1000 ease-out delay-500"
          >
            Projects
          </Link>
          <Link
            href="#about"
            className="text-[#003B5C] font-bold hover:text-[#FFB800] transition-colors animate-on-scroll translate-y-[-10] opacity-0 transition-all duration-1000 ease-out delay-700"
          >
            About Us
          </Link>
          <Link
            href="#faqs"
            className="text-[#003B5C] font-bold hover:text-[#FFB800] transition-colors animate-on-scroll translate-y-[-10] opacity-0 transition-all duration-1000 ease-out delay-900"
          >
            FAQs
          </Link>
        </div>
      </div>
    </nav>
  );
}
