import { Clock, Church } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const weeklySchedule = [
  { day: 'Mardi', time: '9h00' },
  { day: 'Mercredi', time: '9h00' },
  { day: 'Jeudi', time: '18h00', note: 'Messe suivie de l\'adoration eucharistique' },
  { day: 'Vendredi', time: '9h00' },
  { day: 'Samedi', time: '9h00' },
  { day: 'Dimanche', time: 'À confirmer' },
];

export default function MassSchedule() {
  const ref = useScrollAnimation();

  return (
    <section id="horaires" className="py-20 md:py-28" style={{ backgroundColor: 'hsl(var(--stone))' }}>
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Church className="h-10 w-10 text-sanctuary-accent mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Horaires des messes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Le sanctuaire célèbre la Sainte Messe plusieurs fois par semaine.
            Tous sont les bienvenus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Weekly masses */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5 text-sanctuary-accent" />
              Messes hebdomadaires
            </h3>
            <div className="space-y-3">
              {weeklySchedule.map((item) => (
                <div key={item.day} className="flex justify-between items-start py-2 border-b border-border last:border-0">
                  <span className="font-medium text-foreground">{item.day}</span>
                  <div className="text-right">
                    <span className="text-sanctuary-accent font-semibold">{item.time}</span>
                    {item.note && (
                      <p className="text-xs text-muted-foreground mt-0.5">{item.note}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Opening hours */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Church className="h-5 w-5 text-sanctuary-accent" />
              Horaires d'ouverture
            </h3>
            <div className="space-y-4">
              <div className="py-2 border-b border-border">
                <p className="font-medium text-foreground">De Pâques à fin septembre</p>
                <p className="text-sanctuary-accent font-semibold mt-1">9h — 19h</p>
              </div>
              <div className="py-2 border-b border-border">
                <p className="font-medium text-foreground">Le reste de l'année</p>
                <p className="text-sanctuary-accent font-semibold mt-1">10h — 18h</p>
              </div>
              <p className="text-sm text-muted-foreground italic">
                Pas de visite touristique pendant les offices
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
