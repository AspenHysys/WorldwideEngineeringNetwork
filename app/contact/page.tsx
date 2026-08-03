'use client';

import * as React from 'react';
import { Mail, Phone, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { Section, Eyebrow } from '@/components/section';
import { Reveal } from '@/components/reveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const WHATSAPP_NUMBER = '923160290836'; // +92 316 0290836
const EMAIL = 'engrizwanhaider@gmail.com';
const PHONE_DISPLAY = '+92 316 0290836';

export default function ContactPage() {
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', country: '', message: '' });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-12 sm:pt-40">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s <span className="text-gradient">talk</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Have a question about courses, pricing, or enrollment? Send us a message and
            we&apos;ll respond within 24 hours.
          </p>
        </div>
      </section>

      <Section className="pt-4">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Form */}
          <Reveal>
            <div className="rounded-2xl glass p-6 sm:p-8">
              {submitted ? (
                <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
                  <CheckCircle2 className="h-16 w-16 text-accent" />
                  <h2 className="mt-4 font-display text-2xl font-bold">Message sent!</h2>
                  <p className="mt-2 max-w-sm text-muted-foreground">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <Button className="mt-6" onClick={() => setSubmitted(false)}>
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@example.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+92 316 0290836"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Input
                        id="country"
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                        placeholder="United States"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Contact info + buttons + map */}
          <Reveal delay={0.1}>
            <div className="space-y-6">
              {/* Admission & Enrollment CTA */}
              <div className="rounded-2xl bg-gradient-to-br from-primary to-accent p-6 text-center text-white shadow-lg">
                <h3 className="font-display text-lg font-bold">Ready to enroll?</h3>
                <p className="mt-1 text-sm text-white/85">
                  Fill out our admission form and we&apos;ll get you started right away.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="mt-4 w-full bg-white text-primary hover:bg-white/90"
                >
                  <a
                    href="https://forms.fillout.com/t/94abgzjvohus"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Admission &amp; Enrollment Form
                  </a>
                </Button>
              </div>

              {/* Quick contact buttons */}
              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl bg-[#25D366] p-4 text-white transition-transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-6 w-6" />
                  <div>
                    <div className="text-sm font-semibold">WhatsApp</div>
                    <div className="text-xs text-white/80">Chat with us instantly</div>
                  </div>
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 rounded-xl bg-primary p-4 text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  <Mail className="h-6 w-6" />
                  <div>
                    <div className="text-sm font-semibold">Email</div>
                    <div className="text-xs text-primary-foreground/80">Reply within 24h</div>
                  </div>
                </a>
              </div>

              {/* Contact details */}
              <div className="rounded-2xl glass p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm font-semibold">Email</div>
                    <div className="text-sm text-muted-foreground">{EMAIL}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm font-semibold">Phone / WhatsApp</div>
                    <div className="text-sm text-muted-foreground">{PHONE_DISPLAY}</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
