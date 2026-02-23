export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  isSpecial: boolean;
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Photo {
  id: number;
  url: string;
  alt: string;
  caption?: string;
  order: number;
  createdAt: string;
}

export interface User {
  id: number;
  email: string;
  name: string;
  role: 'admin';
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
}
