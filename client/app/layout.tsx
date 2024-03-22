import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Regen Network Challenge',
  description: 'Data Stream Full-stack Code Challenge',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col p-6 md:p-12 lg:p-24">
          <div className="w-full max-w-7xl self-center">{children}</div>
        </main>
      </body>
    </html>
  );
}
