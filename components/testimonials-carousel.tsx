'use client';

import * as React from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { Testimonial } from '@/lib/content';

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            'h-4 w-4',
            i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground/30'
          )}
        />
      ))}
    </div>
  );
}

function initials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('');
}

export function TestimonialsCarousel({
  testimonials,
  autoPlay = true,
}: {
  testimonials: Testimonial[];
  autoPlay?: boolean;
}) {
  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(1);
  const count = testimonials.length;

  const go = React.useCallback(
    (dir: number) => {
      setDirection(dir);
      setIndex((i) => (i + dir + count) % count);
    },
    [count]
  );

  React.useEffect(() => {
    if (!autoPlay) return;
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, [autoPlay, go]);

  const t = testimonials[index];

  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="glass relative overflow-hidden rounded-3xl p-8 sm:p-12">
        <Quote className="absolute right-8 top-8 h-16 w-16 text-primary/10" />
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
            transition={{ duration: 0.4 }}
          >
            <Stars rating={t.rating} />
            <p className="mt-5 text-lg leading-relaxed text-foreground/90 sm:text-xl">
              “{t.text}”
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-primary to-accent font-bold text-white">
                {initials(t.name)}
              </div>
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-muted-foreground">
                  {t.role} · {t.country}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-center gap-3">
        <Button variant="outline" size="icon" onClick={() => go(-1)} aria-label="Previous testimonial">
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <div className="flex gap-1.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={cn(
                'h-2 rounded-full transition-all',
                i === index ? 'w-6 bg-primary' : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
              )}
            />
          ))}
        </div>
        <Button variant="outline" size="icon" onClick={() => go(1)} aria-label="Next testimonial">
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
