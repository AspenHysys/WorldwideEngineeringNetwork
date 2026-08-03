'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { Section, Eyebrow } from '@/components/section';
import { Button } from '@/components/ui/button';
import { DynamicIcon } from '@/components/dynamic-icon';
import { reasons, projects, courses } from '@/lib/content';

export function WhyChooseUs() {
  return (
    <Section id="why" className="bg-muted/30">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Why Choose Us</Eyebrow>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Built for engineers who want to <span className="text-gradient">stand out</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Everything you need to go from beginner to job-ready process simulation expert.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, i) => (
          <Reveal key={r.title} delay={i * 0.05}>
            <div className="group h-full rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <DynamicIcon name={r.icon} className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Projects() {
  return (
    <Section id="projects">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Industrial Projects</Eyebrow>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Learn by building <span className="text-gradient">real plants</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Every project is based on real industrial data and workflows used in oil &amp; gas,
          petrochemical, and energy companies.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.04}>
            <div className="group relative h-full overflow-hidden rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="absolute right-4 top-4 rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
                {p.tag}
              </div>
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary">
                <DynamicIcon name={p.icon} className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function FeaturedCourses() {
  return (
    <Section id="featured-courses" className="bg-muted/30">
      <div className="flex flex-col items-end justify-between gap-4 sm:flex-row">
        <div className="max-w-2xl">
          <Eyebrow>Courses</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Master the skills that <span className="text-gradient">get you hired</span>
          </h2>
        </div>
        <Button asChild variant="outline">
          <Link href="/courses">
            View all courses
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.slice(0, 3).map((c, i) => (
          <Reveal key={c.title} delay={i * 0.06}>
            <div className="group flex h-full flex-col rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <DynamicIcon name={c.icon} className="h-6 w-6" />
              </div>
              <div className="mb-2 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-semibold text-primary">
                  {c.level}
                </span>
                <span className="rounded-full bg-muted px-2.5 py-0.5 font-medium text-muted-foreground">
                  {c.duration}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {c.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {c.topics.slice(0, 4).map((t) => (
                  <span key={t} className="rounded-md bg-muted px-2 py-0.5 text-[11px] text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
