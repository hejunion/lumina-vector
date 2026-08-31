import { useState } from "react";
import { Blocks, RadioTower, ShieldCheck, Wind } from "lucide-react";

const systems = [
  {
    id: "01",
    name: "Crater shielding",
    code: "SITE / UMBRA",
    icon: ShieldCheck,
    position: "left-[15%] top-[28%]",
    description: "A natural crater under 1.5 km in diameter turns its walls into topographic shields. Surface assets occupy the resulting umbrella zones, isolated from high-velocity ejecta.",
    metric: "<1.5 km",
    metricLabel: "Crater diameter",
  },
  {
    id: "02",
    name: "ISRU hex foundation",
    code: "PAD / REG-PEEK",
    icon: Blocks,
    position: "left-[45%] top-[58%]",
    description: "Replaceable hexagonal tiles blend local regolith with a minimal PEEK binder, then compact and thermally process the mixture into a load-bearing landing surface.",
    metric: "Local mass",
    metricLabel: "Primary feedstock",
  },
  {
    id: "03",
    name: "Plume control",
    code: "KED / ACTIVE",
    icon: Wind,
    position: "left-[61%] top-[40%]",
    description: "The raised kinetic energy diffuser redirects gimbal exhaust radially. A perimeter deflector then routes the flow safely beyond the structural pad and habitat corridor.",
    metric: "Radial",
    metricLabel: "Exhaust vector",
  },
  {
    id: "04",
    name: "Sterile interface",
    code: "EDS / DOCK",
    icon: RadioTower,
    position: "left-[78%] top-[66%]",
    description: "Electrodynamic fields sweep charged grains from struts and umbilicals before a flexible pressurized tunnel mates the habitat airlock directly to Lumina’s deployed ramp.",
    metric: "Continuous",
    metricLabel: "Dust rejection",
  },
];

const fabrication = [
  ["01", "Harvest", "Local regolith graded on site"],
  ["02", "Bind", "Low-ratio PEEK mechanical blend"],
  ["03", "Form", "Compacted in modular hex molds"],
  ["04", "Fuse", "Thermally processed structure"],
];

export function AegisArray() {
  const [active, setActive] = useState(0);
  const system = systems[active];
  const Icon = system.icon;

  return (
    <section id="aegis" className="border-y border-white/10 bg-[#081421] py-24 lg:py-32">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-end">
          <div>
            <p className="eyebrow">Surface architecture / Aegis docking array</p>
            <h2 className="section-title mt-4 max-w-3xl">The landing site becomes part of the spacecraft.</h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-slate-400 lg:justify-self-end">A crater-integrated, in-situ-built port that controls plume energy, immobilizes abrasive regolith, and creates a sterile path from touchdown to habitat.</p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-[#091523]">
          <div className="relative min-h-[360px] md:min-h-[580px]">
            <img src="/assets/aegis-docking-array.png" alt="Aegis Docking Array inside a shielded lunar crater" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[#07101c]/20" />
            {systems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActive(index)}
                aria-label={`Inspect ${item.name}`}
                className={`absolute ${item.position} flex h-10 w-10 items-center justify-center rounded-full border font-mono text-[10px] transition-all md:h-12 md:w-12 ${active === index ? "scale-110 border-white bg-[#2f7de1] text-white shadow-[0_0_26px_rgba(59,130,246,.85)]" : "border-white/60 bg-[#07101c]/80 text-white hover:border-[#8dbbff]"}`}
              >
                {item.id}
              </button>
            ))}
            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-[#07101c]/85 px-3 py-1.5 text-[9px] uppercase tracking-[0.16em] text-white backdrop-blur md:left-7 md:top-7">
              <span className="h-1.5 w-1.5 rounded-full bg-[#55a1ff] shadow-[0_0_8px_#55a1ff]" /> Site topology model
            </div>
          </div>

          <div className="grid gap-7 border-t border-white/10 p-6 md:grid-cols-[.65fr_1.35fr] md:p-10">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#4c91ed]/40 bg-[#12325a] text-[#83b8ff]"><Icon size={21} /></div>
              <div><p className="font-mono text-[9px] text-[#d4b86a]">{system.code}</p><h3 className="mt-2 font-display text-xl text-white md:text-2xl">{system.name}</h3></div>
            </div>
            <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
              <p className="text-sm leading-7 text-slate-300">{system.description}</p>
              <div className="border-l border-white/10 pl-6"><p className="whitespace-nowrap font-mono text-lg text-[#8fc0ff]">{system.metric}</p><p className="mt-1 whitespace-nowrap text-[8px] uppercase tracking-[0.15em] text-slate-500">{system.metricLabel}</p></div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="eyebrow">ISRU fabrication loop</p>
            <h3 className="mt-4 font-display text-3xl leading-tight text-white">Build the pad from the ground beneath it.</h3>
            <p className="mt-5 text-sm leading-7 text-slate-400">Microwave-sintered roads and a UV-cured polymer apron extend the hardened zone beyond the modular core without exporting bulk construction mass from Earth.</p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {fabrication.map(([number, title, detail]) => (
              <div key={number} className="flex gap-4 bg-[#0a1625] p-6">
                <span className="font-mono text-[10px] text-[#d4b86a]">{number}</span>
                <div><p className="font-display text-base text-white">{title}</p><p className="mt-2 text-xs leading-5 text-slate-500">{detail}</p></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
          {[
            ["Microwave sintering", "Roadways", "Regolith powder is fused into ceramic access surfaces."],
            ["UV polymer resin", "Apron", "An elastic coating stabilizes gravel through thermal cycles."],
            ["Electrodynamic shield", "Interfaces", "Dielectrophoretic forces displace charged dust continuously."],
          ].map(([title, label, text]) => (
            <div key={title} className="bg-[#091523] p-6 md:p-8"><p className="text-[9px] uppercase tracking-[0.18em] text-[#6fa8f3]">{label}</p><h4 className="mt-3 font-display text-lg text-white">{title}</h4><p className="mt-3 text-xs leading-6 text-slate-400">{text}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}
