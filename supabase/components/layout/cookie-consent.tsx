'use client';

import * as React from 'react';
import { Cookie, X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const STORAGE_KEY = 'cookie-consent';

export function CookieConsent() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        const t = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(t);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const decide = (choice: 'accepted' | 'declined') => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // ignore storage errors
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-x-3 bottom-3 z-[60] sm:inset-x-auto sm:right-6 sm:bottom-6 sm:max-w-md"
        >
          <div className="glass rounded-2xl border p-5 shadow-2xl">
            <div className="flex items-start gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <Cookie className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold">Cookie Preferences</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  We use essential cookies to keep you logged in and remember your preferences.
                  Optional cookies help us understand how you use the site. You can change your
                  choice anytime.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Button size="sm" onClick={() => decide('accepted')}>
                    <Check className="mr-1.5 h-4 w-4" />
                    Accept All
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => decide('declined')}>
                    Decline Optional
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => decide('declined')}
                    aria-label="Dismiss"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
