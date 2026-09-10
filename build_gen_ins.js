const fs = require('fs');
const path = require('path');

const templatePath = path.join(process.cwd(), 'app', 'health-insurance-tamil-nadu', 'page.tsx');
let content = fs.readFileSync(templatePath, 'utf-8');

// Replace LifeInsurancePage with GeneralInsurancePage
content = content.replace('LifeInsurancePage', 'GeneralInsurancePage');

// Replace Hero section text
content = content.replace('Compare Health Insurance Plans in Tamil Nadu', 'Compare General Insurance Plans in Tamil Nadu');
content = content.replace('Protect Your Family\\'s Health — <span className="text-sky-400">Compare Insurance Plans</span>', 'Protect What Matters Most — <span className="text-sky-400">Compare General Insurance Plans in Tamil Nadu</span>');
content = content.replace('A medical emergency can bring unexpected expenses at any time. SGNL helps you compare health insurance options from participating insurers such as Star Health, Niva Bupa, HDFC ERGO, Care Health, and Manipal Cigna, so you can explore coverage based on your family\\'s healthcare needs and budget.', 'Accidents, fire, theft, and travel mishaps arrive without warning. SGNL helps you compare general insurance plans in Tamil Nadu from trusted insurers — helping you manage unexpected repair and loss-related expenses.');
content = content.replace('15+ IRDAI-Approved Insurers', '10+ IRDAI-Regulated Insurers');

// Replace Why Do You Need Health Insurance
content = content.replace('Why Do You Need Health Insurance?', 'Why Do You Need General Insurance?');
content = content.replace('Medical emergencies can happen without warning, and healthcare expenses can quickly put pressure on your savings. From hospitalization and surgeries to diagnostic tests and follow-up care, medical costs can become difficult to manage without adequate financial planning. Health insurance helps you prepare for these unexpected expenses, so a health emergency doesn\\'t have to become a major financial setback for your family.', 'Road accidents, monsoon flooding, fire, theft, and flight disruptions are everyday risks behind a vehicle, a home, or a small business in Tamil Nadu. General insurance can help cover eligible repair, replacement, or rebuilding costs, subject to the policy\\'s terms, limits and exclusions. It also covers the liability you may owe to others, so one bad incident doesn\\'t wipe out what you\\'ve built.');

// Replace whyNeedInsurance array
const whyNeedNew = `const whyNeedInsurance = [
    "Repair or replacement cost for your vehicle after an accident",
    "Third-party liability cover, mandatory by law for every vehicle owner",
    "Protection for your home and shop against fire, burglary, and storm damage",
    "Cover for flood and cyclone-related property loss, common across Tamil Nadu",
    "Medical and cancellation cover for domestic and international trips",
    "Cashless repairs at network garages, so you don't pay large sums upfront"
  ];`;
content = content.replace(/const whyNeedInsurance = \[[\s\S]*?\];/, whyNeedNew);

// Replace Health Insurance Plans We Offer
content = content.replace('Health Insurance Plans We Offer', 'General Insurance Plans We Offer in Tamil Nadu');
content = content.replace('Whether you\\'re looking to protect yourself, your family, children, or senior citizens, different health insurance options are available based on your healthcare requirements.', '');

// Replace plansOffered array
const plansOfferedNew = `const plansOffered = [
    {
      title: "Motor Insurance (Car & Two-Wheeler)",
      icon: TrendingUp,
      color: "bg-emerald-500 text-white",
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=800",
      desc: "Covers own-damage repair costs after an accident, theft, or fire. It also includes the mandatory third-party liability cover for both cars and two-wheelers. Optional add-ons such as zero depreciation and engine protection may provide additional protection, subject to the selected policy's terms and conditions, whether you're navigating Chennai traffic or a highway trip to Madurai."
    },
    {
      title: "Home Insurance",
      icon: ShieldCheck,
      color: "bg-sky-500 text-white",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
      desc: "Comprehensive protection for your house structure and household contents against fire, theft, cyclone, and flood damage."
    },
    {
      title: "Shop & Commercial Property",
      icon: Wallet,
      color: "bg-rose-500 text-white",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      desc: "Covers your shop, office, warehouse, or factory building and stock against fire, explosion, short-circuit, theft, and natural calamities. The right cover can help reduce the financial impact of unexpected property damage or stock losses on your business."
    },
    {
      title: "Travel Insurance",
      icon: Compass,
      color: "bg-indigo-500 text-white",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800",
      desc: "Covers trip cancellations, lost baggage, passport loss, and emergency medical treatment abroad. A delayed flight or a missed connection, at home or overseas, stays a minor hassle instead of a major expense."
    },
    {
      title: "Personal Accident Insurance",
      icon: HeartPulse,
      color: "bg-orange-500 text-white",
      image: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&q=80&w=800",
      desc: "May provide a lump-sum benefit for covered accidental death or disability, with benefits depending on the selected policy and terms."
    }
  ];`;
content = content.replace(/const plansOffered = \[[\s\S]*?\];/, plansOfferedNew);

// Replace Why Choose SGNL
content = content.replace('Why Choose <span className="text-sky-500">SGNL</span> for Health Insurance?', 'Why Choose <span className="text-sky-500">SGNL</span> for General Insurance?');
content = content.replace('Choosing health insurance can be complicated when every insurer offers different coverage, premiums, waiting periods, and policy conditions. SGNL helps simplify the comparison process.', 'Compare More. Choose With Confidence. Stay Supported.');

// Replace Why Choose SGNL Grid
const whyChooseOld = /\{\[\s*\{\s*icon:\s*Layers[\s\S]*?\]\.map/;
const whyChooseNew = `{[
              { icon: Layers, title: "Compare Multiple Insurers", desc: "Explore general insurance options from multiple leading insurers instead of being limited to one provider." },
              { icon: Compass, title: "Guidance Based on Your Needs", desc: "Get help comparing options based on your vehicle, property, business, travel or personal protection requirements." },
              { icon: FileText, title: "Simple & Transparent Process", desc: "Understand key policy features, coverage, exclusions and applicable terms before you choose." },
              { icon: Headset, title: "Support Beyond Purchase", desc: "Get assistance with policy-related queries, renewals and claim-process guidance when required." },
              { icon: ShieldCheck, title: "Multiple Protection Options", desc: "Explore motor, home, commercial property, travel and personal accident insurance through one platform." }
            ].map`;
content = content.replace(whyChooseOld, whyChooseNew);

// Replace Partners Title
content = content.replace('SGNL works with participating health and general insurers regulated by IRDAI, giving customers access to different health coverage options based on their requirements.', 'We\\'re not tied to just one company — and that\\'s a good thing for you. SGNL works with leading general insurers regulated by IRDAI , so we can help you explore and compare suitable plans from multiple insurers.');

// Replace Partners Array
content = content.replace(/\[\.\.\.\['Star Health Insurance'[^]*?\], \.\.\.\['Star Health Insurance'.*?\]\]/g, "[...['ICICI Lombard General Insurance', 'Bajaj Allianz General Insurance', 'Tata AIG General Insurance', 'HDFC ERGO General Insurance', 'SBI General Insurance', 'Royal Sundaram General Insurance', 'Digit Insurance', 'New India Assurance', 'United India Assurance', 'Chola MS General Insurance'], ...['ICICI Lombard General Insurance', 'Bajaj Allianz General Insurance', 'Tata AIG General Insurance', 'HDFC ERGO General Insurance', 'SBI General Insurance', 'Royal Sundaram General Insurance', 'Digit Insurance', 'New India Assurance', 'United India Assurance', 'Chola MS General Insurance']]");

// Add partner disclaimer
content = content.replace('</section>\n\n      {/* HOW IT WORKS */}', '<p className="text-center text-slate-500 text-sm mt-8">All brand names and logos belong to their respective companies. SGNL facilitates insurance comparison and advisory services with IRDAI-registered insurers.</p>\n        </div>\n      </section>\n\n      {/* HOW IT WORKS */}');

// Replace What Makes Our Plans Worth It? -> Key Benefits of General Insurance
content = content.replace('What Makes Our Plans <span className="text-sky-400">Worth It?</span>', 'Key Benefits of <span className="text-sky-400">General Insurance</span>');
content = content.replace('Health insurance plans can offer different features designed to make healthcare protection more practical and flexible. Depending on the insurer and policy selected, available benefits may include:', '*Starting premiums vary by vehicle type, property value, city, and the insurer you choose — confirm current pricing with the client before publishing an exact figure.');

// Replace the scroll items
const scrollItemsOld = /const items = \[\s*\{\s*title:\s*"Cashless Hospitalization"[\s\S]*?\];/;
const scrollItemsNew = `const items = [
                      { title: "Protection Against Unexpected Losses", desc: "Financial protection for covered vehicle, property, travel and personal accident risks." },
                      { title: "Third-Party Liability Protection", desc: "Motor insurance can provide cover for eligible third-party liabilities, subject to policy terms." },
                      { title: "Cashless Repairs at Network Garages", desc: "Eligible motor claims may be settled through network garages, subject to insurer terms and applicable deductibles." },
                      { title: "Optional Add-On Covers", desc: "Choose additional protection such as zero depreciation, engine protection and roadside assistance, where available." },
                      { title: "Protection for Property & Business Assets", desc: "Cover options may help protect eligible buildings, contents, stock and other insured assets against covered risks." },
                      { title: "Travel & Personal Protection", desc: "Travel and personal accident policies can provide benefits for covered medical emergencies, trip-related losses and accidental events." }
                    ];`;
content = content.replace(scrollItemsOld, scrollItemsNew);

// Replace How It Works Array
const howItWorksOld = /\{\s*step:\s*1,\s*title:\s*"Tell Us Your Requirements"[\s\S]*?\]\.map/;
const howItWorksNew = `{
                  step: 1, title: "Tell us about yourself", desc: "Your vehicle, property, or the coverage you're looking for." },
                  { step: 2, title: "We compare plans for you", desc: "Across 10+ insurers, so you don't have to do the legwork." },
                  { step: 3, title: "You choose, we handle the rest", desc: "Paperwork, documentation, all sorted for you." },
                  { step: 4, title: "Stay covered, stay supported", desc: "We're here for claims, renewals, and everything in between." }
                ].map`;
content = content.replace(howItWorksOld, `[${howItWorksNew}`);

// Replace FAQs array
const faqsNew = `const faqs = [
    { q: "What is general insurance and why do I need it?", a: "General insurance covers non-life risks — your vehicle, home, shop, and travel plans — against accidents, fire, theft, and other unforeseen events. A sudden loss stays manageable instead of becoming a financial setback." },
    { q: "Is motor insurance mandatory in Tamil Nadu?", a: "Yes, third-party motor insurance is legally mandatory for every vehicle owner in Tamil Nadu and across India. A comprehensive policy additionally covers damage to your own vehicle." },
    { q: "What is cashless claim settlement in motor insurance?", a: "Cashless claim settlement allows the insurer to settle an eligible repair claim directly with a network garage, subject to the policy terms and applicable deductibles." },
    { q: "Which general insurance companies can I choose from through SGNL?", a: "You get access to 10+ trusted insurers — including ICICI Lombard, Bajaj Allianz, Tata AIG, HDFC ERGO, and SBI General Insurance — compared side by side, so you're not limited to a single company's plans." },
    { q: "Can I insure my home and shop under one policy?", a: "Some property insurance products may allow coverage for multiple properties or risks under a single policy, depending on the insurer and policy terms. SGNL can help you compare suitable options based on your requirements." },
    { q: "What is a no-claim bonus in motor insurance?", a: "A no-claim bonus is a discount on your premium for every year you don't make a claim. It builds up over consecutive claim-free years and can lower your renewal cost significantly." }
  ];`;
content = content.replace(/const faqs = \[[\s\S]*?\];/, faqsNew);

// Replace Final CTA Banner
content = content.replace('Medical emergencies can happen unexpectedly. Having suitable health insurance can help you prepare for eligible healthcare expenses and protect your family from unnecessary financial pressure. Whether you\\'re looking to protect yourself, your children, your parents, or your entire family, SGNL can help you explore available health insurance options.', 'Accidents and emergencies don\\'t wait for the right time, and neither should your protection. Whether it\\'s your vehicle, your home, your business, or your next trip, we\\'re here to help you find the right general insurance plan in Tamil Nadu — without the confusion.');

const outDir = path.join(process.cwd(), 'app', 'general-insurance-tamil-nadu');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(path.join(outDir, 'page.tsx'), content);

const layoutContent = \`import { Metadata } from 'next';

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
\`;

fs.writeFileSync(path.join(outDir, 'layout.tsx'), layoutContent);

console.log('Successfully created general insurance page.');
