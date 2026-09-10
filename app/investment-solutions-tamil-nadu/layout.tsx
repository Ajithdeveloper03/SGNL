import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Investment Solutions in Tamil Nadu | SGNL',
  description: 'Compare mutual funds, SIPs, bonds and investment options in Tamil Nadu from trusted partners. Get a free investment consultation with SGNL.',
  keywords: 'Investment solutions in Tamil Nadu, Mutual funds Tamil Nadu, SIP investment Tamil Nadu, best mutual funds Chennai, portfolio management services Tamil Nadu, tax saving investment Tamil Nadu, compare mutual funds Tamil Nadu',
  openGraph: {
    title: 'Compare Investment Solutions in Tamil Nadu | SGNL',
    description: 'Compare mutual funds, SIPs, bonds and tax-saving investment options from trusted partners with SGNL.',
    type: 'website',
  },
};

export default function InvestmentSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
