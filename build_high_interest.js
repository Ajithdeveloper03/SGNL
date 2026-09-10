const fs = require('fs');
const path = require('path');

const templatePath = path.join(process.cwd(), 'app', 'health-insurance-tamil-nadu', 'page.tsx');
let content = fs.readFileSync(templatePath, 'utf-8');

// Replace component name
content = content.replace('LifeInsurancePage', 'HighInterestSavingsPage');

// Add specific icons
content = content.replace(
  "Layers, Compass, FileText, Sparkles, Activity, Headset",
  "Layers, Compass, FileText, Sparkles, Activity, Headset, Banknote, LineChart, Landmark, Clock, Coins, ShieldCheck, HeartHandshake"
);

// Replace Hero section text
content = content.replace('Compare Health Insurance Plans in Tamil Nadu', 'Compare High Interest Savings Plans in Tamil Nadu');
content = content.replace("Protect Your Family's Health — <span className=\\"text-sky-400\\">Compare Insurance Plans</span>", "Grow Your Savings With Confidence — <span className=\\"text-sky-400\\">Compare High Interest Savings Plans in Tamil Nadu</span>");
content = content.replace("A medical emergency can bring unexpected expenses at any time. SGNL helps you compare health insurance options from participating insurers such as Star Health, Niva Bupa, HDFC ERGO, Care Health, and Manipal Cigna, so you can explore coverage based on your family's healthcare needs and budget.", 'Looking for better ways to grow your savings? SGNL helps you compare savings and deposit options in Tamil Nadu from participating banks and NBFCs, including HDFC Bank, ICICI Bank, State Bank of India, Bajaj Finance, and Axis Bank. Explore options based on your savings goal, preferred tenure, liquidity needs, and eligibility.');
content = content.replace('15+ IRDAI-Approved Insurers', '10+ RBI-Regulated Banks & NBFCs');
content = content.replace('Dedicated Claims & Support Team', 'Dedicated Support Team');

// Replace Why Do You Need
content = content.replace('Why Do You Need Health Insurance?', 'Why Do You Need a High Interest Savings Plan?');
content = content.replace("Medical emergencies can happen without warning, and healthcare expenses can quickly put pressure on your savings. From hospitalization and surgeries to diagnostic tests and follow-up care, medical costs can become difficult to manage without adequate financial planning. Health insurance helps you prepare for these unexpected expenses, so a health emergency doesn't have to become a major financial setback for your family.", 'Keeping your money in a standard savings account may not always align with your financial goals. Savings and deposit products such as fixed deposits and recurring deposits can offer different interest rates, tenures, and payout options to help you plan your money more effectively. The right option depends on how much you want to save, how long you can keep the money invested, and how easily you may need to access it.');

// Replace whyNeedInsurance array
const whyNeedNew = `const whyNeedInsurance = [
    "Achieve financial goals effectively",
    "Potentially better interest earnings",
    "Disciplined monthly savings habit",
    "Flexible tenures and payout choices"
  ];`;
content = content.replace(/const whyNeedInsurance = \[[\s\S]*?\];/, whyNeedNew);

// Replace Plans We Offer
content = content.replace('Health Insurance Plans We Offer', 'High Interest Savings Plans We Offer in Tamil Nadu');
content = content.replace("Whether you're looking to protect yourself, your family, children, or senior citizens, different health insurance options are available based on your healthcare requirements.", 'Explore options based on your savings goal, preferred tenure, liquidity needs, and eligibility.');

// Replace plansOffered array
const plansOfferedNew = `const plansOffered = [
    {
      title: "Fixed Deposit (FD)",
      icon: Landmark,
      color: "bg-emerald-500 text-white",
      image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80&w=800",
      desc: "Invest a lump sum for a selected tenure and earn interest at the rate applicable when the deposit is booked, subject to the institution's terms. Depending on the product, interest may be paid periodically or at maturity."
    },
    {
      title: "Recurring Deposit (RD)",
      icon: Clock,
      color: "bg-sky-500 text-white",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
      desc: "Save a fixed amount regularly over a chosen tenure and earn interest at the applicable RD rate. An RD can be useful for salaried individuals, professionals, and small business owners who want to build savings gradually."
    },
    {
      title: "High-Interest Savings Account",
      icon: Banknote,
      color: "bg-rose-500 text-white",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800",
      desc: "Some banks offer savings accounts with competitive interest rates while keeping your funds accessible. Interest rates, balance requirements, withdrawal conditions, and other features vary by account and institution."
    },
    {
      title: "Senior Citizen Savings Options",
      icon: HeartHandshake,
      color: "bg-indigo-500 text-white",
      image: "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?auto=format&fit=crop&q=80&w=800",
      desc: "Eligible senior citizens may have access to deposit products offering preferential interest rates or other benefits. Rates, eligibility, tenure, and payout options vary by institution and product."
    },
    {
      title: "Tax-Saving Fixed Deposit",
      icon: LineChart,
      color: "bg-orange-500 text-white",
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=800",
      desc: "A tax-saving FD generally comes with a 5-year lock-in period and may qualify for deduction under Section 80C, subject to applicable tax rules and eligibility. Interest earned is subject to applicable taxation."
    }
  ];`;
