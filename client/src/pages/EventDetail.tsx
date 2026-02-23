import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, ArrowLeft, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getEvent } from '@/lib/api';
import { formatDate } from '@/lib/utils';
import type { Event } from '@/types';

export default function EventDetail() {
  const { eventId } = useParams<{ eventId: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!eventId) return;
    getEvent(Number(eventId))
      .then((data) => {
        setEvent(data);
        document.title = `${data.title} | Sanctuaire Notre Dame de la Tronchaye`;
      })
      .catch(() => setError('Événement non trouvé'))
      .finally(() => setLoading(false));
  }, [eventId]);

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <p className="text-muted-foreground">Chargement...</p>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="min-h-screen pt-24 flex flex-col items-center justify-center gap-4">
        <p className="text-muted-foreground">{error || 'Événement non trouvé'}</p>
        <Button asChild variant="outline">
          <Link to="/">Retour à l'accueil</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Button asChild variant="ghost" className="mb-6 -ml-2">
          <Link to="/#evenements">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux événements
          </Link>
        </Button>

        <article>
          <div className="flex items-start gap-3 mb-4">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              {event.title}
            </h1>
            {event.isSpecial && (
              <Badge variant="burgundy" className="shrink-0 flex items-center gap-1 mt-2">
                <Star className="h-3 w-3" />
                Temps fort
              </Badge>
            )}
          </div>

          <div className="flex flex-wrap gap-4 mb-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-sanctuary-accent" />
              <span>{formatDate(event.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-sanctuary-accent" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-sanctuary-accent" />
              <span>{event.location}</span>
            </div>
          </div>

          {event.imageUrl && (
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full rounded-lg shadow-md mb-8 object-cover aspect-[16/9]"
              loading="lazy"
            />
          )}

          <div className="prose prose-lg max-w-none">
            <p className="text-foreground leading-relaxed whitespace-pre-line">
              {event.description}
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
