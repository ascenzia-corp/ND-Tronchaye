import { ZoomIn } from 'lucide-react';
import type { Photo } from '@/types';

interface PhotoGridProps {
  photos: Photo[];
  onPhotoClick: (index: number) => void;
}

export default function PhotoGrid({ photos, onPhotoClick }: PhotoGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
      {photos.map((photo, index) => (
        <button
          key={photo.id}
          onClick={() => onPhotoClick(index)}
          className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-muted focus:outline-none focus:ring-2 focus:ring-sanctuary-accent focus:ring-offset-2"
          aria-label={`Voir ${photo.alt}`}
        >
          <img
            src={photo.url}
            alt={photo.alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
            <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          {/* Caption on hover */}
          {(photo.caption || photo.alt) && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-xs text-center truncate">
                {photo.caption || photo.alt}
              </p>
            </div>
          )}
        </button>
      ))}
    </div>
  );
}

export function PhotoGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="aspect-[4/3] rounded-lg bg-muted animate-pulse" />
      ))}
    </div>
  );
}
