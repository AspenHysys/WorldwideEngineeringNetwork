import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Star, ArrowRight, ShieldCheck } from 'lucide-react';
import { Section, Eyebrow } from '@/components/section';
import { Reveal } from '@/components/reveal';
import { Button } from '@/components/ui/button';
import { plans } from '@/lib/content';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Simple one-time pricing for Aspen HYSYS Academy. Choose Basic, Professional, or Premium — all with lifetime access and a completion certificate. 14-day money-back guarantee.',
};

const comparison = [
  { feature: 'Full recorded course', basic: true, intermediate: true, advanced: true },
  { feature: 'Lifetime access', basic: true, intermediate: true, advanced: true },
  { feature: 'Basic courses', basic: true, intermediate: true, advanced: true },
  { feature: 'Community access', basic: true, intermediate: true, advanced: true },
  { feature: 'Limited access to software', basic: true, intermediate: false, advanced: false },
  { feature: 'Live interactive classes', basic: false, intermediate: true, advanced: true },
  { feature: 'Assignments with feedback', basic: false, intermediate: true, advanced: true },
  { feature: 'Priority community support', basic: false, intermediate: true, advanced: true },
  { feature: 'Natural Gas Processing course', basic: false, intermediate: true, advanced: true },
  { feature: 'Heat Exchanger Design course', basic: false, intermediate: true, advanced: true },
  { feature: 'Reactor Simulation course', basic: false, intermediate: true, advanced: true },
  { feature: '1-on-1 mentoring sessions', basic: false, intermediate: false, advanced: true },
  { feature: 'Career guidance & coaching', basic: false, intermediate: false, advanced: true },
  { feature: 'Interview preparation', basic: false, intermediate: false, advanced: true },
  { feature: 'Resume review & optimization', basic: false, intermediate: false, advanced: true },
  { feature: 'Direct instructor access', basic: false, intermediate: false, advanced: true },
  { feature: 'Lifetime access to Aspen HYSYS software', basic: false, intermediate: false, advanced: true },
  { feature: 'LNG Plant Simulation course', basic: false, intermediate: false, advanced: true },
  { feature: 'Refinery Simulation course', basic: false, intermediate: false, advanced: true },
  { feature: 'Aspen HYSYS Complete Masterclass', basic: false, intermediate: false, advanced: true },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-12 sm:pt-40">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Eyebrow>Pricing</Eyebrow>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            One payment. <span className="text-gradient">Lifetime access.</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            No subscriptions, no hidden fees. Pick the plan that matches your goals and start
            learning today.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            <ShieldCheck className="h-4 w-4" />
            14-day money-back guarantee
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <Section className="pt-4">
        <Reveal>
          <div className="mx-auto mb-8 flex max-w-2xl items-center justify-center gap-2 rounded-xl bg-accent/10 px-4 py-3 text-center text-sm font-medium text-accent">
            <ShieldCheck className="h-4 w-4 shrink-0" />
            Prices may vary slightly at times. For exact pricing, please contact us.
          </div>
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div
                className={cn(
                  'relative flex h-full flex-col rounded-2xl p-6 transition-all',
                  p.highlighted
                    ? 'glass glow-primary ring-2 ring-primary lg:scale-[1.03]'
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
                <ul className="mt-6 flex-1 space-y-3 text-sm">
                  {p.features.map((f) => (
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
                  <Link href={`/contact?subject=${encodeURIComponent(p.name)}`}>{p.cta}</Link>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Comparison table */}
      <Section className="bg-muted/30">
        <h2 className="text-center font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Compare plans
        </h2>
        <Reveal>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] border-separate border-spacing-0 rounded-2xl glass p-2">
              <thead>
                <tr>
                  <th className="p-4 text-left text-sm font-semibold">Feature</th>
                  <th className="p-4 text-center text-sm font-semibold">Basic</th>
                  <th className="p-4 text-center text-sm font-semibold">
                    <span className="inline-flex items-center gap-1 text-primary">
                      <Star className="h-3.5 w-3.5 fill-primary" />
                      Intermediate
                    </span>
                  </th>
                  <th className="p-4 text-center text-sm font-semibold">Advanced</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-muted/30' : ''}>
                    <td className="p-4 text-sm font-medium">{row.feature}</td>
                    {[row.basic, row.intermediate, row.advanced].map((v, j) => (
                      <td key={j} className="p-4 text-center">
                        {v ? (
                          <CheckCircle2 className="mx-auto h-5 w-5 text-accent" />
                        ) : (
                          <span className="text-muted-foreground/30">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <div className="mt-10 text-center">
          <Button asChild size="lg">
            <Link href="/contact">
              Get started today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
