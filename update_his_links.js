const fs = require('fs');
const path = require('path');

const files = [
  path.join(process.cwd(), 'app', 'page.tsx'),
  path.join(process.cwd(), 'app', 'health-insurance-tamil-nadu', 'page.tsx'),
  path.join(process.cwd(), 'app', 'general-insurance-tamil-nadu', 'page.tsx'),
  path.join(process.cwd(), 'app', 'services', 'life-insurance', 'page.tsx'),
  path.join(process.cwd(), 'app', 'high-interest-savings-plans-tamil-nadu', 'page.tsx'),
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf-8');

  // Replace item nav links (which already includes general insurance link)
  content = content.replaceAll(
    "item === 'Life Insurance' ? '/services/life-insurance' : item === 'Health Insurance' ? '/health-insurance-tamil-nadu' : item === 'General Insurance' ? '/general-insurance-tamil-nadu' : '#'",
    "item === 'Life Insurance' ? '/services/life-insurance' : item === 'Health Insurance' ? '/health-insurance-tamil-nadu' : item === 'General Insurance' ? '/general-insurance-tamil-nadu' : item === 'High-Interest Savings' ? '/high-interest-savings-plans-tamil-nadu' : '#'"
  );

  // Replace link mobile nav links
  content = content.replaceAll(
    "link === 'Life Insurance' ? '/services/life-insurance' : link === 'Health Insurance' ? '/health-insurance-tamil-nadu' : link === 'General Insurance' ? '/general-insurance-tamil-nadu' : '#'",
    "link === 'Life Insurance' ? '/services/life-insurance' : link === 'Health Insurance' ? '/health-insurance-tamil-nadu' : link === 'General Insurance' ? '/general-insurance-tamil-nadu' : link === 'High-Interest Savings' ? '/high-interest-savings-plans-tamil-nadu' : '#'"
  );

  // Replace l footer nav links (Footer label uses "High-Interest Savings Plans")
  content = content.replaceAll(
    "l === 'Life Insurance' ? '/services/life-insurance' : l === 'Health Insurance' ? '/health-insurance-tamil-nadu' : l === 'General Insurance' ? '/general-insurance-tamil-nadu' : '#'",
    "l === 'Life Insurance' ? '/services/life-insurance' : l === 'Health Insurance' ? '/health-insurance-tamil-nadu' : l === 'General Insurance' ? '/general-insurance-tamil-nadu' : l === 'High-Interest Savings Plans' ? '/high-interest-savings-plans-tamil-nadu' : '#'"
  );
  
  // High-Interest Savings page didn't get the general insurance update because it was created directly from health-insurance page before the first script ran. Let me just do a fallback replace for it.
  content = content.replaceAll(
    "item === 'Life Insurance' ? '/services/life-insurance' : item === 'Health Insurance' ? '/health-insurance-tamil-nadu' : '#'",
    "item === 'Life Insurance' ? '/services/life-insurance' : item === 'Health Insurance' ? '/health-insurance-tamil-nadu' : item === 'General Insurance' ? '/general-insurance-tamil-nadu' : item === 'High-Interest Savings' ? '/high-interest-savings-plans-tamil-nadu' : '#'"
  );

  content = content.replaceAll(
    "link === 'Life Insurance' ? '/services/life-insurance' : link === 'Health Insurance' ? '/health-insurance-tamil-nadu' : '#'",
    "link === 'Life Insurance' ? '/services/life-insurance' : link === 'Health Insurance' ? '/health-insurance-tamil-nadu' : link === 'General Insurance' ? '/general-insurance-tamil-nadu' : link === 'High-Interest Savings' ? '/high-interest-savings-plans-tamil-nadu' : '#'"
  );

  content = content.replaceAll(
    "l === 'Life Insurance' ? '/services/life-insurance' : l === 'Health Insurance' ? '/health-insurance-tamil-nadu' : '#'",
    "l === 'Life Insurance' ? '/services/life-insurance' : l === 'Health Insurance' ? '/health-insurance-tamil-nadu' : l === 'General Insurance' ? '/general-insurance-tamil-nadu' : l === 'High-Interest Savings Plans' ? '/high-interest-savings-plans-tamil-nadu' : '#'"
  );

  fs.writeFileSync(file, content);
});

console.log('Successfully updated HIS links in all pages.');
