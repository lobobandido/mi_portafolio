import React from 'react';
import { ArrowDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 p-1">
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Perfil profesional"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-lg text-gray-600 font-medium">¡Hola! Soy</p>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Alejandro Ariza
              </h1>
              <p className="text-xl md:text-2xl text-blue-600 font-medium">
                Desarrollador Full Stack & UI/UX Designer
              </p>
            </div>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Apasionado por crear experiencias digitales excepcionales. Especializado en desarrollo web moderno, 
              diseño de interfaces intuitivas y soluciones tecnológicas innovadoras.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <button 
                onClick={() => scrollToSection('contacto')}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Hablemos</span>
              </button>
              <button className="group border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:border-blue-600 hover:text-blue-600 flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Descargar CV</span>
              </button>
            </div>

            {/* Skills Preview */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Tecnologías que domino</p>
              <div className="flex flex-wrap justify-center gap-4">
                {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'MongoDB', 'PostgreSQL'].map((skill) => (
                  <span key={skill} className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="mt-16">
            <button 
              onClick={() => scrollToSection('sobre-mi')}
              className="group flex flex-col items-center space-y-2 text-gray-500 hover:text-blue-600 transition-colors"
            >
              <span className="text-sm font-medium">Conoce más sobre mí</span>
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;