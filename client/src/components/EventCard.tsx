import { Link } from 'react-router-dom';
import { Clock, MapPin, Star, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';
import type { Event } from '@/types';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const date = parseISO(event.date);
  const day = format(date, 'd');
  const month = format(date, 'MMM', { locale: fr }).toUpperCase();

  return (
    <Link to={`/event/${event.id}`} className="group block">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-border/50 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 h-full flex flex-col">
        {/* Image with date badge */}
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          {event.imageUrl ? (
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-sanctuary-accent/20 flex items-center justify-center">
              <img
                src="/images/IMG_9328.webp"
                alt={event.title}
                className="w-full h-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          )}

          {/* Date badge */}
          <div className="absolute top-3 left-3 bg-primary text-white rounded-md px-2.5 py-1.5 text-center shadow-md">
            <span className="block text-xl font-bold leading-none">{day}</span>
            <span className="block text-[10px] uppercase tracking-wider mt-0.5">{month}</span>
          </div>

          {/* Special badge */}
          {event.isSpecial && (
            <Badge variant="burgundy" className="absolute top-3 right-3 flex items-center gap-1 shadow-md">
              <Star className="h-3 w-3" />
              Temps fort
            </Badge>
          )}
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="font-serif text-lg font-semibold text-foreground mb-2 line-clamp-2">
            {event.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
            {event.description}
          </p>

          <div className="space-y-1.5 mb-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-3.5 w-3.5 text-sanctuary-accent shrink-0" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-sanctuary-accent shrink-0" />
              <span>{event.location}</span>
            </div>
          </div>

          <span className="inline-flex items-center gap-1 text-sm text-sanctuary-accent font-medium group-hover:gap-2 transition-all">
            Voir le détail <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function EventCardSkeleton() {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-border/50 h-full flex flex-col animate-pulse">
      <div className="aspect-[16/10] bg-muted" />
      <div className="p-5 flex-1 flex flex-col gap-3">
        <div className="h-5 bg-muted rounded w-3/4" />
        <div className="h-4 bg-muted rounded w-full" />
        <div className="h-4 bg-muted rounded w-2/3" />
        <div className="mt-auto space-y-2">
          <div className="h-3 bg-muted rounded w-1/3" />
          <div className="h-3 bg-muted rounded w-1/2" />
        </div>
      </div>
    </div>
  );
}
