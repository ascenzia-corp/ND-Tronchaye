import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation */}
          <div>
            <h3 className="text-sanctuary-accent font-serif text-lg font-semibold mb-4">Navigation</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">
                Accueil
              </Link>
              <Link to="/histoire" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">
                Histoire
              </Link>
              <Link to="/sacrement/bapteme" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">
                Sacrements
              </Link>
              <Link to="/evenements" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">
                Événements
              </Link>
              <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">
                Contact
              </Link>
              <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">
                À propos
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sanctuary-accent font-serif text-lg font-semibold mb-4">Contact</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-sanctuary-accent shrink-0" />
                <p className="text-sm text-primary-foreground/80">
                  Place de l'Église<br />56220 Rochefort-en-Terre
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-sanctuary-accent shrink-0" />
                <a href="tel:0297433150" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">
                  02 97 43 31 50
                </a>
              </div>
              <p className="text-sm text-primary-foreground/80">
                Recteur : Père Patience-Aimé Bondeko
              </p>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-sanctuary-accent font-serif text-lg font-semibold mb-4">Horaires</h3>
            <div className="flex items-start gap-2">
              <Clock className="h-4 w-4 mt-0.5 text-sanctuary-accent shrink-0" />
              <div className="text-sm text-primary-foreground/80">
                <p className="mb-1">Pâques → fin sept. : 9h — 19h</p>
                <p className="mb-1">Oct. → Pâques : 10h — 18h</p>
                <p className="text-xs text-primary-foreground/60 mt-2">
                  Pas de visite touristique pendant les offices
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-xs text-primary-foreground/60">
              &copy; 2025 Sanctuaire Notre-Dame de la Tronchaye — Rochefort-en-Terre
            </p>
            <p className="text-xs text-primary-foreground/60">
              Diocèse de Vannes
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
