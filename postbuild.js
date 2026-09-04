const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'out');
const oldNextDir = path.join(outDir, '_next');
const newNextDir = path.join(outDir, 'assets');

// 1. Rename _next to assets
if (fs.existsSync(oldNextDir)) {
  fs.renameSync(oldNextDir, newNextDir);
  console.log('Renamed _next to assets');
} else if (!fs.existsSync(newNextDir)) {
  console.log('_next directory not found in out folder.');
}

// 2. Replace all occurrences of /_next/ with /assets/ in HTML, JS, CSS files
function replaceInFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      replaceInFiles(filePath);
    } else {
      const ext = path.extname(file);
      if (['.html', '.js', '.css'].includes(ext)) {
        let content = fs.readFileSync(filePath, 'utf8');
        // Replace /_next/ with /assets/
        // Also need to handle cases where it might be url-encoded or slightly different,
        // but /_next/ is the standard prefix.
        if (content.includes('/_next/')) {
          content = content.replace(/\/_next\//g, '/assets/');
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`Updated paths in: ${filePath}`);
        }
      }
    }
  }
}

if (fs.existsSync(outDir)) {
  replaceInFiles(outDir);
  console.log('Successfully updated all references from _next to assets.');
}
