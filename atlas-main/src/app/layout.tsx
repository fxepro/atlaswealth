
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Atlas Wealth OS | Global Family Office Operating System',
  description: 'The definitive platform for high-net-worth individuals to manage global assets, entities, and ownership structures.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-brand-sky/20 selection:text-brand-navy bg-brand-canvas text-brand-body min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
