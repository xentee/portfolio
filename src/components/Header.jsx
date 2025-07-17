import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <header className="fixed top-0 left-0 right-0 bg-anthracite/95 backdrop-blur-md shadow-none z-50">
      <div className="container-custom flex flex-col items-center justify-center h-20 relative">
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
        
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex items-center space-x-4">
          <a
            href="https://github.com/xentee"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-accent transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.24c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
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
        </div>
        
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