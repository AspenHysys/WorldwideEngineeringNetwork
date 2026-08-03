'use client';

import * as React from 'react';
import { Star, Quote } from 'lucide-react';
import { Section, Eyebrow } from '@/components/section';
import { Reveal } from '@/components/reveal';
import { TestimonialsCarousel } from '@/components/testimonials-carousel';
import { testimonials } from '@/lib/content';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function initials(name: string) {
  return name.split(' ').map((n) => n[0]).slice(0, 2).join('');
}

export default function TestimonialsPage() {
  const allReviews = [...testimonials];
  const avg = (allReviews.reduce((s, t) => s + t.rating, 0) / allReviews.length).toFixed(1);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-12 sm:pt-40">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Eyebrow>Testimonials</Eyebrow>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Loved by engineers <span className="text-gradient">worldwide</span>
          </h1>
          <div className="mt-5 flex items-center justify-center gap-3">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-muted-foreground">
              <strong className="text-foreground">{avg}/5</strong> from {allReviews.length}+ reviews
            </span>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <Section className="pt-4">
        <TestimonialsCarousel testimonials={allReviews} />
      </Section>

      {/* Contact CTA */}
      <Section className="py-10">
        <Reveal>
          <div className="mx-auto max-w-2xl rounded-2xl glass p-8 text-center">
            <Star className="mx-auto h-10 w-10 fill-yellow-400 text-yellow-400" />
            <h2 className="mt-3 font-display text-xl font-bold">Want to learn from these engineers?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Join our academy and become the next success story. Reach out to us to get started.
            </p>
            <Button asChild className="mt-4">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </Reveal>
      </Section>

      {/* Grid of all testimonials */}
      <Section className="bg-muted/30">
        <h2 className="text-center font-display text-3xl font-bold tracking-tight sm:text-4xl">
          More success stories
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allReviews.map((t, i) => (
            <Reveal key={t.name + i} delay={(i % 3) * 0.06}>
              <div className="relative h-full rounded-2xl glass p-6">
                <Quote className="absolute right-5 top-5 h-8 w-8 text-primary/10" />
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">“{t.text}”</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-xs font-bold text-white">
                    {initials(t.name)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {t.role} · {t.country}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
