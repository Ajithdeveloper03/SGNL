import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compare General Insurance Plans in Tamil Nadu | SGNL',
  description: 'Compare general insurance plans in Tamil Nadu — motor, home, travel & commercial cover from 10+ IRDAI-regulated insurers. Get a free quote from SGNL.',
  alternates: {
    canonical: 'https://www.sgsgnl.com/general-insurance-tamil-nadu',
  },
  openGraph: {
    title: 'Compare General Insurance Plans in Tamil Nadu | SGNL',
    description: 'Motor, home, shop & travel insurance from 10+ IRDAI-approved insurers, compared side by side. Free quote from SGNL.',
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
