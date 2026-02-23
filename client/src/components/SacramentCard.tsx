import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

interface SacramentCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  image: string;
}

export default function SacramentCard({ title, description, icon: Icon, href, image }: SacramentCardProps) {
  return (
    <Link to={href} className="group block">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-border/50 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 h-full flex flex-col">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          {/* Icon overlay */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center z-10">
            <div className="w-10 h-10 rounded-full bg-sanctuary-accent/10 flex items-center justify-center">
              <Icon className="h-5 w-5 text-sanctuary-accent" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 pt-8 text-center flex-1 flex flex-col">
          <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed flex-1">
            {description}
          </p>
          <span className="inline-flex items-center gap-1 text-sm text-sanctuary-accent font-medium mt-3 group-hover:gap-2 transition-all">
            En savoir plus <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
