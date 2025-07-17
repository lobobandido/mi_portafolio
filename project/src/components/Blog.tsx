import React from 'react';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Guía completa de React Hooks en 2024',
      excerpt: 'Descubre los hooks más útiles de React y cómo implementarlos en tus proyectos para crear código más limpio y eficiente.',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-15',
      readTime: '8 min',
      category: 'React'
    },
    {
      id: 2,
      title: 'Optimización de rendimiento en aplicaciones web',
      excerpt: 'Técnicas avanzadas para mejorar la velocidad y experiencia de usuario en aplicaciones web modernas.',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-10',
      readTime: '12 min',
      category: 'Performance'
    },
    {
      id: 3,
      title: 'Tendencias en desarrollo web para 2024',
      excerpt: 'Las tecnologías y metodologías que dominarán el desarrollo web este año y cómo prepararte para el futuro.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-05',
      readTime: '10 min',
      category: 'Tendencias'
    },
    {
      id: 4,
      title: 'Introducción a TypeScript para JavaScript developers',
      excerpt: 'Migra tus proyectos a TypeScript y mejora la mantenibilidad de tu código con tipos estáticos.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-01',
      readTime: '15 min',
      category: 'TypeScript'
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Blog & Artículos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comparto conocimientos, tutoriales y reflexiones sobre desarrollo web y tecnología
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={posts[0].image}
                    alt={posts[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {posts[0].category}
                    </span>
                    <span className="text-sm text-gray-500">Artículo destacado</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {posts[0].title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {posts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(posts[0].date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{posts[0].readTime}</span>
                      </div>
                    </div>
                    <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center space-x-1">
                      <span>Leer más</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl font-bold mb-4">
              Suscríbete a mi newsletter
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Recibe los últimos artículos y recursos sobre desarrollo web directamente en tu inbox
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Suscribirse
              </button>
            </div>
          </div>

          {/* View All Posts Button */}
          <div className="text-center mt-12">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors border-2 border-blue-600 hover:border-blue-700">
              Ver todos los artículos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;