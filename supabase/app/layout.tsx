import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { BackToTop } from '@/components/layout/back-to-top';
import { PageTransition } from '@/components/layout/page-transition';
import { CookieConsent } from '@/components/layout/cookie-consent';
import { ChatbotWidget } from '@/components/chatbot/chatbot-widget';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const siteUrl = 'https://aspenhysysacademy.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Aspen HYSYS Academy — Master Process Simulation',
    template: '%s | Aspen HYSYS Academy',
  },
  description:
    'Become an Aspen HYSYS expert. Master process simulation, oil & gas, LNG, refinery, and chemical process design with practical industrial projects. 1000+ students trained.',
  keywords: [
    'Aspen HYSYS',
    'process simulation',
    'chemical engineering',
    'oil and gas',
    'LNG',
    'refinery simulation',
    'process engineering course',
    'petroleum engineering',
  ],
  authors: [{ name: 'Aspen HYSYS Academy' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Aspen HYSYS Academy',
    title: 'Aspen HYSYS Academy — Master Process Simulation',
    description:
      'Become an Aspen HYSYS expert. Master process simulation, oil & gas, LNG, refinery, and chemical process design with practical industrial projects.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aspen HYSYS Academy — Master Process Simulation',
    description:
      'Become an Aspen HYSYS expert with practical industrial projects and lifetime access.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <PageTransition>
            <main className="min-h-screen">{children}</main>
          </PageTransition>
          <Footer />
          <BackToTop />
          <CookieConsent />
          <ChatbotWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