content = content.replace(/const plansOffered = \[[\s\S]*?\];/, plansOfferedNew);

// Replace Why Choose SGNL
content = content.replace('Why Choose <span className="text-sky-500">SGNL</span> for Health Insurance?', 'Why Choose <span className="text-sky-500">SGNL</span> for High Interest Savings?');
content = content.replace('Choosing health insurance can be complicated when every insurer offers different coverage, premiums, waiting periods, and policy conditions. SGNL helps simplify the comparison process.', 'Compare More. Save With Confidence. Stay Supported.');

// Replace Why Choose SGNL Grid
const whyChooseOld = /\{\[\s*\{\s*icon:\s*Layers[\s\S]*?\]\.map/m;
const whyChooseNew = `{[
              { icon: Layers, title: "Compare Multiple Institutions", desc: "Explore FD, RD and other eligible savings options from participating banks and NBFCs." },
              { icon: Compass, title: "Guidance Based on Your Goals", desc: "Compare options based on your savings amount, preferred tenure, liquidity needs and financial goals." },
              { icon: FileText, title: "Clear Comparison of Rates & Terms", desc: "Understand applicable interest rates, tenure, payout options, premature withdrawal conditions and other key terms before choosing." },
              { icon: Sparkles, title: "Simple Application Support", desc: "Get assistance with documentation, KYC and the application process as applicable." },
              { icon: Headset, title: "Support Beyond Investment", desc: "Get assistance with renewals, maturity-related queries and other applicable requirements." }
            ].map`;
content = content.replace(whyChooseOld, whyChooseNew);

// Replace Partners Title
content = content.replace('Our Trusted Health & General Insurance Partners', 'Our Banking, NBFC & Savings Scheme Partners');
content = content.replace('SGNL works with participating health and general insurers regulated by IRDAI, giving customers access to different health coverage options based on their requirements.', 'SGNL works with participating banks and NBFCs, helping customers explore and compare available savings and deposit options across multiple institutions.');

// Replace Partners Array
content = content.replace(/\[\.\.\.\['Star Health Insurance'[^]*?\], \.\.\.\['Star Health Insurance'.*?\]\]/g, "[...['HDFC Bank', 'ICICI Bank', 'State Bank of India', 'Axis Bank', 'Bajaj Finance', 'Kotak Mahindra Bank', 'IDFC FIRST Bank', 'Shriram Finance', 'Mahindra Finance', 'Post Office Savings'], ...['HDFC Bank', 'ICICI Bank', 'State Bank of India', 'Axis Bank', 'Bajaj Finance', 'Kotak Mahindra Bank', 'IDFC FIRST Bank', 'Shriram Finance', 'Mahindra Finance', 'Post Office Savings']]");

// Add partner disclaimer
content = content.replace('</section>\n\n      {/* HOW IT WORKS */}', '<p className="text-center text-slate-500 text-sm mt-8">All brand names and logos belong to their respective companies. Product availability, rates, eligibility, and terms are subject to the respective institution or scheme.</p>\n        </div>\n      </section>\n\n      {/* HOW IT WORKS */}');

// Replace Scroll section items
content = content.replace('What Makes Our Plans <span className="text-sky-400">Worth It?</span>', 'Benefits That Support Your <span className="text-sky-400">Savings Goals</span>');
content = content.replace('Health insurance plans can offer different features designed to make healthcare protection more practical and flexible. Depending on the insurer and policy selected, available benefits may include:', 'Savings and deposit products can offer different interest rates, tenures, and payout options to help you plan your money more effectively:');

const scrollItemsOld = /const items = \[\s*\{\s*title:\s*"Cashless Hospitalization"[\s\S]*?\];/;
const scrollItemsNew = `const items = [
                      { title: "Better Interest Earnings", desc: "Potentially better interest earnings compared with standard savings options, depending on the product." },
                      { title: "Fixed Deposit Options", desc: "Fixed deposit options with predetermined interest rates for the agreed tenure." },
                      { title: "Recurring Deposit Options", desc: "Recurring deposit options that help build a disciplined monthly savings habit." },
                      { title: "Senior Citizen Options", desc: "Senior citizen deposit options with preferential rates where offered." },
                      { title: "Flexible Tenures", desc: "Flexible tenures ranging from short-term to long-term options." },
                      { title: "Payout Choices", desc: "Different payout choices depending on the selected deposit product and institution." }
                    ];`;
content = content.replace(scrollItemsOld, scrollItemsNew);

// Replace How It Works Array
const howItWorksOld = /\{\s*step:\s*1,\s*title:\s*"Tell Us Your Requirements"[\s\S]*?\]\.map/;
const howItWorksNew = `{
                  step: 1, title: "Tell Us Your Savings Goal", desc: "Share the amount you want to save, preferred tenure, liquidity needs, and what you want to achieve." },
                  { step: 2, title: "We Compare Available Options", desc: "We help you explore suitable savings and deposit options from participating institutions." },
                  { step: 3, title: "Choose the Option That Fits", desc: "Review the applicable interest rate, tenure, payout structure, withdrawal conditions, and other terms before making your decision." },
                  { step: 4, title: "Complete the Process", desc: "Get assistance with documentation, KYC, and account or deposit application requirements as applicable." },
                  { step: 5, title: "Stay Supported", desc: "Get support for renewals, maturity-related queries, and other applicable requirements after you choose your product." }
                ].map`;
content = content.replace(howItWorksOld, `[${howItWorksNew}`);

// Replace FAQs array
const faqsNew = `const faqs = [
    { q: "What is a high interest savings plan and why do I need it?", a: "A high-interest savings plan generally refers to savings or deposit options that may offer competitive interest rates compared with standard savings options. These can include eligible fixed deposits, recurring deposits, and other savings products, depending on the institution." },
    { q: "Is the interest rate on a fixed deposit fixed?", a: "For a fixed-rate FD, the applicable interest rate is generally fixed according to the deposit terms at the time of booking and remains applicable for the agreed tenure, subject to the product's terms and conditions." },
    { q: "What is the difference between FD and RD?", a: "A Fixed Deposit (FD) involves investing a lump sum for a selected tenure, while a Recurring Deposit (RD) involves making regular deposits, usually monthly, over a selected period. The applicable interest rates and terms vary by institution." },
    { q: "Which banks offer competitive FD interest rates through SGNL?", a: "FD interest rates vary based on the institution, tenure, deposit amount, customer category, and applicable terms. SGNL helps you explore available options from participating banks and NBFCs so you can compare applicable rates and features before choosing." },
    { q: "Can senior citizens get preferential interest rates on fixed deposits?", a: "Many banks and financial institutions offer preferential interest rates to eligible senior citizens on selected deposit products. The additional rate, eligibility, and terms vary by institution and tenure." },
    { q: "What happens if I withdraw my FD before maturity?", a: "Many fixed deposits may allow premature withdrawal, but the applicable interest rate or penalty can vary depending on the institution and product. SGNL can help you understand the applicable premature withdrawal terms before you choose." },
    { q: "Is my fixed deposit investment protected?", a: "Bank deposits with DICGC-insured banks are covered for up to ₹5 lakh per depositor per bank, including principal and interest, subject to applicable DICGC rules. DICGC deposit insurance does not cover deposits accepted by NBFCs. For NBFC fixed deposits, investors should review the institution's credit ratings, financial information, and applicable terms before investing." }
  ];`;
content = content.replace(/const faqs = \[[\s\S]*?\];/, faqsNew);

// Replace Final CTA Banner
content = content.replace('Stay Protected, Stay Prepared', 'Save Smart. Plan With Confidence.');
content = content.replace("Medical emergencies can happen unexpectedly. Having suitable health insurance can help you prepare for eligible healthcare expenses and protect your family from unnecessary financial pressure. Whether you're looking to protect yourself, your children, your parents, or your entire family, SGNL can help you explore available health insurance options.", 'Your savings should work toward your goals, whether you\\'re building an emergency fund, planning for a major expense, preparing for retirement, or simply looking for a disciplined way to save.\\n\\nSGNL helps you explore and compare available savings and deposit options in Tamil Nadu, with clear information and support throughout the process.');

const outDir = path.join(process.cwd(), 'app', 'high-interest-savings-plans-tamil-nadu');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(path.join(outDir, 'page.tsx'), content);

const layoutContent = \`import { Metadata } from 'next';

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
\`;

fs.writeFileSync(path.join(outDir, 'layout.tsx'), layoutContent);

console.log('Successfully created high interest savings page.');
