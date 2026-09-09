import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Compare Health Insurance Plans in Tamil Nadu | SGNL",
  description: "Compare health insurance plans in Tamil Nadu from 10+ IRDAI-regulated insurers, including family floater & senior citizen plans. Get a free quote.",
  openGraph: {
    title: "Compare Health Insurance Plans in Tamil Nadu | SGNL",
    description: "Family, individual, critical illness & senior citizen health plans from 10+ IRDAI-regulated insurers, compared side by side. Free quote from SGNL.",
  },
  alternates: {
    canonical: "https://yourdomain.com/health-insurance-tamil-nadu"
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
