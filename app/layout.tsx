import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { ThemeProvider } from './components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CreatorDAO Videos',
  description: 'Empower Creators, Fund Charities: Decentralized Video Creation for Good',
  keywords: ['DAO', 'video creation', 'charity', 'blockchain', 'creators'],
  authors: [{ name: 'CreatorDAO Team' }],
  openGraph: {
    title: 'CreatorDAO Videos',
    description: 'Empower Creators, Fund Charities: Decentralized Video Creation for Good',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Providers>
            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
