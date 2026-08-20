import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: 'SGNL – Sarathi Germinate Nidhi Limited | Trusted Financial Partner',
  description:
    'Sarathi Germinate Nidhi Limited offers low-interest gold loans, personal loans, fixed deposits, and savings solutions across Tamil Nadu. Apply online today.',
  keywords: 'Nidhi Company, Gold Loan, Fixed Deposit, Personal Loan, SGNL, Sarathi Germinate',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="font-sans antialiased text-[#001D3D]">{children}</body>
    </html>
  );
}
