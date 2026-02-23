import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SacrementLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  backgroundImage?: string;
}

export default function SacrementLayout({
  title,
  subtitle,
  children,
  backgroundImage,
}: SacrementLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Banner */}
      <div className="relative h-64 md:h-80 pt-20 md:pt-24 flex items-center justify-center overflow-hidden">
        {backgroundImage ? (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <div className="absolute inset-0 bg-primary/70" />
          </div>
        ) : (
          <div className="absolute inset-0 bg-primary" />
        )}

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-tight mb-3">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-sans">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {children}

        {/* Back link */}
        <div className="mt-12 pt-8 border-t border-border">
          <Link to="/">
            <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              Retour à l'accueil
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
