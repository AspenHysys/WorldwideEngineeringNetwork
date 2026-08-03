'use client';

import * as React from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

type Msg = { role: 'bot' | 'user'; text: string };

const greeting =
  "Hi! I'm the Aspen HYSYS Academy assistant. Ask me about courses, enrollment, payments, or account help.";

const knowledge: { keywords: string[]; answer: string }[] = [
  {
    keywords: ['enroll', 'enrollment', 'buy', 'purchase', 'join', 'register', 'sign up', 'signup', 'create account', 'new account'],
    answer:
      "To enroll, visit our Contact page and send us a message with the course or plan you're interested in. We'll guide you through the enrollment and payment process. You can also email us at engrizwanhaider@gmail.com.",
  },
  {
    keywords: ['payment', 'paypal', 'pay', 'price', 'cost', 'fee'],
    answer:
      "We accept PayPal (sandbox testing for now). Prices start at $149 for Basic, $349 for Professional, and $699 for Premium — all one-time payments with lifetime access. You can connect your PayPal account later without any redesign.",
  },
  {
    keywords: ['course', 'courses', 'learn', 'curriculum', 'module', 'content'],
    answer:
      "Our flagship is the Aspen HYSYS Complete Masterclass (40+ hours, 120 lessons). We also offer specialized courses: Natural Gas Processing, LNG Plant Simulation, Refinery Simulation, Heat Exchanger Design, and Reactor Simulation.",
  },

  {
    keywords: ['certificate', 'certification'],
    answer:
      "Yes! Every plan includes a verified completion certificate you can add to your LinkedIn and resume. It's recognized by employers in the process engineering industry.",
  },
  {
    keywords: ['refund', 'money back', 'guarantee'],
    answer:
      "We offer a 14-day money-back guarantee. If you're not satisfied within 14 days, contact us for a full refund — no questions asked.",
  },
  {
    keywords: ['access', 'lifetime', 'how long', 'expiry', 'expire'],
    answer:
      "All plans include lifetime access. There's no expiry — once enrolled, the course materials, recordings, projects, and future updates are yours forever.",
  },
  {
    keywords: ['contact', 'support', 'help', 'reach', 'email', 'phone', 'whatsapp'],
    answer:
      "You can reach us at engrizwanhaider@gmail.com or on WhatsApp at +92 316 0290836. We respond within 24 hours.",
  },
  {
    keywords: ['instructor', 'teacher', 'who teaches'],
    answer:
      "Our lead instructor is a Chemical Engineer and Process Simulation Specialist with 12+ years of industrial experience across oil & gas, LNG, refinery, and petrochemicals. He has trained 1000+ engineers worldwide.",
  },
  {
    keywords: ['hi', 'hello', 'hey', 'greetings'],
    answer: "Hello! How can I help you with Aspen HYSYS Academy today? Ask about courses, enrollment, payments, or account help.",
  },
];

function answerFor(input: string): string {
  const q = input.toLowerCase();
  for (const k of knowledge) {
    if (k.keywords.some((kw) => q.includes(kw))) return k.answer;
  }
  return "I'm not sure about that yet. For detailed help, please contact us at engrizwanhaider@gmail.com or WhatsApp +92 316 0290836. You can also visit our Contact page to send a message.";
}

export function ChatbotWidget() {
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState('');
  const [messages, setMessages] = React.useState<Msg[]>([{ role: 'bot', text: greeting }]);
  const [typing, setTyping] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, typing]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setInput('');
    setMessages((m) => [...m, { role: 'user', text }]);
    setTyping(true);
    setTimeout(() => {
      setMessages((m) => [...m, { role: 'bot', text: answerFor(text) }]);
      setTyping(false);
    }, 700);
  };

  return (
    <>
      {/* Launcher */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open chat assistant"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="fixed bottom-6 left-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg glow-primary"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 left-6 z-50 flex h-[28rem] w-[22rem] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl glass shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-border/60 bg-primary/5 p-4">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-white">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold">Academy Assistant</div>
                <div className="text-xs text-accent">● Online</div>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={cn(
                    'flex items-start gap-2',
                    m.role === 'user' && 'flex-row-reverse'
                  )}
                >
                  <div
                    className={cn(
                      'grid h-7 w-7 shrink-0 place-items-center rounded-full text-white',
                      m.role === 'bot'
                        ? 'bg-gradient-to-br from-primary to-accent'
                        : 'bg-slate-500'
                    )}
                  >
                    {m.role === 'bot' ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                  </div>
                  <div
                    className={cn(
                      'max-w-[80%] rounded-2xl px-3 py-2 text-sm',
                      m.role === 'bot'
                        ? 'rounded-tl-sm bg-muted text-foreground'
                        : 'rounded-tr-sm bg-primary text-primary-foreground'
                    )}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex items-center gap-2">
                  <div className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-white">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="flex gap-1 rounded-2xl bg-muted px-3 py-3">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50" style={{ animationDelay: '0ms' }} />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50" style={{ animationDelay: '150ms' }} />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="flex gap-2 border-t border-border/60 p-3">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && send()}
                placeholder="Ask a question..."
                className="flex-1"
              />
              <Button size="icon" onClick={send} aria-label="Send message">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
