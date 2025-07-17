import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <header className="fixed top-0 left-0 right-0 bg-anthracite/95 backdrop-blur-md shadow-none z-50">
      <div className="container-custom flex flex-col items-center justify-center h-20">
        <Link to="/" className="text-2xl font-bold text-accent tracking-tight mb-1 hover:text-primary-400 transition-colors">
          Lucas FANNER
        </Link>
        
        <nav className="hidden md:flex items-center justify-center space-x-8 w-full">
          {isHomePage ? (
            <>
              <a href="#home" className="nav-link">
                Accueil
              </a>
              <a href="#projects" className="nav-link">
                Projets
              </a>
              <a href="#about" className="nav-link">
                À propos
              </a>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </>
          ) : (
            <>
              <Link to="/" className="nav-link">
                Accueil
              </Link>
              <Link to="/projets" className="nav-link">
                Projets
              </Link>
              <a href="/#about" className="nav-link">
                À propos
              </a>
              <a href="/#contact" className="nav-link">
                Contact
              </a>
            </>
          )}
        </nav>
        
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="mobile-menu-btn"
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-7 h-7 text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-7 h-7 text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
        
        <div
          className={`md:hidden fixed top-20 left-0 right-0 bg-anthracite/95 backdrop-blur-md z-40 transition-all duration-300 ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col items-center space-y-4 py-6">
            {isHomePage ? (
              <>
                <a
                  href="#home"
                  className="nav-link text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Accueil
                </a>
                <a
                  href="#projects"
                  className="nav-link text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projets
                </a>
                <a
                  href="#about"
                  className="nav-link text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  À propos
                </a>
                <a
                  href="#contact"
                  className="nav-link text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </>
            ) : (
              <>
                <Link
                  to="/"
                  className="nav-link text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Accueil
                </Link>
                <Link
                  to="/projets"
                  className="nav-link text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projets
                </Link>
                <a
                  href="/#about"
                  className="nav-link text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  À propos
                </a>
                <a
                  href="/#contact"
                  className="nav-link text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
} 