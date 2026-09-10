const fs = require('fs');
const path = require('path');

const files = [
  'app/health-insurance-tamil-nadu/page.tsx',
  'app/general-insurance-tamil-nadu/page.tsx',
  'app/high-interest-savings-plans-tamil-nadu/page.tsx',
  'app/investment-solutions-tamil-nadu/page.tsx',
  'app/services/life-insurance/page.tsx'
];

files.forEach(f => {
  const fullPath = path.join(__dirname, f);
  if (!fs.existsSync(fullPath)) {
    console.log('Missing:', f);
    return;
  }
  
  let c = fs.readFileSync(fullPath, 'utf8');
  let updated = false;
  
  // Replace container
  const containerRegex = /<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6(?: lg:gap-8)?"(.*?)>/g;
  if (containerRegex.test(c)) {
    c = c.replace(containerRegex, (match, p1) => {
      return `<div className="flex flex-wrap justify-center gap-6 lg:gap-8"${p1}>`;
    });
    updated = true;
  }
  
  // Replace child
  const childRegex = /<div key=\{i\} className="relative group h-\[260px\] /g;
  if (childRegex.test(c)) {
    c = c.replace(childRegex, '<div key={i} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] max-w-[500px] relative group h-[260px] ');
    updated = true;
  }

  if (updated) {
    fs.writeFileSync(fullPath, c);
    console.log('Updated:', f);
  } else {
    console.log('No match found in:', f);
  }
});
