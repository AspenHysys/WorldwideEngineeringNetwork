'use client';

import * as React from 'react';
import { motion } from 'framer-motion';

/**
 * Stylized process-flow / chemical plant illustration drawn entirely
 * with SVG (no copyrighted assets). Used in the hero.
 */
export function ProcessFlowDiagram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 320"
      className={className}
      fill="none"
      role="img"
      aria-label="Process flow diagram illustration"
    >
      <defs>
        <linearGradient id="pfd-liquid" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
        <linearGradient id="pfd-vessel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(var(--primary) / 0.25)" />
          <stop offset="100%" stopColor="hsl(var(--accent) / 0.25)" />
        </linearGradient>
      </defs>

      {/* Pipes */}
      <g stroke="url(#pfd-liquid)" strokeWidth="3" strokeLinecap="round">
        <motion.line x1="40" y1="160" x2="120" y2="160"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
        <motion.line x1="200" y1="160" x2="280" y2="160"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.3 }} />
        <motion.line x1="360" y1="160" x2="440" y2="160"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.6 }} />
        <motion.line x1="520" y1="160" x2="580" y2="160"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.9 }} />
      </g>

      {/* Flow arrows */}
      <g fill="hsl(var(--primary))">
        {[80, 240, 400, 560].map((x, i) => (
          <motion.polygon key={x} points={`${x},155 ${x+10},160 ${x},165`}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }} />
        ))}
      </g>

      {/* Feed tank */}
      <g>
        <rect x="60" y="120" width="60" height="80" rx="6" fill="url(#pfd-vessel)" stroke="hsl(var(--primary))" strokeWidth="2" />
        <text x="90" y="225" textAnchor="middle" className="fill-muted-foreground" fontSize="11">Feed</text>
      </g>

      {/* Heat exchanger */}
      <g>
        <rect x="220" y="140" width="80" height="40" rx="4" fill="url(#pfd-vessel)" stroke="hsl(var(--primary))" strokeWidth="2" />
        <line x1="230" y1="150" x2="290" y2="150" stroke="hsl(var(--primary))" strokeWidth="1.5" />
        <line x1="230" y1="160" x2="290" y2="160" stroke="hsl(var(--primary))" strokeWidth="1.5" />
        <line x1="230" y1="170" x2="290" y2="170" stroke="hsl(var(--primary))" strokeWidth="1.5" />
        <text x="260" y="200" textAnchor="middle" className="fill-muted-foreground" fontSize="11">Exchanger</text>
      </g>

      {/* Distillation column */}
      <g>
        <rect x="400" y="80" width="40" height="160" rx="6" fill="url(#pfd-vessel)" stroke="hsl(var(--primary))" strokeWidth="2" />
        {[100, 120, 140, 160, 180, 200, 220].map((y) => (
          <line key={y} x1="400" y1={y} x2="440" y2={y} stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.5" />
        ))}
        <text x="420" y="260" textAnchor="middle" className="fill-muted-foreground" fontSize="11">Column</text>
      </g>

      {/* Product tank */}
      <g>
        <rect x="520" y="120" width="60" height="80" rx="6" fill="url(#pfd-vessel)" stroke="hsl(var(--primary))" strokeWidth="2" />
        <text x="550" y="225" textAnchor="middle" className="fill-muted-foreground" fontSize="11">Product</text>
      </g>

      {/* Valves */}
      <g fill="hsl(var(--accent))">
        {[160, 320, 480].map((x) => (
          <g key={x}>
            <rect x={x - 5} y={155} width="10" height="10" rx="2" />
          </g>
        ))}
      </g>
    </svg>
  );
}
