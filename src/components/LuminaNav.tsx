import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  ["Architecture", "#architecture"],
  ["Ecosystem", "#ecosystem"],
  ["Trajectory", "#trajectory"],
  ["Touchdown", "#touchdown"],
];

export function LuminaNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#07101c]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-5 lg:px-10">
        <a href="#top" className="flex items-center gap-3" aria-label="Lumina Vector home">
          <img src="/assets/lumina-mark.png" alt="" className="h-9 w-9 rounded-full object-cover ring-1 ring-[#d4b86a]/40" />
          <span className="font-display text-sm font-semibold tracking-[0.22em] text-white">LUMINA <span className="text-[#71a9ff]">VECTOR</span></span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-300 transition-colors hover:text-white">{label}</a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#8eb8f7]"><i className="h-1.5 w-1.5 rounded-full bg-[#50a0ff] shadow-[0_0_10px_#50a0ff]" /> System nominal</span>
        </div>
        <button onClick={() => setOpen(!open)} className="rounded-full border border-white/15 p-2 text-white lg:hidden" aria-label="Toggle navigation">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-white/10 bg-[#07101c] px-5 py-5 lg:hidden">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="block border-b border-white/10 py-4 text-sm uppercase tracking-[0.18em] text-slate-200">{label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
