
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface GalleryItem {
  id: number;
  url: string;
  category: string;
  title: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  date: string;
  guests: number;
  eventType: string;
  message: string;
}

export interface MenuSuggestion {
  appetizers: string[];
  mainCourses: string[];
  desserts: string[];
  drinks: string[];
  concept: string;
}
