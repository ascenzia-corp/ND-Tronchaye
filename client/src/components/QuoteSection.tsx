import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function QuoteSection() {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 md:py-28 bg-primary">
      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <blockquote className="mb-6">
          <p className="text-xl md:text-2xl lg:text-3xl font-serif italic text-sanctuary-light leading-relaxed">
            &laquo;&nbsp;Notre Dame de la Tronchaye, dans sa bienveillance maternelle,
            nous accueille et nous guide vers son fils Jésus Christ.&nbsp;&raquo;
          </p>
        </blockquote>
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-sanctuary-accent/40" />
          <p className="text-sanctuary-accent font-sans text-sm font-medium">
            Abbé Patience Bondeko, recteur du sanctuaire
          </p>
          <div className="h-px w-12 bg-sanctuary-accent/40" />
        </div>
      </div>
    </section>
  );
}
