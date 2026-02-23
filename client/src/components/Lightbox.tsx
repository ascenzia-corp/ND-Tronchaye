import { useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { Photo } from '@/types';

interface LightboxProps {
  photos: Photo[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ photos, currentIndex, onClose, onNavigate }: LightboxProps) {
  const photo = photos[currentIndex];

  const goNext = useCallback(() => {
    onNavigate((currentIndex + 1) % photos.length);
  }, [currentIndex, photos.length, onNavigate]);

  const goPrev = useCallback(() => {
    onNavigate((currentIndex - 1 + photos.length) % photos.length);
  }, [currentIndex, photos.length, onNavigate]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    }
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, goNext, goPrev]);

  if (!photo) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center" role="dialog" aria-label="Visionneuse de photos">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/80 hover:text-white z-10 p-2"
        aria-label="Fermer"
      >
        <X className="h-8 w-8" />
      </button>

      {/* Previous */}
      <button
        onClick={goPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white z-10 p-2 transition-colors"
        aria-label="Photo précédente"
      >
        <ChevronLeft className="h-10 w-10" />
      </button>

      {/* Image */}
      <div className="max-w-[90vw] max-h-[85vh] flex flex-col items-center">
        <img
          src={photo.url}
          alt={photo.alt}
          className="max-w-full max-h-[80vh] object-contain rounded"
        />
        {(photo.caption || photo.alt) && (
          <p className="text-white/80 text-sm mt-3 text-center italic">
            {photo.caption || photo.alt}
          </p>
        )}
        <p className="text-white/50 text-xs mt-1">
          {currentIndex + 1} / {photos.length}
        </p>
      </div>

      {/* Next */}
      <button
        onClick={goNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white z-10 p-2 transition-colors"
        aria-label="Photo suivante"
      >
        <ChevronRight className="h-10 w-10" />
      </button>
    </div>
  );
}
