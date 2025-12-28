
import React, { useState } from 'react';
import { Calendar, Users, UtensilsCrossed, Sparkles, Send, Loader2, AlertCircle } from 'lucide-react';
import { EVENT_TYPES } from '../constants';
import { generateMenuSuggestion } from '../services/geminiService';
import { MenuSuggestion } from '../types';

const BookingForm: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [menuResult, setMenuResult] = useState<MenuSuggestion | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    guests: 50,
    eventType: EVENT_TYPES[0],
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleGenerateMenu = async () => {
    setIsGenerating(true);
    setHasError(false);
    try {
      const result = await generateMenuSuggestion(
        formData.eventType,
        formData.guests,
        formData.message || "A luxury experience focusing on seasonal ingredients."
      );
      if (result) {
        setMenuResult(result);
      } else {
        setHasError(true);
      }
    } catch (err) {
      setHasError(true);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Our event concierge will contact you within 24 hours.");
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Side: Form */}
        <div>
          <h2 className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-4">Reservation</h2>
          <h3 className="text-4xl md:text-5xl font-bold serif text-stone-900 mb-8">Let's Create Magic</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all" 
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Event Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                  <input 
                    type="date" 
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Guests</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                  <input 
                    type="number" 
                    name="guests"
                    min="1"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Event Type</label>
                <select 
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all appearance-none cursor-pointer"
                >
                  {EVENT_TYPES.map(type => <option key={type} value={type}>{type}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Additional Wishes</label>
              <textarea 
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about dietary requirements or your vision..."
                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all resize-none"
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                type="submit"
                className="flex-1 bg-stone-900 text-white py-4 px-8 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-stone-800 transition-all shadow-lg active:scale-[0.98]"
              >
                <Send className="w-4 h-4" />
                Submit Inquiry
              </button>
              <button 
                type="button"
                onClick={handleGenerateMenu}
                disabled={isGenerating}
                className="flex-1 bg-white border-2 border-amber-600 text-amber-600 py-4 px-8 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-amber-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm active:scale-[0.98]"
              >
                {isGenerating ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Sparkles className="w-4 h-4" />
                )}
                AI Menu Designer
              </button>
            </div>
          </form>
        </div>

        {/* Right Side: AI Result Display */}
        <div className="bg-stone-50 rounded-3xl p-8 md:p-12 border border-stone-200 min-h-[500px] flex flex-col justify-center relative overflow-hidden shadow-inner">
          {isGenerating ? (
            <div className="text-center animate-pulse">
              <Sparkles className="w-12 h-12 text-amber-600 mx-auto mb-4 animate-bounce" />
              <h4 className="text-xl font-bold serif text-amber-900">Curating Your Menu...</h4>
              <p className="text-stone-500 text-sm mt-2">Selecting seasonal ingredients and pairings.</p>
            </div>
          ) : hasError ? (
            <div className="text-center">
              <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold serif text-stone-800">Connection Interrupted</h4>
              <p className="text-stone-500 text-sm mt-2 max-w-xs mx-auto">
                We couldn't connect to our AI designer. Please try again or submit your inquiry directly.
              </p>
              <button 
                onClick={handleGenerateMenu}
                className="mt-6 text-amber-600 font-bold uppercase tracking-widest text-xs hover:underline"
              >
                Retry Generation
              </button>
            </div>
          ) : menuResult ? (
            <div className="animate-in fade-in slide-in-from-right duration-500">
              <div className="mb-8">
                <span className="text-amber-600 font-bold tracking-[0.2em] uppercase text-xs">AI Suggestion</span>
                <h4 className="text-3xl font-bold serif mt-2">{formData.eventType} Concept</h4>
                <p className="text-stone-500 italic mt-4 font-light leading-relaxed">"{menuResult.concept}"</p>
              </div>

              <div className="space-y-8">
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-3 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-600"></div>
                    Appetizers
                  </h5>
                  <ul className="grid gap-2">
                    {menuResult.appetizers.map((item, idx) => (
                      <li key={idx} className="text-stone-700 font-medium pl-4 border-l border-amber-200">{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-3 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-600"></div>
                    Main Courses
                  </h5>
                  <ul className="grid gap-2">
                    {menuResult.mainCourses.map((item, idx) => (
                      <li key={idx} className="text-stone-700 font-medium pl-4 border-l border-amber-200">{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-3">Desserts</h5>
                    <ul className="grid gap-2">
                      {menuResult.desserts.map((item, idx) => (
                        <li key={idx} className="text-sm text-stone-600">{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-3">Pairings</h5>
                    <ul className="grid gap-2">
                      {menuResult.drinks.map((item, idx) => (
                        <li key={idx} className="text-sm text-stone-600">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-stone-100">
                <UtensilsCrossed className="w-8 h-8 text-amber-600/30" />
              </div>
              <h4 className="text-2xl font-bold serif text-stone-400 mb-4">Awaiting Your Inspiration</h4>
              <p className="text-stone-500 max-w-xs mx-auto text-sm leading-relaxed">
                Use our AI Menu Designer to generate a customized gourmet menu concept based on your event requirements.
              </p>
            </div>
          )}

          {/* Decorative background element */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-amber-100/20 rounded-full blur-3xl pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
