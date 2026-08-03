import Link from 'next/link';
import { FlaskConical, Linkedin, Twitter, Youtube, Facebook, Mail } from 'lucide-react';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/courses', label: 'Courses' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

const legalLinks = [
  { href: '/contact', label: 'Privacy Policy' },
  { href: '/contact', label: 'Terms of Service' },
];

const socials = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Mail, href: 'mailto:engrizwanhaider@gmail.com', label: 'Email' },
];

export function Footer() {
  return (
    <footer className="border-t bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-display">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-white">
                <FlaskConical className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold">
                Aspen HYSYS<span className="text-accent"> Academy</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-secondary-foreground/70">
              Helping engineers build careers in process simulation through
              practical, industry-based training.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary-foreground/90">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-secondary-foreground/70 transition-colors hover:text-accent"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary-foreground/90">
              Courses
            </h3>
            <ul className="mt-4 space-y-2">
              {[
                'Aspen HYSYS Masterclass',
                'Natural Gas Processing',
                'LNG Plant Simulation',
                'Refinery Simulation',
                'Hydrogen Systems',
              ].map((c) => (
                <li key={c}>
                  <Link
                    href="/courses"
                    className="text-sm text-secondary-foreground/70 transition-colors hover:text-accent"
                  >
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + socials */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary-foreground/90">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-secondary-foreground/70 transition-colors hover:text-accent"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-secondary-foreground/70 transition-all hover:bg-primary hover:text-white"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-secondary-foreground/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Aspen HYSYS Academy. All rights reserved.</p>
          <p>Designed for the next generation of process engineers.</p>
        </div>
      </div>
    </footer>
  );
}
