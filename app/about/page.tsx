import type { Metadata } from 'next';
import Link from 'next/link';
import { GraduationCap, Award, BookOpen, Users, Target, Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Section, Eyebrow } from '@/components/section';
import { Reveal } from '@/components/reveal';
import { Button } from '@/components/ui/button';
import { stats } from '@/lib/content';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet the instructor behind Aspen HYSYS Academy — a chemical engineer and process simulation specialist on a mission to help engineers build careers in process simulation.',
};

const credentials = [
  'Chemical Engineer (B.Sc. & M.Sc.)',
  'Process Simulation Specialist',
  'Industry Trainer & Consultant',
  '12+ years of industrial experience',
  'Worked across oil & gas, LNG, refinery, and petrochemicals',
  'Trained 1000+ engineers worldwide',
];

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    text: 'Helping engineers build careers in process simulation by making industrial-grade training accessible, practical, and affordable.',
  },
  {
    icon: GraduationCap,
    title: 'Our Approach',
    text: 'Learn by doing. Every concept is paired with a hands-on project so you build a portfolio you can show employers.',
  },
  {
    icon: Users,
    title: 'Our Community',
    text: 'A global network of engineers, alumni, and mentors who support each other long after the course ends.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Eyebrow>About Us</Eyebrow>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Meet your <span className="text-gradient">instructor</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            A passionate educator and industry veteran on a mission to train the next
            generation of process engineers.
          </p>
        </div>
      </section>

      {/* Instructor */}
      <Section className="pt-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Placeholder portrait */}
          <Reveal>
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl glass p-2">
                <div className="flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 via-muted to-accent/10">
                  <div className="text-center">
                    <div className="mx-auto grid h-28 w-28 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-4xl font-bold text-white">
                      AH
                    </div>
                    <p className="mt-4 font-display text-lg font-semibold">Lead Instructor</p>
                    <p className="text-sm text-muted-foreground">Process Simulation Specialist</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Bio */}
          <Reveal delay={0.1}>
            <div>
              <h2 className="font-display text-2xl font-bold sm:text-3xl">
                Chemical Engineer. Process Simulation Specialist. Industry Trainer.
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                With over 12 years of industrial experience across the oil &amp; gas, LNG,
                refinery, and petrochemical sectors, our lead instructor has designed and
                simulated some of the most complex process plants in the industry. As a
                passionate educator, he has trained more than 1000 engineers — from fresh
                graduates to senior professionals — helping them master Aspen HYSYS and
                accelerate their careers.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                His teaching philosophy is simple: <strong className="text-foreground">learn by doing</strong>.
                Every lesson is grounded in real industrial scenarios, so students don&apos;t just
                understand the software — they learn how to think like a process engineer.
              </p>

              <ul className="mt-6 space-y-3">
                {credentials.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="/courses">
                    Explore Courses
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Stats band */}
      <Section className="py-12">
        <div className="grid grid-cols-2 gap-4 rounded-2xl glass p-8 sm:grid-cols-5">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-2xl font-bold sm:text-3xl">{s.value}</div>
              <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>What drives us</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            More than just a course
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl glass p-6">
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Mini CTA */}
      <Section>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent p-10 text-center text-white sm:p-14">
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="relative">
              <Briefcase className="mx-auto h-10 w-10" />
              <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
                Ready to build your career in process simulation?
              </h2>
              <Button asChild size="lg" variant="secondary" className="mt-6">
                <Link href="/pricing">
                  Enroll Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
