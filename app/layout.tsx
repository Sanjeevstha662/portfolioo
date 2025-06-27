import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sanjeev Works - Digital Marketing & Web Development Expert',
  description: 'Crafting Digital Success: From Code to Conversion. Expert in SEO, web development, graphic design, and digital marketing.',
  keywords: 'SEO specialist, web developer, digital marketing, graphic design, React, Next.js, cyber security',
  authors: [{ name: 'Sanjeev' }],
  creator: 'Sanjeev',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sanjeev.info.np/',
    title: 'Sanjeev Works - Digital Marketing & Web Development Expert',
    description: 'Crafting Digital Success: From Code to Conversion',
    siteName: 'Sanjeev Works',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sanjeev Works - Digital Marketing & Web Development Expert',
    description: 'Crafting Digital Success: From Code to Conversion',
    creator: '@sanjeev',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}