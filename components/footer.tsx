'use client'

import { FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from 'lucide-react'; // Assuming you are using Lucide icons

export default function Footer() {
  return (
    <footer className="bg-[#003B5C] text-white py-10">
      <div className="container mx-auto px-4">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-extrabold text-[#FFB800] mb-4">APLJ Construction Corp</h3>
            <p className="text-lg mb-4">
              We are committed to building reliable, innovative, and functional structures. With years of experience, we focus on delivering quality and precision in every project.
            </p>
            <p>&copy; 2025 APLJ Construction Corp. All rights reserved.</p>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-xl font-extrabold text-[#FFB800] mb-4">Services</h3>
            <ul>
              <li><a href="#services" className="hover:text-[#FFB800] transition-colors">General Construction</a></li>
              <li><a href="#services" className="hover:text-[#FFB800] transition-colors">Engineering and Design</a></li>
              <li><a href="#services" className="hover:text-[#FFB800] transition-colors">Fit-Out Works</a></li>
              <li><a href="#services" className="hover:text-[#FFB800] transition-colors">Renovation & Restoration</a></li>
              <li><a href="#services" className="hover:text-[#FFB800] transition-colors">Interior Design</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-extrabold text-[#FFB800] mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="https://www.facebook.com/profile.php?id=61571843121604" target="_blank" rel="noopener noreferrer">
                <FacebookIcon className="h-8 w-8 hover:text-[#FFB800] transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <TwitterIcon className="h-8 w-8 hover:text-[#FFB800] transition-colors" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon className="h-8 w-8 hover:text-[#FFB800] transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <InstagramIcon className="h-8 w-8 hover:text-[#FFB800] transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center">
          <p>Designed with care by the APLJ team</p>
        </div>
      </div>
    </footer>
  );
}
