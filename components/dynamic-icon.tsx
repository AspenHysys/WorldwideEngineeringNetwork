'use client';

import * as React from 'react';
import {
  Factory,
  Wrench,
  Infinity as InfinityIcon,
  Award,
  Video,
  Radio,
  MessageSquare,
  FileText,
  Users,
  Wind,
  Snowflake,
  FlaskConical,
  Flame,
  Cog,
  Atom,
  Zap,
  Droplet,
  ThermometerSun,
  Gauge,
  type LucideIcon,
} from 'lucide-react';

const map: Record<string, LucideIcon> = {
  Factory,
  Wrench,
  Infinity: InfinityIcon,
  Award,
  Video,
  Radio,
  MessageSquare,
  FileText,
  Users,
  Wind,
  Snowflake,
  FlaskConical,
  Flame,
  Cog,
  Atom,
  Zap,
  Droplet,
  ThermometerSun,
  Gauge,
};

export function DynamicIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = map[name] ?? FlaskConical;
  return <Icon className={className} />;
}
