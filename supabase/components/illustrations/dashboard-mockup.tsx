'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Gauge, Activity, Layers, TrendingUp, Settings } from 'lucide-react';

/**
 * A stylized "simulation dashboard" mockup inspired by engineering
 * software UIs — built from scratch (no copyrighted screenshots).
 */
export function DashboardMockup({ className }: { className?: string }) {
  return (
    <div className={className}>
      <motion.div
        initial={{ opacity: 0, y: 30, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="glass overflow-hidden rounded-2xl shadow-2xl"
        style={{ transformPerspective: 1000 }}
      >
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-border/60 bg-background/40 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
          <div className="ml-3 flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <Settings className="h-3.5 w-3.5" />
            HYSYS Simulation — Natural Gas Processing
          </div>
        </div>

        {/* Body */}
        <div className="grid grid-cols-3 gap-3 p-4">
          {/* Sidebar */}
          <div className="col-span-1 space-y-2">
            {['Material Streams', 'Energy Streams', 'Heat Exchangers', 'Columns', 'Reactors'].map(
              (item, i) => (
                <div
                  key={item}
                  className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-[11px] font-medium ${
                    i === 0
                      ? 'bg-primary/15 text-primary'
                      : 'text-muted-foreground hover:bg-muted/60'
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  {item}
                </div>
              )
            )}
          </div>

          {/* Main panel */}
          <div className="col-span-2 space-y-3">
            {/* KPI row */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { icon: Gauge, label: 'Pressure', value: '42.5 bar', color: 'text-primary' },
                { icon: TrendingUp, label: 'Temp', value: '78 °C', color: 'text-accent' },
                { icon: Activity, label: 'Flow', value: '1250 kmol/h', color: 'text-blue-500' },
              ].map((kpi) => (
                <div key={kpi.label} className="rounded-lg border border-border/60 bg-background/40 p-2.5">
                  <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                    <kpi.icon className={`h-3 w-3 ${kpi.color}`} />
                    {kpi.label}
                  </div>
                  <div className="mt-1 text-sm font-bold">{kpi.value}</div>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="rounded-lg border border-border/60 bg-background/40 p-3">
              <div className="mb-2 flex items-center gap-2 text-[11px] font-medium text-muted-foreground">
                <BarChart3 className="h-3.5 w-3.5 text-primary" />
                Component Flow Profile
              </div>
              <div className="flex h-20 items-end gap-1.5">
                {[40, 65, 50, 80, 60, 95, 70, 85, 55, 75, 90, 45].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.6, delay: i * 0.05 }}
                    className="flex-1 rounded-t bg-gradient-to-t from-primary to-accent"
                  />
                ))}
              </div>
            </div>

            {/* Stream table */}
            <div className="rounded-lg border border-border/60 bg-background/40 p-3">
              <div className="mb-2 flex items-center gap-2 text-[11px] font-medium text-muted-foreground">
                <Layers className="h-3.5 w-3.5 text-accent" />
                Stream Summary
              </div>
              <div className="space-y-1.5">
                {[
                  ['Feed', 'Methane', '1250'],
                  ['Vapor', 'Ethane', '840'],
                  ['Liquid', 'Propane', '410'],
                ].map(([a, b, c]) => (
                  <div key={a} className="grid grid-cols-3 gap-2 text-[10px]">
                    <span className="font-medium text-primary">{a}</span>
                    <span className="text-muted-foreground">{b}</span>
                    <span className="text-right font-mono">{c} kmol/h</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
