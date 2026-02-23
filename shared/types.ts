export type EventType = 'regular' | 'special' | 'liturgical' | 'cultural';

export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  isSpecial: boolean;
  imageUrl?: string;
  eventType: EventType;
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

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
}
