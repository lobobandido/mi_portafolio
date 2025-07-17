import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'María González',
      role: 'CEO, TechStartup',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'Alejandro transformó completamente nuestra plataforma. Su atención al detalle y conocimiento técnico son excepcionales. Recomiendo su trabajo sin dudarlo.',
      rating: 5
    },
    {
      name: 'Carlos Rodríguez',
      role: 'CTO, InnovaCorp',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'La aplicación que desarrolló superó todas nuestras expectativas. Su capacidad para resolver problemas complejos y entregar a tiempo es impresionante.',
      rating: 5
    },
    {
      name: 'Ana López',
      role: 'Product Manager, DesignCo',
      avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'Trabajar con Alejandro fue una experiencia fantástica. Su enfoque en UX y su habilidad técnica crearon una solución perfecta para nuestros usuarios.',
      rating: 5
    },
    {
      name: 'Diego Martínez',
      role: 'Founder, EcommercePlus',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'Nuestro e-commerce creció 300% después de la optimización que hizo Alejandro. Su conocimiento en performance y SEO es excepcional.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lo que dicen mis clientes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Testimonios reales de clientes satisfechos con los proyectos desarrollados
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-start space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="mb-6">
                  <Quote className="w-8 h-8 text-blue-600 mb-4 opacity-50" />
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {testimonial.content}
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Satisfacción</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
              <div className="text-gray-600">Clientes felices</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Proyectos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">5★</div>
              <div className="text-gray-600">Calificación</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;