import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { getPhotos } from '@/lib/api';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import type { Photo } from '@/types';

export default function Gallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const sectionRef = useScrollAnimation();

  useEffect(() => {
    getPhotos().then(setPhotos).catch(console.error);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  if (photos.length === 0) return null;

  return (
    <section className="py-20 md:py-28 bg-white">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Camera className="h-10 w-10 text-sanctuary-accent mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Galerie photos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez le sanctuaire à travers ces photographies.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel */}
          <div className="overflow-hidden rounded-lg" ref={emblaRef}>
            <div className="flex">
              {photos.map((photo) => (
                <div key={photo.id} className="flex-[0_0_100%] min-w-0 px-2">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                    <img
                      src={photo.url}
                      alt={photo.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  {(photo.caption || photo.alt) && (
                    <p className="text-center text-sm text-muted-foreground mt-3 italic">
                      {photo.caption || photo.alt}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow-lg flex items-center justify-center transition-colors z-10"
            aria-label="Photo précédente"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow-lg flex items-center justify-center transition-colors z-10"
            aria-label="Photo suivante"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === selectedIndex ? 'bg-sanctuary-accent' : 'bg-border'
                }`}
                aria-label={`Photo ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
