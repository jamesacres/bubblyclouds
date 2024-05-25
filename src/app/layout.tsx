import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Providers } from './providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bubbly Clouds',
  description: 'Web Services',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className="flex flex-col items-center justify-between p-12 sm:p-24">
            <div>
              <Link href="/">
                <Image
                  className="relative"
                  src="/bubbly-clouds.png"
                  alt="Bubbly Clouds Logo"
                  width={350}
                  height={70}
                  priority
                />
              </Link>
            </div>
            {children}

            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
