const fs = require('fs');
const glob = require('glob');
const files = glob.sync('app/**/*.tsx');
let count = 0;
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('Call Anytime')) {
    const target = /<div\s+onClick=\{\(\) => setIsPopupOpen\(true\)\}\s+className="flex items-center gap-2 px-6 xl:px-8 h-full bg-sky-500 text-white hover:bg-\[\#001D3D\] transition-colors cursor-pointer group">\s+<PhoneCall className="w-9 h-9 p-\[2px\] text-white stroke-\[1\.5\] group-hover:scale-110 transition-transform"\s*\/>\s+<div className="flex flex-col justify-center">\s+<span className="text-\[11px\] font-bold tracking-widest text-white\/80 uppercase mb-0\.5">Call Anytime<\/span>\s+<span className="text-\[19px\] font-black text-white tracking-tight">\+91-85249-17170<\/span>\s+<\/div>\s+<\/div>/g;

    const replacement = `<a href="tel:+918524917170" className="flex items-center gap-2 px-6 xl:px-8 h-full bg-sky-500 text-white hover:bg-[#001D3D] transition-colors cursor-pointer group">
                <PhoneCall className="w-9 h-9 p-[2px] text-white stroke-[1.5] group-hover:scale-110 transition-transform" />
                <div className="flex flex-col justify-center">
                  <span className="text-[11px] font-bold tracking-widest text-white/80 uppercase mb-0.5">Call Anytime</span>
                  <span className="text-[19px] font-black text-white tracking-tight">+91-85249-17170</span>
                </div>
              </a>`;
    if(target.test(content)) {
        content = content.replace(target, replacement);
        fs.writeFileSync(file, content);
        console.log('Fixed ' + file);
        count++;
    }
  }
});
console.log('Fixed count: ' + count);
