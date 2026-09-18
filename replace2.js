const fs = require('fs');
const glob = require('glob');
const files = glob.sync('app/**/*.tsx');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const targetRegex = /<div\s+onClick=\{\(\) => setIsPopupOpen\(true\)\}\s+className="flex items-center gap-2 px-6 xl:px-8 h-full bg-sky-500 text-white hover:bg-\[\#001D3D\] transition-colors cursor-pointer group">([\s\S]*?)<div className="flex flex-col justify-center">([\s\S]*?)<span className="text-\[11px\] font-bold tracking-widest text-white\/80 uppercase mb-0\.5">Call Anytime<\/span>([\s\S]*?)<span className="text-\[19px\] font-black text-white tracking-tight">(.*?)<\/span>([\s\S]*?)<\/div>([\s\S]*?)<\/div>/g;

  if (targetRegex.test(content)) {
    let replacedContent = content.replace(targetRegex, '<a href="tel:+918524917170" className="flex items-center gap-2 px-6 xl:px-8 h-full bg-sky-500 text-white hover:bg-[#001D3D] transition-colors cursor-pointer group">$1<div className="flex flex-col justify-center">$2<span className="text-[11px] font-bold tracking-widest text-white/80 uppercase mb-0.5">Call Anytime</span>$3<span className="text-[19px] font-black text-white tracking-tight">+91-85249-17170</span>$5</div>$6</a>');
    fs.writeFileSync(file, replacedContent);
    console.log('Fixed wrapper in: ' + file);
  }
});
