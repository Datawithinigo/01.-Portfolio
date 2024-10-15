import React from 'react';
import { Linkedin, Instagram, Youtube, Monitor, ShoppingBag, Cpu } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto p-4">
        <section className="flex flex-col md:flex-row items-center justify-between py-16">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              [Nombre del desarrollador], Software Developer
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Desarrollo de aplicaciones a medida, soporte continuo y consultoría
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-600 hover:text-navy-900">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-navy-900">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-navy-900">
                <Youtube size={24} />
              </a>
            </div>
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full transition duration-300">
              Get in Touch
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt="Developer Portrait"
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>
        </section>

        <section className="py-16 border-t border-gray-200">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8 text-center">About Me</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
            Con más de una década de experiencia en desarrollo de software, me especializo en crear soluciones innovadoras y eficientes. Mi pasión por la tecnología y el aprendizaje continuo me permite estar siempre a la vanguardia de las últimas tendencias y mejores prácticas en el mundo del desarrollo.
          </p>
        </section>

        <section className="flex flex-col md:flex-row items-center justify-between py-16 border-t border-gray-200">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
              alt="Work Environment"
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Cómo trabajo con mis clientes
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Mi enfoque se basa en una colaboración estrecha y una comunicación constante. 
              Entiendo las necesidades únicas de cada proyecto y ofrezco soluciones 
              personalizadas. Desde la conceptualización hasta la implementación, 
              trabajo mano a mano con mis clientes para asegurar resultados excepcionales.
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full transition duration-300">
              Contact Me
            </button>
          </div>
        </section>

        <section className="py-16 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <Monitor className="w-12 h-12 text-navy-900 mb-4" />
              <h3 className="text-xl font-bold text-navy-900 mb-2">Web & App Development</h3>
              <p className="text-gray-600">Desarrollo de aplicaciones web y móviles modernas, responsivas y escalables utilizando las últimas tecnologías.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <ShoppingBag className="w-12 h-12 text-navy-900 mb-4" />
              <h3 className="text-xl font-bold text-navy-900 mb-2">E-Commerce, Shopify</h3>
              <p className="text-gray-600">Creación y optimización de tiendas en línea, con especial enfoque en plataformas como Shopify para maximizar ventas.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <Cpu className="w-12 h-12 text-navy-900 mb-4" />
              <h3 className="text-xl font-bold text-navy-900 mb-2">AI Development</h3>
              <p className="text-gray-600">Implementación de soluciones de inteligencia artificial y aprendizaje automático para potenciar su negocio.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;