import React from 'react';
import { Code, Palette, Server, Smartphone, Globe, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Desarrollo Frontend',
      description: 'Creación de interfaces modernas y responsivas con React, Vue.js y las últimas tecnologías web.',
      features: ['React & Vue.js', 'TypeScript', 'Responsive Design', 'Optimización SEO']
    },
    {
      icon: Server,
      title: 'Desarrollo Backend',
      description: 'APIs robustas y escalables con Node.js, Python y bases de datos optimizadas.',
      features: ['REST APIs', 'Microservicios', 'Bases de datos', 'Cloud Computing']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Diseño de experiencias de usuario intuitivas y atractivas centradas en la usabilidad.',
      features: ['Wireframing', 'Prototipos', 'Design Systems', 'User Research']
    },
    {
      icon: Smartphone,
      title: 'Desarrollo Mobile',
      description: 'Aplicaciones móviles nativas y multiplataforma con React Native y Flutter.',
      features: ['React Native', 'Flutter', 'App Store', 'Push Notifications']
    },
    {
      icon: Globe,
      title: 'Aplicaciones Web',
      description: 'Desarrollo completo de aplicaciones web escalables y de alto rendimiento.',
      features: ['Full Stack', 'PWA', 'Real-time', 'Cloud Deploy']
    },
    {
      icon: Zap,
      title: 'Consultoría Tech',
      description: 'Asesoramiento tecnológico para optimizar procesos y arquitecturas existentes.',
      features: ['Code Review', 'Arquitectura', 'Performance', 'Best Practices']
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Servicios profesionales
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ofrezco soluciones tecnológicas completas para llevar tu proyecto al siguiente nivel
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-blue-100">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:underline">
                    Más información →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Conversemos sobre cómo puedo ayudarte a hacer realidad tu visión
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Solicitar cotización
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;