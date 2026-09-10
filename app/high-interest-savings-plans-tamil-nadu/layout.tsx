import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'High Interest Savings Plans in Tamil Nadu | SGNL',
  description: 'Compare high interest savings, FD and RD options in Tamil Nadu from participating banks and NBFCs. Explore rates and get support from SGNL.',
  alternates: {
    canonical: 'https://www.sgsgnl.com/high-interest-savings-plans-tamil-nadu',
  },
  openGraph: {
    title: 'Compare High Interest Savings Plans in Tamil Nadu | SGNL',
    description: 'Explore FD, RD and senior citizen savings options from participating banks and NBFCs in Tamil Nadu. Compare available options with SGNL.',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
