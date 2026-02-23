import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  return format(parseISO(dateString), 'd MMMM yyyy', { locale: fr });
}

export function formatDateShort(dateString: string): string {
  return format(parseISO(dateString), 'd MMM yyyy', { locale: fr });
}
