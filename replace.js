const fs = require('fs');
const glob = require('glob');

const files = glob.sync('app/**/*.tsx');
let count = 0;

const target = `<div onClick={() => setIsPopupOpen(true)} className="flex items-center gap-2 px-6 xl:px-8 h-full bg-sky-500 text-white hover:bg-[#001D3D] transition-colors cursor-pointer group">
                <PhoneCall className="w-9 h-9 p-[2px] text-white stroke-[1.5] group-hover:scale-110 transition-transform" />
                <div className="flex flex-col justify-center">
                  <span className="text-[11px] font-bold tracking-widest text-white/80 uppercase mb-0.5">Call Anytime</span>
                  <span className="text-[19px] font-black text-white tracking-tight">+1 9812310000</span>
                </div>
              </div>`;
              
const replacement = `<a href="tel:+918524917170" className="flex items-center gap-2 px-6 xl:px-8 h-full bg-sky-500 text-white hover:bg-[#001D3D] transition-colors cursor-pointer group">
                <PhoneCall className="w-9 h-9 p-[2px] text-white stroke-[1.5] group-hover:scale-110 transition-transform" />
                <div className="flex flex-col justify-center">
                  <span className="text-[11px] font-bold tracking-widest text-white/80 uppercase mb-0.5">Call Anytime</span>
                  <span className="text-[19px] font-black text-white tracking-tight">+91-85249-17170</span>
                </div>
              </a>`;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('+1 9812310000')) {
    if(content.includes(target)) {
      content = content.replace(target, replacement);
      fs.writeFileSync(file, content);
      console.log('Updated ' + file);
      count++;
    } else {
      console.log('Target not found exactly in ' + file);
      // Try to replace part of it
      let content2 = content.replace(/\+1 9812310000/g, '+91-85249-17170');
      content2 = content2.replace(/<div onClick=\{\(\) => setIsPopupOpen\(true\)\} className="flex items-center gap-2 px-6 xl:px-8 h-full bg-sky-500 text-white hover:bg-\[\#001D3D\] transition-colors cursor-pointer group">([\s\S]*?)<\/div>\s*?<\/div>\s*?<div className="lg:hidden flex/g, '<a href="tel:+918524917170" className="flex items-center gap-2 px-6 xl:px-8 h-full bg-sky-500 text-white hover:bg-[#001D3D] transition-colors cursor-pointer group">$1</div></a>\n            <div className="lg:hidden flex');
      fs.writeFileSync(file, content2);
    }
  }
});
console.log('Total updated: ' + count);
