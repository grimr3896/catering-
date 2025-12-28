
import React from 'react';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-4">Our Expertise</h2>
        <h3 className="text-4xl md:text-5xl font-bold serif text-stone-900">Tailored Catering Solutions</h3>
        <div className="w-24 h-1 bg-amber-200 mx-auto mt-6"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {SERVICES.map((service) => {
          // Dynamic icon lookup from lucide-react with fallback to Utensils
          const IconComponent = (Icons as any)[service.icon] || Icons.Utensils;
          
          return (
            <div key={service.id} className="group relative">
              <div className="relative h-96 mb-6 overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-stone-900/40 group-hover:bg-stone-900/20 transition-colors"></div>
                <div className="absolute top-6 left-6 p-3 bg-white/90 backdrop-blur rounded-xl shadow-md">
                  <IconComponent className="w-6 h-6 text-amber-600" />
                </div>
              </div>
              
              <h4 className="text-2xl font-bold mb-3 serif group-hover:text-amber-600 transition-colors">{service.title}</h4>
              <p className="text-stone-600 leading-relaxed font-light">
                {service.description}
              </p>
              
              <button 
                className="mt-4 text-amber-600 font-semibold text-sm tracking-widest uppercase flex items-center gap-2 hover:translate-x-1 transition-transform"
                aria-label={`Learn more about ${service.title}`}
              >
                Explore More
                <Icons.ArrowRight className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
