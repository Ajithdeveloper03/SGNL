const fs = require('fs');
const path = require('path');

const files = [
  'app/page.tsx',
  'app/health-insurance-tamil-nadu/page.tsx',
  'app/general-insurance-tamil-nadu/page.tsx',
  'app/high-interest-savings-plans-tamil-nadu/page.tsx',
  'app/services/life-insurance/page.tsx',
  'app/investment-solutions-tamil-nadu/page.tsx',
];

// Fix desktop nav order
const OLD_DESKTOP = "['High-Interest Savings', 'Investment Solutions', 'Life Insurance', 'Health Insurance', 'General Insurance']";
const NEW_DESKTOP = "['Life Insurance', 'Health Insurance', 'General Insurance', 'High-Interest Savings', 'Investment Solutions']";

// Fix mobile nav order
const OLD_MOBILE = "{ name: 'Services', links: ['High-Interest Savings', 'Investment Solutions', 'Life Insurance', 'Health Insurance', 'General Insurance'] }";
const NEW_MOBILE = "{ name: 'Services', links: ['Life Insurance', 'Health Insurance', 'General Insurance', 'High-Interest Savings', 'Investment Solutions'] }";

// Fix desktop link href ordering - OLD pattern used 'item'
const OLD_ITEM_HREF = "item === 'Life Insurance' ? '/services/life-insurance' : item === 'Health Insurance' ? '/health-insurance-tamil-nadu' : item === 'General Insurance' ? '/general-insurance-tamil-nadu' : item === 'High-Interest Savings' ? '/high-interest-savings-plans-tamil-nadu' : item === 'Investment Solutions' ? '/investment-solutions-tamil-nadu' : '#'";
// already correct, just need to make sure the array order is right

// Fix mobile link href
const OLD_LINK_HREF = "link === 'Life Insurance' ? '/services/life-insurance' : link === 'Health Insurance' ? '/health-insurance-tamil-nadu' : link === 'General Insurance' ? '/general-insurance-tamil-nadu' : link === 'High-Interest Savings' ? '/high-interest-savings-plans-tamil-nadu' : link === 'Investment Solutions' ? '/investment-solutions-tamil-nadu' : '#'";
// already correct

files.forEach(f => {
  const fullPath = path.join(__dirname, f);
  if (!fs.existsSync(fullPath)) { console.log('Missing:', f); return; }
  let c = fs.readFileSync(fullPath, 'utf8');
  let updated = false;

  if (c.includes(OLD_DESKTOP)) {
    c = c.split(OLD_DESKTOP).join(NEW_DESKTOP);
    updated = true;
  }
  if (c.includes(OLD_MOBILE)) {
    c = c.split(OLD_MOBILE).join(NEW_MOBILE);
    updated = true;
  }

  if (updated) {
    fs.writeFileSync(fullPath, c);
    console.log('Updated:', f);
  } else {
    console.log('No desktop/mobile match in:', f);
  }
});
