
import React from 'react';
import { Service, GalleryItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'corporate',
    title: 'Bespoke Corporate Catering',
    description: 'Elevate your business luncheons, board meetings, and large-scale corporate galas with our sophisticated menus and seamless event logistics.',
    icon: 'Award',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c170db06?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'wedding',
    title: 'Luxury Wedding Catering',
    description: 'A comprehensive culinary service for your special day, featuring custom multi-course menus, hors d\'oeuvres service, and full beverage management.',
    icon: 'Heart',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'private',
    title: 'Private Chef & Event Service',
    description: 'Exquisite multi-course dining experiences delivered and served in your private residence or chosen venue, complete with staff and cleanup.',
    icon: 'Users',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1200'
  }
];

export const GALLERY: GalleryItem[] = [
  { id: 1, url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800', category: 'Main Course', title: 'Dry-Aged Ribeye' },
  { id: 2, url: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800', category: 'Appetizers', title: 'Seared King Scallops' },
  { id: 3, url: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800', category: 'Dessert', title: 'Artisanal Chocolate Mousse' },
  { id: 4, url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800', category: 'Drinks', title: 'Signature Botanical Cocktails' },
  { id: 5, url: 'https://images.unsplash.com/photo-1534422298391-e4f8c170db06?auto=format&fit=crop&q=80&w=1200', category: 'Corporate', title: 'Executive Lunch Service' },
  { id: 6, url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800', category: 'Wedding', title: 'Vintage Champagne Service' },
];

export const EVENT_TYPES = [
  'Wedding',
  'Corporate Gala',
  'Private Dinner',
  'Cocktail Party',
  'Birthday Celebration',
  'Other'
];
