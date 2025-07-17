import React from 'react';
import { Code, Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre mí', href: '#sobre-mi' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const services = [
    { name: 'Desarrollo Frontend', href: '#' },
    { name: 'Desarrollo Backend', href: '#' },
    { name: 'UI/UX Design', href: '#' },
    { name: 'Desarrollo Mobile', href: '#' },
    { name: 'Consultoría Tech', href: '#' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">Alejandro Ariza</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Desarrollador Full Stack apasionado por crear soluciones digitales innovadoras 
                que transforman ideas en realidades tecnológicas.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="mailto:alejandro@example.com" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <div className="space-y-3">
                <div className="text-gray-400">
                  <p className="font-medium text-white">Email</p>
                  <a href="mailto:alejandro@example.com" className="hover:text-white transition-colors">
                    alejandro@example.com
                  </a>
                </div>
                <div className="text-gray-400">
                  <p className="font-medium text-white">Teléfono</p>
                  <a href="tel:+573001234567" className="hover:text-white transition-colors">
                    +57 300 123 4567
                  </a>
                </div>
                <div className="text-gray-400">
                  <p className="font-medium text-white">Ubicación</p>
                  <p>Bogotá, Colombia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="max-w-md mx-auto text-center">
              <h3 className="text-lg font-semibold mb-4">Suscríbete a mi newsletter</h3>
              <p className="text-gray-400 mb-4">
                Recibe actualizaciones sobre nuevos proyectos y artículos
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">
                  Suscribir
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm">
                © {currentYear} Alejandro Ariza. Todos los derechos reservados.
              </div>
              <div className="flex items-center space-x-1 text-gray-400 text-sm mt-4 md:mt-0">
                <span>Hecho con</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span>en Colombia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;