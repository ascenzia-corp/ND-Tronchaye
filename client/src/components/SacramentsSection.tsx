import { Droplets, HeartHandshake, Wheat, Flame, Heart, Hand } from 'lucide-react';
import SacramentCard from '@/components/SacramentCard';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const sacraments = [
  {
    title: 'Baptême',
    description: "Porter de l'eau vive et renaître en Christ par le sacrement du Baptême.",
    icon: Droplets,
    href: '/sacrement/bapteme',
    image: '/images/sacrements/bapteme.webp',
  },
  {
    title: 'Confession',
    description: 'Recevoir le pardon de Dieu dans le sacrement de la réconciliation.',
    icon: HeartHandshake,
    href: '/sacrement/confession',
    image: '/images/sacrements/confession.webp',
  },
  {
    title: 'Communion',
    description: "Recevoir le Corps et le Sang du Christ dans l'Eucharistie.",
    icon: Wheat,
    href: '/sacrement/communion',
    image: '/images/sacrements/communion.webp',
  },
  {
    title: 'Confirmation',
    description: "Recevoir le sceau de l'Esprit Saint pour fortifier sa foi.",
    icon: Flame,
    href: '/sacrement/confirmation',
    image: '/images/sacrements/confirmation.webp',
  },
  {
    title: 'Mariage',
    description: "S'engager devant Dieu dans l'amour fidèle et indissoluble.",
    icon: Heart,
    href: '/sacrement/mariage',
    image: '/images/sacrements/mariage.webp',
  },
  {
    title: 'Onction des malades',
    description: 'Recevoir la grâce de Dieu dans la maladie et la souffrance.',
    icon: Hand,
    href: '/sacrement/onction',
    image: '/images/sacrements/onction.webp',
  },
];

export default function SacramentsSection() {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Les Sacrements
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            L'Église offre sept sacrements, signes visibles de la grâce de Dieu.
            Découvrez comment vous préparer et les recevoir au sanctuaire.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sacraments.map((sacrement) => (
            <SacramentCard key={sacrement.href} {...sacrement} />
          ))}
        </div>
      </div>
    </section>
  );
}
