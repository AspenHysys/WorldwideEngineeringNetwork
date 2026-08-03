import type { Metadata } from 'next';
import Link from 'next/link';
import { HelpCircle, Mail, ArrowRight } from 'lucide-react';
import { Section, Eyebrow } from '@/components/section';
import { Reveal } from '@/components/reveal';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { faqs } from '@/lib/content';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Answers to common questions about Aspen HYSYS Academy courses — prior experience, certificates, recordings, access duration, software, refunds, and more.',
};

export default function FaqPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-12 sm:pt-40">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Eyebrow>FAQ</Eyebrow>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Frequently asked <span className="text-gradient">questions</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Everything you need to know before enrolling. Can&apos;t find your answer? We&apos;re
            one message away.
          </p>
        </div>
      </section>

      {/* Accordion */}
      <Section className="pt-4">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="glass rounded-2xl p-4 sm:p-6">
              {faqs.map((f) => (
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
        </Reveal>

        {/* Still have questions */}
        <Reveal>
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl bg-gradient-to-br from-primary to-accent p-8 text-center text-white sm:p-10">
            <HelpCircle className="mx-auto h-10 w-10" />
            <h2 className="mt-4 font-display text-2xl font-bold">Still have questions?</h2>
            <p className="mt-2 text-white/90">
              Our team is happy to help. Reach out and we&apos;ll get back to you within 24 hours.
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-6">
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
