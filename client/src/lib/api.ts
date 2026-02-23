import type { Event, Photo, User, ContactMessage } from '@/types';

const API_BASE = '/api';

async function fetchJSON<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${url}`, {
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    ...options,
  });
  if (!res.ok) {
    const error = await res.json().catch(() => ({ error: 'Erreur réseau' }));
    throw new Error(error.error || `Erreur ${res.status}`);
  }
  return res.json();
}

// Events
export async function getEvents(): Promise<Event[]> {
  return fetchJSON<Event[]>('/events');
}

export async function getSpecialEvents(): Promise<Event[]> {
  return fetchJSON<Event[]>('/events/special/all');
}

export async function getEvent(id: number): Promise<Event> {
  return fetchJSON<Event>(`/events/${id}`);
}

export async function createEvent(data: Omit<Event, 'id' | 'createdAt' | 'updatedAt'>): Promise<Event> {
  return fetchJSON<Event>('/events', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function updateEvent(id: number, data: Partial<Event>): Promise<Event> {
  return fetchJSON<Event>(`/events/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

export async function deleteEvent(id: number): Promise<void> {
  await fetchJSON(`/events/${id}`, { method: 'DELETE' });
}

// Photos
export async function getPhotos(): Promise<Photo[]> {
  return fetchJSON<Photo[]>('/photos');
}

export async function uploadPhoto(formData: FormData): Promise<Photo> {
  const res = await fetch(`${API_BASE}/photos`, {
    method: 'POST',
    credentials: 'include',
    body: formData,
  });
  if (!res.ok) {
    const error = await res.json().catch(() => ({ error: 'Erreur upload' }));
    throw new Error(error.error || `Erreur ${res.status}`);
  }
  return res.json();
}

export async function deletePhoto(id: number): Promise<void> {
  await fetchJSON(`/photos/${id}`, { method: 'DELETE' });
}

export async function updatePhoto(id: number, data: Partial<Photo>): Promise<Photo> {
  return fetchJSON<Photo>(`/photos/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

// Contact Messages
export async function sendContactMessage(data: { name: string; email: string; subject: string; message: string }): Promise<ContactMessage> {
  return fetchJSON<ContactMessage>('/contact', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function getContactMessages(): Promise<ContactMessage[]> {
  return fetchJSON<ContactMessage[]>('/contact');
}

export async function getUnreadMessageCount(): Promise<{ count: number }> {
  return fetchJSON<{ count: number }>('/contact/unread-count');
}

export async function markMessageAsRead(id: number): Promise<ContactMessage> {
  return fetchJSON<ContactMessage>(`/contact/${id}/read`, {
    method: 'PATCH',
  });
}

export async function deleteContactMessage(id: number): Promise<void> {
  await fetchJSON(`/contact/${id}`, { method: 'DELETE' });
}

// Auth
export async function login(email: string, password: string): Promise<User> {
  return fetchJSON<User>('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
}

export async function logout(): Promise<void> {
  await fetchJSON('/auth/logout', { method: 'POST' });
}

export async function getUser(): Promise<User> {
  return fetchJSON<User>('/user');
}
