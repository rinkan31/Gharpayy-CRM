import './globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Sidebar from '@/components/Sidebar';

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
});

export const metadata: Metadata = {
  title: 'Gharpayy CRM',
  description: 'Gharpayy CRM',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className} antialiased flex min-h-screen bg-background`}>
        <Sidebar />
        <main className="flex-1 h-screen overflow-y-auto border-l border-slate-100 bg-white">
          {children}
        </main>
      </body>
    </html>
  );
}
