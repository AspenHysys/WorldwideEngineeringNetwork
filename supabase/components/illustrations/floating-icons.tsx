'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  FlaskConical,
  Flame,
  Droplet,
  Wind,
  Gauge,
  Atom,
  Cog,
  Zap,
  ThermometerSun,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const icons = [
  { Icon: FlaskConical, className: 'text-primary' },
  { Icon: Flame, className: 'text-orange-500' },
  { Icon: Droplet, className: 'text-blue-500' },
  { Icon: Wind, className: 'text-cyan-500' },
  { Icon: Gauge, className: 'text-accent' },
  { Icon: Atom, className: 'text-purple-500' },
  { Icon: Cog, className: 'text-slate-500' },
  { Icon: Zap, className: 'text-yellow-500' },
  { Icon: ThermometerSun, className: 'text-red-500' },
];

/**
 * Floating engineering icons scattered across the hero.
 * Positions are deterministic to avoid hydration mismatch.
 */
export function FloatingIcons() {
  const positions = [
    { top: '8%', left: '6%', anim: 'animate-float-slow', delay: 0 },
    { top: '14%', left: '88%', anim: 'animate-float-medium', delay: 0.5 },
    { top: '38%', left: '4%', anim: 'animate-float-medium', delay: 1 },
    { top: '62%', left: '92%', anim: 'animate-float-slow', delay: 1.5 },
    { top: '78%', left: '10%', anim: 'animate-float-slow', delay: 0.8 },
    { top: '84%', left: '82%', anim: 'animate-float-medium', delay: 2 },
    { top: '28%', left: '50%', anim: 'animate-float-slow', delay: 1.2 },
    { top: '52%', left: '48%', anim: 'animate-float-medium', delay: 0.3 },
    { top: '70%', left: '40%', anim: 'animate-float-slow', delay: 1.8 },
  ];

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {icons.map(({ Icon, className }, i) => {
        const p = positions[i];
        return (
          <motion.div
            key={i}
            className={cn('absolute', p.anim)}
            style={{ top: p.top, left: p.left }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ delay: p.delay, duration: 0.6 }}
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl glass shadow-sm">
              <Icon className={cn('h-6 w-6', className)} />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
