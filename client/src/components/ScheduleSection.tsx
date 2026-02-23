import { useState, useEffect } from 'react';
import { Church, HandHelping, Calendar } from 'lucide-react';
import { getSpecialEvents } from '@/lib/api';
import { formatDate } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import type { Event } from '@/types';

const massSchedule = [
  { day: 'Dimanche', time: '11h00' },
  { day: 'Mardi', time: '9h00' },
  { day: 'Mercredi', time: '9h00' },
  { day: 'Jeudi', time: '18h00' },
  { day: 'Vendredi', time: '9h00' },
  { day: 'Samedi', time: '9h00' },
];

export default function ScheduleSection() {
  const [specialEvents, setSpecialEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const ref = useScrollAnimation();

  useEffect(() => {
    getSpecialEvents()
      .then(setSpecialEvents)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="horaires" className="py-20 md:py-28" style={{ backgroundColor: 'hsl(var(--stone))' }}>
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Horaires et célébrations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Le sanctuaire célèbre la Sainte Messe plusieurs fois par semaine. Tous sont les bienvenus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
          {/* Left: Regular masses */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="bg-primary text-white px-6 py-4 flex items-center gap-3">
              <Church className="h-5 w-5" />
              <h3 className="font-serif text-lg font-semibold">Messes régulières</h3>
            </div>
            <div className="p-6">
              <div className="space-y-0">
                {massSchedule.map((item, i) => (
                  <div
                    key={item.day}
                    className={`flex items-center justify-between py-3 ${i < massSchedule.length - 1 ? 'border-b border-gray-200' : ''}`}
                  >
                    <span className="font-semibold text-foreground">{item.day}</span>
                    <span className="bg-stone-100 text-foreground font-medium px-3 py-1 rounded-full text-sm">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Confessions & Adorations */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="bg-secondary text-white px-6 py-4 flex items-center gap-3">
              <HandHelping className="h-5 w-5" />
              <h3 className="font-serif text-lg font-semibold">Confessions & Adorations</h3>
            </div>
            <div className="p-6 space-y-6">
              {/* Confessions */}
              <div>
                <h4 className="font-semibold text-foreground mb-2">Confessions</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Tous les jours, avant et après la Sainte Messe, ou sur rendez-vous avec le Père Recteur.
                </p>
              </div>

              {/* Adorations */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">Adorations eucharistiques</h4>
                <div className="space-y-0">
                  <div className="flex items-center justify-between py-2.5 border-b border-gray-200">
                    <span className="text-sm text-foreground font-medium">Jeudi</span>
                    <span className="text-sm text-muted-foreground">Après la messe de 18h00</span>
                  </div>
                  <div className="flex items-center justify-between py-2.5 border-b border-gray-200">
                    <span className="text-sm text-foreground font-medium">Nuit d'adoration</span>
                    <span className="text-sm text-muted-foreground">1er vendredi du mois, 21h — 6h</span>
                  </div>
                  <div className="flex items-center justify-between py-2.5">
                    <span className="text-sm text-foreground font-medium">Chapelet</span>
                    <span className="text-sm text-muted-foreground">Tous les jours, 15h00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Special events table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden max-w-5xl mx-auto">
          <div className="px-6 py-4 flex items-center gap-3" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--primary))' }}>
            <Calendar className="h-5 w-5" />
            <h3 className="font-serif text-lg font-semibold">Événements spéciaux</h3>
          </div>
          <div className="p-6">
            {loading ? (
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-4 animate-pulse">
                    <div className="h-4 bg-muted rounded w-24" />
                    <div className="h-4 bg-muted rounded flex-1" />
                    <div className="h-4 bg-muted rounded w-16" />
                  </div>
                ))}
              </div>
            ) : specialEvents.length === 0 ? (
              <p className="text-muted-foreground text-sm text-center py-4">
                Aucun événement spécial programmé pour le moment.
              </p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 pr-4 text-sm font-semibold text-foreground">Date</th>
                      <th className="text-left py-2 pr-4 text-sm font-semibold text-foreground">Événement</th>
                      <th className="text-left py-2 text-sm font-semibold text-foreground">Heure</th>
                    </tr>
                  </thead>
                  <tbody>
                    {specialEvents.map((event) => (
                      <tr key={event.id} className="border-b last:border-0">
                        <td className="py-3 pr-4 text-sm text-muted-foreground whitespace-nowrap">
                          {formatDate(event.date)}
                        </td>
                        <td className="py-3 pr-4 text-sm font-medium text-foreground">
                          {event.title}
                        </td>
                        <td className="py-3 text-sm text-muted-foreground whitespace-nowrap">
                          {event.time}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
