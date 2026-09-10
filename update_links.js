const fs = require('fs');
const path = require('path');

const files = [
  path.join(process.cwd(), 'app', 'page.tsx'),
  path.join(process.cwd(), 'app', 'health-insurance-tamil-nadu', 'page.tsx'),
  path.join(process.cwd(), 'app', 'general-insurance-tamil-nadu', 'page.tsx'),
  path.join(process.cwd(), 'app', 'services', 'life-insurance', 'page.tsx'),
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');

  // Replace item nav links
  content = content.replaceAll(
    "item === 'Life Insurance' ? '/services/life-insurance' : item === 'Health Insurance' ? '/health-insurance-tamil-nadu' : '#'",
    "item === 'Life Insurance' ? '/services/life-insurance' : item === 'Health Insurance' ? '/health-insurance-tamil-nadu' : item === 'General Insurance' ? '/general-insurance-tamil-nadu' : '#'"
  );

  // Replace link mobile nav links
  content = content.replaceAll(
    "link === 'Life Insurance' ? '/services/life-insurance' : link === 'Health Insurance' ? '/health-insurance-tamil-nadu' : '#'",
    "link === 'Life Insurance' ? '/services/life-insurance' : link === 'Health Insurance' ? '/health-insurance-tamil-nadu' : link === 'General Insurance' ? '/general-insurance-tamil-nadu' : '#'"
  );

  // Replace l footer nav links
  content = content.replaceAll(
    "l === 'Life Insurance' ? '/services/life-insurance' : l === 'Health Insurance' ? '/health-insurance-tamil-nadu' : '#'",
    "l === 'Life Insurance' ? '/services/life-insurance' : l === 'Health Insurance' ? '/health-insurance-tamil-nadu' : l === 'General Insurance' ? '/general-insurance-tamil-nadu' : '#'"
  );

  fs.writeFileSync(file, content);
});

console.log('Successfully updated links in all pages.');
