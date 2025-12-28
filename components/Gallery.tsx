
import React, { useState } from 'react';
import { GALLERY } from '../constants';

const categories = ['All', 'Appetizers', 'Main Course', 'Dessert', 'Drinks', 'Corporate', 'Wedding'];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? GALLERY 
    : GALLERY.filter(item => item.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
        <div>
          <h2 className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-4">The Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-bold serif text-stone-900">Visual Feast</h3>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all ${
                activeCategory === cat 
                  ? 'bg-amber-600 text-white' 
                  : 'bg-stone-200 text-stone-600 hover:bg-stone-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="group relative aspect-square overflow-hidden rounded-2xl bg-stone-200 animate-in fade-in zoom-in duration-500"
          >
            <img 
              src={item.url} 
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center p-6">
              <div>
                <span className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-2 block">{item.category}</span>
                <h4 className="text-white text-2xl font-bold serif">{item.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
