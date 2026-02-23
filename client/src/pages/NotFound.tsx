import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Church, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page non trouvée | Sanctuaire Notre Dame de la Tronchaye';
  }, []);

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-sanctuary-subtle">
      <div className="text-center px-4 max-w-md">
        <Church className="h-16 w-16 text-sanctuary-accent mx-auto mb-6" />
        <h1 className="text-6xl font-serif font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
          Page non trouvée
        </h2>
        <p className="text-muted-foreground mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée.
          Peut-être pouvons-nous vous guider vers le sanctuaire.
        </p>
        <Button asChild variant="accent" size="lg">
          <Link to="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour à l'accueil
          </Link>
        </Button>
      </div>
    </div>
  );
}
