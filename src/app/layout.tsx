import './globals.css';
import type { Metadata } from 'next';
import Sidebar from '@/components/Sidebar';

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
      <body className="antialiased flex min-h-screen bg-background">
        <Sidebar />
        <main className="flex-1 h-screen overflow-y-auto border-l border-slate-100 bg-white">
          {children}
        </main>
      </body>
    </html>
  );
}
