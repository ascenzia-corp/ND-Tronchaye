import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EventCard, { EventCardSkeleton } from '@/components/EventCard';
import { getEvents } from '@/lib/api';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import type { Event } from '@/types';

export default function EventsCalendar() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const ref = useScrollAnimation();

  useEffect(() => {
    getEvents()
      .then((data) => setEvents(data.slice(0, 3)))
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3].map((i) => (
              <EventCardSkeleton key={i} />
            ))}
          </div>
        ) : events.length === 0 ? (
          <div className="text-center text-muted-foreground py-8">
            Aucun événement à venir pour le moment.
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>

            <div className="text-center mt-10">
              <Button asChild variant="outline" size="lg">
                <Link to="/evenements" className="gap-2">
                  Voir tous les événements <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
