import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EventCard, { EventCardSkeleton } from '@/components/EventCard';
import { getEvents } from '@/lib/api';
import type { Event, EventType } from '@/types';

const filterTabs: { label: string; value: EventType | 'all' }[] = [
  { label: 'Tous', value: 'all' },
  { label: 'Régulier', value: 'regular' },
  { label: 'Spécial', value: 'special' },
  { label: 'Liturgique', value: 'liturgical' },
  { label: 'Culturel', value: 'cultural' },
];

export default function Evenements() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<EventType | 'all'>('all');

  useEffect(() => {
    document.title = 'Événements | Sanctuaire Notre Dame de la Tronchaye';
  }, []);

  useEffect(() => {
    getEvents()
      .then(setEvents)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const now = new Date();
  const upcomingEvents = events
    .filter((e) => new Date(e.date) >= new Date(now.toDateString()))
    .filter((e) => filter === 'all' || e.eventType === filter)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const pastEvents = events
    .filter((e) => new Date(e.date) < new Date(now.toDateString()))
    .filter((e) => filter === 'all' || e.eventType === filter)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <Calendar className="h-10 w-10 text-sanctuary-accent mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Événements
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Retrouvez tous les événements du sanctuaire : messes solennelles, pardons, veillées et temps forts spirituels.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filterTabs.map((tab) => (
            <Button
              key={tab.value}
              variant={filter === tab.value ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter(tab.value)}
            >
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Events */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <EventCardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <>
            {/* Upcoming */}
            {upcomingEvents.length > 0 && (
              <div className="mb-16">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                  À venir
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {upcomingEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              </div>
            )}

            {/* Past */}
            {pastEvents.length > 0 && (
              <div>
                <h2 className="text-2xl font-serif font-bold text-muted-foreground mb-6">
                  Événements passés
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-60">
                  {pastEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              </div>
            )}

            {upcomingEvents.length === 0 && pastEvents.length === 0 && (
              <div className="text-center text-muted-foreground py-12">
                Aucun événement trouvé.
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
