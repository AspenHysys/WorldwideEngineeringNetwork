'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, Sparkles, GraduationCap, Clock, Projector, BadgeCheck, Infinity as InfinityIcon } from 'lucide-react';
import { AnimatedBackground } from '@/components/animated-background';
import { FloatingIcons } from '@/components/illustrations/floating-icons';
import { DashboardMockup } from '@/components/illustrations/dashboard-mockup';
import { ProcessFlowDiagram } from '@/components/illustrations/process-flow-diagram';
import { Button } from '@/components/ui/button';
import { stats } from '@/lib/content';

const statIcons = [GraduationCap, Clock, Projector, BadgeCheck, InfinityIcon];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <AnimatedBackground />
      <FloatingIcons />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Copy */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary"
            >
              <Sparkles className="h-3.5 w-3.5" />
              #1 Process Simulation Training
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Become an <span className="text-gradient">Aspen HYSYS</span> Expert
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
            >
              Master Process Simulation, Oil &amp; Gas, LNG, Refinery, and Chemical Process
              Design with practical industrial projects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="group">
                <Link href="/pricing">
                  Enroll Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="group">
                <Link href="/courses">
                  <PlayCircle className="mr-2 h-4 w-4" />
                  View Curriculum
                </Link>
              </Button>
            </motion.div>

            {/* Admission form CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-5"
            >
              <a
                href="https://forms.fillout.com/t/94abgzjvohus"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:brightness-110 sm:w-auto"
              >
                <GraduationCap className="h-5 w-5" />
                Admission &amp; Enrollment Form
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>

            {/* Inline trust line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex items-center gap-4 text-sm text-muted-foreground"
            >
              <div className="flex -space-x-2">
                {['A', 'P', 'C', 'F', 'M'].map((c, i) => (
                  <div
                    key={c}
                    className="grid h-8 w-8 place-items-center rounded-full border-2 border-background bg-gradient-to-br from-primary to-accent text-xs font-bold text-white"
                    style={{ zIndex: 5 - i }}
                  >
                    {c}
                  </div>
                ))}
              </div>
              <span>Trusted by 1000+ engineers worldwide</span>
            </motion.div>
          </div>

          {/* Visual */}
          <div className="relative">
            <DashboardMockup />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-10 -left-6 hidden w-64 rounded-2xl glass p-3 shadow-xl sm:block"
            >
              <ProcessFlowDiagram className="w-full" />
              <p className="mt-1 text-center text-[10px] font-medium text-muted-foreground">
                Live process flow diagram
              </p>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 gap-4 rounded-2xl glass p-6 sm:grid-cols-3 lg:grid-cols-5"
        >
          {stats.map((s, i) => {
            const Icon = statIcons[i] ?? GraduationCap;
            return (
              <div key={s.label} className="text-center">
                <Icon className="mx-auto mb-2 h-6 w-6 text-primary" />
                <div className="font-display text-2xl font-bold sm:text-3xl">{s.value}</div>
                <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
