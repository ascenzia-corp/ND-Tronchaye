import { ArrowDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/IMG_9328.webp)' }}
      >
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <Badge variant="accent" className="mb-6 text-sanctuary-accent bg-sanctuary-accent/20 border-sanctuary-accent/30">
          Sanctuaire catholique
        </Badge>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6">
          Notre Dame
          <br />
          <span className="text-sanctuary-accent">de la Tronchaye</span>
        </h1>

        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto font-sans">
          Un lieu de recueillement, de prière et de paix au c&oelig;ur du village médiéval de Rochefort-en-Terre.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="accent"
            size="lg"
            onClick={() => scrollTo('horaires')}
            className="text-base"
          >
            Horaires des messes
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollTo('bienvenue')}
            className="text-base border-white/30 text-white hover:bg-white/10 hover:text-white"
          >
            En savoir plus
          </Button>
        </div>
      </div>

      {/* Scroll arrow */}
      <button
        onClick={() => scrollTo('bienvenue')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors"
        aria-label="Défiler vers le bas"
      >
        <ArrowDown className="h-8 w-8 animate-soft-pulse" />
      </button>
    </section>
  );
}
