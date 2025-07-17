import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Github, Linkedin, Twitter } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800">AAR</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Inicio
            </a>
            <a href="#sobre-mi" onClick={() => scrollToSection('sobre-mi')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Sobre mí
            </a>
            <a href="#proyectos" onClick={() => scrollToSection('proyectos')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Proyectos
            </a>
            <a href="#servicios" onClick={() => scrollToSection('servicios')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Servicios
            </a>
            <a href="#blog" onClick={() => scrollToSection('blog')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Blog
            </a>
            <a href="#contacto" onClick={() => scrollToSection('contacto')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contacto
            </a>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#inicio" onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Inicio
              </a>
              <a href="#sobre-mi" onClick={() => scrollToSection('sobre-mi')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Sobre mí
              </a>
              <a href="#proyectos" onClick={() => scrollToSection('proyectos')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Proyectos
              </a>
              <a href="#servicios" onClick={() => scrollToSection('servicios')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Servicios
              </a>
              <a href="#blog" onClick={() => scrollToSection('blog')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Blog
              </a>
              <a href="#contacto" onClick={() => scrollToSection('contacto')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Contacto
              </a>
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;