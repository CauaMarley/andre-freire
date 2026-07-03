import { ReactNode } from 'react';

export interface Program {
  id: string;
  title: string;
  description: string;
  icon: string; // We'll map this to a Lucide icon component
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}
