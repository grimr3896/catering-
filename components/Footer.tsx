
import React from 'react';
import { Utensils, Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Utensils className="w-8 h-8 text-amber-600" />
              <span className="text-2xl font-bold tracking-tight serif text-white">LUMIÈRE</span>
            </div>
            <p className="text-sm leading-relaxed mb-8">
              Exquisite catering for those who appreciate the finer things. We transform every event into a Michelin-star culinary experience.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Quick Links</h5>
            <ul className="space-y-4 text-sm">
              <li><a href="#home" className="hover:text-amber-500 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-amber-500 transition-colors">Our Services</a></li>
              <li><a href="#gallery" className="hover:text-amber-500 transition-colors">The Gallery</a></li>
              <li><a href="#booking" className="hover:text-amber-500 transition-colors">Book an Event</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Services</h5>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Corporate Events</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Wedding Packages</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Private Dinners</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Custom Menus</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Contact Us</h5>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-600 shrink-0" />
                <span>124 Gourmet Boulevard, <br />Epicurean District, NY 10012</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-600 shrink-0" />
                <span>+1 (555) 888-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-600 shrink-0" />
                <span>concierge@lumiere-catering.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-6 text-xs uppercase tracking-widest">
          <p>&copy; 2024 Lumière Elite Catering. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
