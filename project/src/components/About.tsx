import React from 'react';
import { Award, BookOpen, Coffee, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, label: 'Años de experiencia', value: '5+' },
    { icon: BookOpen, label: 'Proyectos completados', value: '50+' },
    { icon: Users, label: 'Clientes satisfechos', value: '30+' },
    { icon: Coffee, label: 'Tazas de café', value: '∞' }
  ];

  const skills = [
    { name: 'Frontend Development', level: 95 },
    { name: 'Backend Development', level: 90 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'DevOps', level: 80 },
    { name: 'Mobile Development', level: 75 }
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sobre mí
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conoce mi trayectoria profesional y las tecnologías que me apasionan
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - About Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  Desarrollador Full Stack apasionado por la innovación
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Soy un desarrollador web con más de 5 años de experiencia creando soluciones digitales 
                  innovadoras. Mi enfoque se centra en desarrollar aplicaciones web modernas, escalables 
                  y centradas en el usuario.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Me especializo en tecnologías como React, Node.js, Python y cloud computing. 
                  Disfruto trabajando en proyectos desafiantes que me permiten aprender constantemente 
                  y aplicar las últimas tendencias tecnológicas.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                {stats.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="text-center p-4 bg-gray-50 rounded-lg">
                    <Icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{value}</div>
                    <div className="text-sm text-gray-600">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Habilidades técnicas
              </h3>
              
              <div className="space-y-4">
                {skills.map(({ name, level }) => (
                  <div key={name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-700 font-medium">{name}</span>
                      <span className="text-blue-600 font-medium">{level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Experience Timeline */}
              <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Experiencia reciente</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-900">Senior Full Stack Developer</p>
                      <p className="text-sm text-gray-600">TechCorp • 2021 - Presente</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-900">Frontend Developer</p>
                      <p className="text-sm text-gray-600">StartupXYZ • 2019 - 2021</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;