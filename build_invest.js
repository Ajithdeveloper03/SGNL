const fs = require('fs');
const path = require('path');

const templatePath = path.join(__dirname, 'app/health-insurance-tamil-nadu/page.tsx');
const targetDir = path.join(__dirname, 'app/investment-solutions-tamil-nadu');
const targetPath = path.join(targetDir, 'page.tsx');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

let content = fs.readFileSync(templatePath, 'utf8');

// 1. Meta Details (Page Title)
content = content.replace(/<title>.*?<\/title>/g, '<title>Investment Solutions in Tamil Nadu | SGNL</title>');

// 2. Hero Section
content = content.replace(/Protect Your Family's Health & Finances — Compare Health Insurance in Tamil Nadu/g, 'Grow Your Wealth Smart — Compare Investment Solutions in Tamil Nadu');
content = content.replace(/Medical emergencies come without warning.*?and get support from SGNL./g, "Money that stays idle may lose purchasing power over time as prices rise. SGNL helps you compare investment solutions in Tamil Nadu across mutual funds, SIPs, bonds, and portfolio management services. Understand your options, compare key features, and explore investment solutions based on your financial goals, risk comfort, and investment horizon.");
content = content.replace(/Compare Health Insurance/g, 'Compare Investment Options');
content = content.replace(/15\+ IRDAI-Regulated Insurers/g, 'SEBI-Registered Fund Houses');
content = content.replace(/100% Free Consultation/g, 'Free Investment Consultation');
content = content.replace(/Dedicated Claims & Support Team/g, 'Dedicated Investment Support');

// 3. Arrays
const newWhyNeed = `const whyNeedInsurance = [
    "Wealth Creation Potential — Explore investment options designed for long-term wealth creation, with returns depending on the product and market conditions.",
    "Disciplined Investing — SIPs help you invest a fixed amount regularly and build a consistent investing habit.",
    "Diversification — Spread investments across different asset classes and sectors instead of depending on a single investment.",
    "Tax-Saving Options — Explore options such as ELSS that may offer tax benefits, subject to applicable rules and eligibility.",
    "Goal-Based Investing — Choose investment options based on goals such as wealth creation, children's education, retirement, or other financial priorities.",
    "Flexible Investment Horizons — Explore investment options suitable for short-term, medium-term, and long-term financial objectives."
  ];`;
content = content.replace(/const whyNeedInsurance = \[[\s\S]*?\];/m, newWhyNeed);

const newPlans = `const plansOffered = [
    {
      title: "Mutual Funds — SIP & Lumpsum",
      icon: TrendingUp,
      color: "bg-emerald-500 text-white",
      image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&q=80&w=800",
      desc: "Explore equity, debt, and hybrid mutual funds based on your investment goals and risk comfort. You can invest through a lump sum or regular SIP contributions."
    },
    {
      title: "Systematic Investment Plan — SIP",
      icon: RefreshCw,
      color: "bg-sky-500 text-white",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800",
      desc: "Invest a fixed amount regularly in mutual funds and build a disciplined long-term investing habit. Both first-time and experienced investors can consider SIPs based on their financial goals."
    },
    {
      title: "Portfolio Management Services — PMS",
      icon: Briefcase,
      color: "bg-indigo-500 text-white",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      desc: "PMS provides professionally managed investment portfolios designed around an investor's objectives and risk profile. It is generally suited to investors seeking personalised portfolio management and is subject to applicable SEBI requirements. Minimum investment: ₹50 Lakhs, as per applicable SEBI norms."
    },
    {
      title: "ELSS Tax-Saving Investment",
      icon: ShieldCheck,
      color: "bg-rose-500 text-white",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
      desc: "Equity Linked Savings Schemes (ELSS) are market-linked equity mutual funds that may qualify for tax deductions under Section 80C, subject to applicable tax rules and eligibility. ELSS investments have a three-year lock-in period."
    },
    {
      title: "Bonds & Fixed-Income Investments",
      icon: Landmark,
      color: "bg-amber-500 text-white",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
      desc: "Government and corporate bonds can provide fixed-income exposure as part of a diversified portfolio. Returns, risks, liquidity, and other terms vary by instrument and issuer."
    }
  ];`;
content = content.replace(/const plansOffered = \[[\s\S]*?\];/m, newPlans);

const newWhyChoose = `const whyChooseSgnl = [
    { icon: Layers, title: "Compare Multiple Investment Options", desc: "Explore mutual funds, SIPs, bonds, and other eligible investment solutions across participating partners instead of being limited to a single provider." },
    { icon: Compass, title: "Guidance Based on Your Goals", desc: "Understand available investment options based on your financial goals, risk comfort, investment horizon, and investment amount." },
    { icon: FileText, title: "Clear Comparison of Risk & Costs", desc: "Get a clearer view of applicable fees, risks, lock-in periods, liquidity, and other important product terms before investing." },
    { icon: Sparkles, title: "Simple & Transparent Process", desc: "Receive support with documentation, KYC, application procedures, and account setup as applicable." },
    { icon: Headset, title: "Dedicated Investment Support", desc: "Get assistance with investment-related queries, reviews, and other applicable service requirements throughout your investment journey." }
  ];`;
content = content.replace(/\{\s*icon:\s*Layers[\s\S]*?\}\s*\]\.map/m, `whyChooseSgnl.map`);
// Inject whyChooseSgnl before return
content = content.replace(/return \(/, newWhyChoose + '\n\n  return (');

const newFaqs = `const faqs = [
    { q: "What is an investment solution and why do I need one?", a: "An investment solution is a financial product or strategy designed to help you work towards specific financial goals. Mutual funds, SIPs, bonds, ELSS, and NPS are examples of investment options. The suitable choice depends on your goals, risk comfort, investment horizon, and financial situation." },
    { q: "Is SIP better than a lump sum investment for building wealth?", a: "Neither option is universally better. An SIP allows you to invest a fixed amount regularly, while a lump sum involves investing an available amount at once. The suitable approach depends on your financial position, investment goals, risk comfort, investment horizon, and market conditions." },
    { q: "What is the difference between mutual funds and PMS?", a: "A mutual fund pools money from multiple investors and invests it according to the fund's stated objective. PMS provides portfolio management for individual clients and can offer more personalised portfolio construction. PMS is subject to applicable eligibility and minimum investment requirements." },
    { q: "Which mutual funds offer the best returns through SGNL?", a: "There is no single mutual fund that is guaranteed to provide the best returns. Performance depends on factors such as fund category, market conditions, investment horizon, and risk level. SGNL helps you compare available options and understand their risks and features before investing." },
    { q: "Can I get tax benefits on my investments?", a: "Certain investment products may offer tax benefits, subject to applicable tax rules and eligibility. ELSS may qualify for deductions under Section 80C, while NPS contributions are covered under applicable provisions of Section 80CCD." },
    { q: "What happens if I need to withdraw my investment early?", a: "Withdrawal rules depend on the investment product. Many mutual funds allow redemption, although applicable exit loads, taxes, or other conditions may apply. ELSS has a three-year lock-in period, while bonds and other products may have their own maturity, liquidity, or exit conditions. SGNL helps you understand these terms before you invest." },
    { q: "Is investment risk-free?", a: "No investment is completely risk-free. Market-linked products such as equity mutual funds and ELSS can fluctuate in value. The level and type of risk varies across investment products, so understanding your risk comfort and investment horizon is important before investing." }
  ];`;
content = content.replace(/const faqs = \[[\s\S]*?\];/m, newFaqs);

// 4. Section headings and text
content = content.replace(/Why Do You Need Health Insurance\?/g, "Why Do You Need an Investment Solution?");
content = content.replace(/A single hospitalization can wipe out years of savings.*?get the best treatment without financial stress./g, "A regular savings account can help manage everyday financial needs, but long-term goals may require a broader investment approach. Investment solutions allow you to explore different asset classes based on your financial objectives, risk comfort, and investment timeline.");
content = content.replace(/Health Insurance Plans We Offer in Tamil Nadu/g, "Investment Solutions We Offer in Tamil Nadu");
content = content.replace(/Protect individuals, families, and senior citizens with comprehensive health coverage options./g, "Explore options based on your savings goal, preferred tenure, liquidity needs, and eligibility.");
content = content.replace(/Why Choose <span className="text-sky-500">SGNL<\/span> for Health Insurance\?/g, 'Why Choose <span className="text-sky-500">SGNL</span> for Investment Solutions?');
content = content.replace(/Compare More. Choose Better. Stay Protected./g, "Compare More. Invest With Clarity. Stay Supported.");

// 5. How It Works
content = content.replace(/Share Your Healthcare Needs/g, "Share Your Investment Goal");
content = content.replace(/Tell us about your family size, age, existing health conditions, and coverage requirements./g, "Tell us about your investment objective, approximate investment amount, timeline, and priorities.");
content = content.replace(/Explore Suitable Health Plans/g, "Explore Suitable Options");
content = content.replace(/We help you explore relevant policies from participating insurers based on your needs./g, "We help you explore relevant mutual funds, SIPs, bonds, and other investment options based on your requirements.");
content = content.replace(/Understand Before You Buy/g, "Understand Before You Invest");
content = content.replace(/Review important details such as waiting periods, room rent limits, copayments, and exclusions before choosing./g, "Review important details such as risk, fees, lock-in periods, liquidity, and applicable terms before making your decision.");
content = content.replace(/Once you select a policy, we assist with documentation, KYC, and the application process./g, "Once you select an option, we assist with documentation, KYC, and account setup as applicable.");
content = content.replace(/We remain available for claim assistance, renewals, and other applicable support requirements./g, "We remain available for investment-related queries, reviews, and other applicable support requirements.");

// 6. Trusted Partners
content = content.replace(/15\+ IRDAI-Regulated Insurers/g, "SEBI-Registered Fund Houses");
content = content.replace(/Star Health  •  Care Health  •  Niva Bupa  •  HDFC Ergo  •  ICICI Lombard  •  Tata AIG  •  Bajaj Allianz  •  Aditya Birla  •  SBI General/g, "HDFC Mutual Fund  •  ICICI Prudential Mutual Fund  •  SBI Mutual Fund  •  Axis Mutual Fund  •  Kotak Mutual Fund  •  Nippon India Mutual Fund  •  Bajaj Finserv Mutual Fund  •  Aditya Birla Sun Life Mutual Fund  •  Franklin Templeton");

content = content.replace(/<h3 className="text-xl font-bold text-sky-500 mb-4 mt-8">Government Health Scheme<\/h3>/g, '<h3 className="text-xl font-bold text-sky-500 mb-4 mt-8">PFRDA-Regulated Pension Scheme</h3>');
content = content.replace(/Chief Minister's Comprehensive Health Insurance Scheme \(CMCHIS\)/g, "National Pension System (NPS)");

// 7. Final CTA
content = content.replace(/Your Health is Your True Wealth./g, "Invest Smart, Grow Steady");
content = content.replace(/Medical emergencies don't wait for you to be ready. Ensure your family has access to quality healthcare without the financial stress. SGNL helps you explore, compare, and choose suitable health insurance options in Tamil Nadu with ongoing support when you need it most./g, "The earlier you start planning, the more time your investments may have to grow and compound. Talk to our team about investment options that align with your financial goals, risk comfort, and investment timeline. Get a clear understanding of your options before making an investment decision.");

// 8. Remove Comparison Table
// Look for {/* COMPARISON TABLE */} to {/* WHY CHOOSE SGNL */}
content = content.replace(/\{\/\* COMPARISON TABLE \*\/\}[\s\S]*?\{\/\* WHY CHOOSE SGNL \*\/\}/, '{/* WHY CHOOSE SGNL */}');

// 9. Remove Benefits Scroll Section
// Look for {/* BENEFITS SCROLL SECTION */} to {/* TRUSTED PARTNERS */}
// Actually, it's before Trusted Partners.
content = content.replace(/\{\/\* BENEFITS SCROLL SECTION \*\/\}[\s\S]*?\{\/\* TRUSTED PARTNERS \*\/\}/, '{/* TRUSTED PARTNERS */}');

// Add imports for icons
const missingIcons = ['RefreshCw', 'Briefcase'];
for (const icon of missingIcons) {
  if (!content.includes(icon)) {
    content = content.replace(/import {([^}]+)} from 'lucide-react';/, "import { $1, " + icon + " } from 'lucide-react';");
  }
}

fs.writeFileSync(targetPath, content);
console.log('Successfully created page.tsx');
