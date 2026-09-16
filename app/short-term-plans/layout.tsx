import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Short Term Investment Plans in Tamil Nadu │ SGNL',
  description: "Explore SGNL's short-term investment plans — recurring deposits, flexible savings, and fixed deposits with guaranteed monthly returns. Easy EMIs, budget-friendly options."
};

export default function ShortTermPlansLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
