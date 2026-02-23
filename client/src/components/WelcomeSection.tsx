import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function WelcomeSection() {
  const ref = useScrollAnimation();

  return (
    <section id="bienvenue" className="py-20 md:py-28 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <Badge variant="accent" className="mb-4 text-sanctuary-accent bg-sanctuary-accent/20 border-sanctuary-accent/30">
              Bienvenue
            </Badge>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6 leading-tight">
              Un lieu chargé d'histoire et de spiritualité
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Niché au c&oelig;ur du village médiéval de Rochefort-en-Terre, le Sanctuaire Notre-Dame de la Tronchaye
              est un haut lieu de pèlerinage breton depuis le Moyen Âge. Classé Monument Historique depuis 1931,
              il abrite la statue miraculeuse de la Vierge allaitante, découverte dans le creux d'un arbre
              après les invasions normandes.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Lieu de prière, de silence et de rencontre avec Dieu, le sanctuaire accueille pèlerins et visiteurs
              tout au long de l'année pour les offices liturgiques, les sacrements et les grands pardons bretons.
            </p>
            <Button asChild variant="accent">
              <Link to="/histoire">Découvrir son histoire</Link>
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="/images/IMG_9315.webp"
              alt="Intérieur du sanctuaire — nef et retable"
              className="w-full rounded-lg shadow-xl object-cover aspect-[4/3]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
