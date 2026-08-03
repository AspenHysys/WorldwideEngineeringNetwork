import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, PlayCircle, BookOpen, Layers } from 'lucide-react';
import { Section, Eyebrow } from '@/components/section';
import { Reveal } from '@/components/reveal';
import { Button } from '@/components/ui/button';
import { DynamicIcon } from '@/components/dynamic-icon';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { courses, curriculum } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Courses',
  description:
    'Explore Aspen HYSYS courses — from the Complete Masterclass to specialized modules on LNG, refinery, heat exchangers, and reactor simulation. 30+ industrial projects included.',
};

export default function CoursesPage() {
  const masterclass = courses[0];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-12 sm:pt-40">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Eyebrow>Courses</Eyebrow>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Master <span className="text-gradient">Aspen HYSYS</span>, one project at a time
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            From your first simulation to advanced industrial plant modeling — choose the course
            that fits your goals.
          </p>
        </div>
      </section>

      {/* Course cards */}
      <Section className="pt-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
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
                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <PlayCircle className="h-3.5 w-3.5" /> {c.lessons} lessons
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {c.duration}
                  </span>
                </div>
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

      {/* Masterclass curriculum */}
      <Section className="bg-muted/30">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left: overview */}
          <div>
            <Eyebrow>Flagship Course</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {masterclass.title}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{masterclass.description}</p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl glass p-4">
                <Clock className="h-5 w-5 text-primary" />
                <div className="mt-2 font-display text-xl font-bold">{masterclass.duration}</div>
                <div className="text-xs text-muted-foreground">of video content</div>
              </div>
              <div className="rounded-xl glass p-4">
                <PlayCircle className="h-5 w-5 text-primary" />
                <div className="mt-2 font-display text-xl font-bold">{masterclass.lessons}+</div>
                <div className="text-xs text-muted-foreground">lessons</div>
              </div>
              <div className="rounded-xl glass p-4">
                <Layers className="h-5 w-5 text-primary" />
                <div className="mt-2 font-display text-xl font-bold">30+</div>
                <div className="text-xs text-muted-foreground">projects</div>
              </div>
              <div className="rounded-xl glass p-4">
                <BookOpen className="h-5 w-5 text-primary" />
                <div className="mt-2 font-display text-xl font-bold">Lifetime</div>
                <div className="text-xs text-muted-foreground">access</div>
              </div>
            </div>

            <Button asChild className="mt-8">
              <Link href="/pricing">
                Enroll in the Masterclass
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Right: expandable curriculum */}
          <div>
            <h3 className="mb-4 font-display text-xl font-semibold">Full Curriculum</h3>
            <Accordion
              type="single"
              collapsible
              defaultValue="Getting Started"
              className="glass rounded-2xl p-4"
            >
              {curriculum.map((mod) => (
                <AccordionItem key={mod.title} value={mod.title}>
                  <AccordionTrigger className="text-base font-medium">
                    {mod.title}
                    <span className="ml-2 text-xs font-normal text-muted-foreground">
                      ({mod.lessons.length} lessons)
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2">
                      {mod.lessons.map((lesson) => (
                        <li key={lesson} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="grid h-5 w-5 place-items-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">
                            ▶
                          </span>
                          {lesson}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Section>
    </>
  );
}
