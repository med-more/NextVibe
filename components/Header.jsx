'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-floral-white/95 backdrop-blur-md shadow-lg border-b border-bone' : 'bg-floral-white/90 backdrop-blur-sm'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          <Link 
            href="/" 
            className="group relative text-2xl font-bold text-smoky-black hover:text-olive-drab transition-colors duration-300"
          >
            NextVibe
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-olive-drab group-hover:w-full transition-all duration-300"></span>
          </Link>


          <div className="hidden md:flex items-center space-x-1">
            {[
              { href: '/', label: 'Accueil' },
              { href: '/services', label: 'Services' },
              { href: '/about', label: 'À propos' },
              { href: '/contact', label: 'Contact' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? 'text-smoky-black bg-bone'
                    : 'text-olive-drab hover:text-smoky-black hover:bg-bone/50'
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-olive-drab rounded-full"></span>
                )}
              </Link>
            ))}
          </div>


          <button
            className="md:hidden p-2 rounded-lg text-olive-drab hover:bg-bone transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg 
              className="h-6 w-6" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>



        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2">
            {[
              { href: '/', label: 'Accueil' },
              { href: '/services', label: 'Services' },
              { href: '/about', label: 'À propos' },
              { href: '/contact', label: 'Contact' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                  isActive(item.href)
                    ? 'text-smoky-black bg-bone'
                    : 'text-olive-drab hover:text-smoky-black hover:bg-bone/50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}


