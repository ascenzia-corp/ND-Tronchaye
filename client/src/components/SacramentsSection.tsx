import { Link } from 'react-router-dom';
import { Droplets, HeartHandshake, Wheat, Flame, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const sacraments = [
  {
    title: 'Baptême',
    description: 'Porter de l\'eau vive et renaître en Christ par le sacrement du Baptême.',
    icon: Droplets,
    href: '/sacrement/bapteme',
  },
  {
    title: 'Confession',
    description: 'Recevoir le pardon de Dieu dans le sacrement de la réconciliation.',
    icon: HeartHandshake,
    href: '/sacrement/confession',
  },
  {
    title: 'Communion',
    description: 'Recevoir le Corps et le Sang du Christ dans l\'Eucharistie.',
    icon: Wheat,
    href: '/sacrement/communion',
  },
  {
    title: 'Confirmation',
    description: 'Recevoir le sceau de l\'Esprit Saint pour fortifier sa foi.',
    icon: Flame,
    href: '/sacrement/confirmation',
  },
  {
    title: 'Mariage',
    description: 'S\'engager devant Dieu dans l\'amour fidèle et indissoluble.',
    icon: Heart,
    href: '/sacrement/mariage',
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {sacraments.map((sacrement) => (
            <Link key={sacrement.href} to={sacrement.href}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-200 group cursor-pointer border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-sanctuary-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-sanctuary-accent/20 transition-colors">
                    <sacrement.icon className="h-7 w-7 text-sanctuary-accent" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    {sacrement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {sacrement.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
