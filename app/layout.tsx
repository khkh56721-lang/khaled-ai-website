import type { Metadata } from 'next';
import { Inter, Anton } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileStickyCTA from '@/components/MobileStickyCTA';
import FloatingContact from '@/components/FloatingContact';
import ScrollReveal from '@/components/ScrollReveal';
import CalProvider from '@/components/CalProvider';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

// Heavy condensed display face for big headlines — the "premium presence" lever.
// Inspired by (not copied from) blacksmith-ind.com, rendered in Khaled's mint brand.
const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Khaled AI — AI Automation Engineer',
  description:
    'I build AI systems that work — voice agents, automation workflows, and Claude-powered systems for real businesses. Then I teach you exactly how.',
  metadataBase: new URL('https://khaled-ai.com'),
  openGraph: {
    title: 'Khaled AI — AI Automation Engineer',
    description:
      'Voice agents, automation workflows, AI systems for real businesses. Built by Khaled Akhyarhoum.',
    url: 'https://khaled-ai.com',
    siteName: 'Khaled AI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khaled AI — AI Automation Engineer',
    description: 'AI automation, voice agents, real systems for real businesses.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${anton.variable} dark`}>
      <body className="min-h-screen bg-bg font-sans text-white antialiased">
        <Navbar />
        <ScrollReveal />
        <main className="pt-24">{children}</main>
        <Footer />
        <MobileStickyCTA />
        <FloatingContact />
        <CalProvider />
      </body>
    </html>
  );
}
