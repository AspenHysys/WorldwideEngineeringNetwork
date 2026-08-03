'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';
import { TestimonialsCarousel } from '@/components/testimonials-carousel';
import { testimonials, plans, faqs } from '@/lib/content';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { Hero } from '@/components/home/hero';
import { WhyChooseUs, Projects, FeaturedCourses } from '@/components/home/sections';
import { cn } from '@/lib/utils';

function TestimonialsPreview() {
  return (
    <Section id="testimonials-preview">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          Testimonials
        </span>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Engineers love our training
        </h2>
        <p className="mt-4 text-muted-foreground">
          Real stories from students who transformed their careers with Aspen HYSYS.
        </p>
      </div>
      <div className="mt-14">
        <TestimonialsCarousel testimonials={testimonials} />
      </div>
    </Section>
  );
}

function PricingPreview() {
  return (
    <Section id="pricing-preview" className="bg-muted/30">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          Pricing
        </span>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Simple, transparent pricing
        </h2>
        <p className="mt-4 text-muted-foreground">
          One-time payment. Lifetime access. No subscriptions, no hidden fees.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {plans.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08}>
            <div
              className={cn(
                'relative flex h-full flex-col rounded-2xl p-6 transition-all',
                p.highlighted
                  ? 'glass glow-primary ring-2 ring-primary'
                  : 'glass hover:-translate-y-1 hover:shadow-lg'
              )}
            >
              {p.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-xl font-bold">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold">{p.price}</span>
                <span className="text-sm text-muted-foreground">/{p.period}</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {p.features.slice(0, p.highlighted ? 6 : 4).map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="mt-6 w-full"
                variant={p.highlighted ? 'default' : 'outline'}
              >
                <Link href="/pricing">{p.cta}</Link>
              </Button>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function FaqPreview() {
  return (
    <Section id="faq-preview">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            FAQ
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-muted-foreground">
            Everything you need to know before enrolling. Can&apos;t find an answer? Reach out to us.
          </p>
          <Button asChild variant="outline" className="mt-6">
            <Link href="/faq">
              View all FAQs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <Accordion type="single" collapsible className="glass rounded-2xl p-6">
          {faqs.slice(0, 5).map((f) => (
            <AccordionItem key={f.question} value={f.question}>
              <AccordionTrigger className="text-left text-base font-medium">
                {f.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}

function FinalCta() {
  return (
    <Section id="cta">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent p-10 text-center text-white sm:p-16">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Start your process simulation journey today
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/90">
              Join 1000+ engineers who are building careers in oil &amp; gas, LNG, refinery, and
              chemical process design.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/pricing">
                  Enroll Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white">
                <Link href="/contact">Talk to an Advisor</Link>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <FeaturedCourses />
      <Projects />
      <TestimonialsPreview />
      <PricingPreview />
      <FaqPreview />
      <FinalCta />
    </>
  );
}
