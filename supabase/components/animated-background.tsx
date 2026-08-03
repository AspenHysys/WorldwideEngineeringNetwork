'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * Animated engineering-inspired background.
 * Combines a subtle grid, floating gradient orbs, and drifting
 * process-flow SVG lines. Purely decorative (aria-hidden).
 */
export function AnimatedBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
    >
      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      {/* Gradient orbs */}
      <motion.div
        className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Flow lines */}
      <svg className="absolute inset-0 h-full w-full opacity-20" preserveAspectRatio="none">
        <defs>
          <linearGradient id="flow-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
          </linearGradient>
        </defs>
        <motion.path
          d="M-50,200 C300,100 600,300 1400,150"
          fill="none"
          stroke="url(#flow-grad)"
          strokeWidth="2"
          className="animate-dash-flow"
        />
        <motion.path
          d="M-50,500 C400,600 700,400 1400,550"
          fill="none"
          stroke="url(#flow-grad)"
          strokeWidth="2"
          className="animate-dash-flow"
        />
        <motion.path
          d="M-50,800 C500,700 900,900 1400,750"
          fill="none"
          stroke="url(#flow-grad)"
          strokeWidth="2"
          className="animate-dash-flow"
        />
      </svg>
    </div>
  );
}
