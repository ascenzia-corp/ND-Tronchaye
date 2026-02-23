import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getEvents } from '@/lib/api';
import { formatDate } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import type { Event } from '@/types';

export default function EventsCalendar() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const ref = useScrollAnimation();

  useEffect(() => {
    getEvents()
      .then(setEvents)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="evenements" className="py-20 md:py-28" style={{ backgroundColor: 'hsl(var(--stone))' }}>
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Calendar className="h-10 w-10 text-sanctuary-accent mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Événements à venir
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Messes solennelles, pardons, veillées de prière et temps forts spirituels au sanctuaire.
          </p>
        </div>

        {loading ? (
          <div className="text-center text-muted-foreground py-8">Chargement des événements...</div>
        ) : events.length === 0 ? (
          <div className="text-center text-muted-foreground py-8">Aucun événement à venir pour le moment.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {events.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-serif text-xl font-semibold text-foreground pr-2">
                      {event.title}
                    </h3>
                    {event.isSpecial && (
                      <Badge variant="burgundy" className="shrink-0 flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        Temps fort
                      </Badge>
                    )}
                  </div>

                  <div className="flex flex-col gap-2 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-sanctuary-accent" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-sanctuary-accent" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-sanctuary-accent" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {event.description}
                  </p>

                  <Button asChild variant="outline" size="sm">
                    <Link to={`/event/${event.id}`}>Voir le détail</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
