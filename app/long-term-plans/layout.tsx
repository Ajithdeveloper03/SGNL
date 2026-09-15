import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Long Term Investment Plans in Tamil Nadu | SGNL',
  description: "Explore SGNL's long-term investment plans with 3–5 year tenures, fixed deposits, savings options, DEMAT services and select insurance benefits."
};

export default function LongTermPlansLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
