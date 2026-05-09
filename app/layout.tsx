import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
});

export const metadata: Metadata = {
  title: 'Portfolio | Full-Stack Dev & Creative Owner',
  description: 'Creative portfolio with Glassmorphism 2.0 design.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="id" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-[#050508] text-slate-100 antialiased selection:bg-cyan-500/30" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
