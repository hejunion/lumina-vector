import { useState } from "react";
import { Activity, Leaf, Orbit, ShieldCheck } from "lucide-react";

const decks = [
  {
    id: "01",
    name: "The Oculus",
    role: "Command & astrogation",
    description: "Panoramic tactical oversight built around the Dyad 4.0 Holo-Plinth. Kinetic-gel flight stations absorb load during high-burn maneuvers.",
    metrics: [["Visibility", "270°"], ["Stations", "02"], ["AI latency", "<1 ms"]],
    icon: Orbit,
    position: "left-[18%] top-[38%]",
  },
  {
    id: "02",
    name: "Habitation",
    role: "Biosphere & crew systems",
    description: "Four smart-matter sleep pods and a living hydroponic wall sustain eight crew members while continuously scrubbing cabin carbon dioxide.",
    metrics: [["Crew", "04–08"], ["Endurance", "40 days"], ["Bio-loop", "96.4%"]],
    icon: Leaf,
    position: "left-[48%] top-[44%]",
  },
  {
    id: "03",
    name: "The Catacombs",
    role: "Engineering & deployment",
    description: "Water-shielded aft deck containing fusion confinement, environmental scrubbers, EVA airlock, and the telescoping surface ramp.",
    metrics: [["Shielding", "H₂O"], ["Reactor", "Harmonic"], ["Airlocks", "01"]],
    icon: ShieldCheck,
    position: "left-[76%] top-[48%]",
  },
];

export function DeckExplorer() {
  const [selected, setSelected] = useState(0);
  const deck = decks[selected];
  const Icon = deck.icon;

  return (
    <section id="ecosystem" className="section-shell py-24 lg:py-32">
      <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="eyebrow">Internal topology / 03 decks</p>
          <h2 className="section-title mt-4 max-w-2xl">A vessel designed around its crew.</h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-slate-400">Select a deck to isolate its life-support, command, and deployment systems within the airframe.</p>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a1625]">
        <div className="relative min-h-[300px] border-b border-white/10 md:min-h-[500px]">
          <img src="/assets/lumina-cutaway.png" alt="Lumina three-deck technical cutaway" className="absolute inset-0 h-full w-full object-cover opacity-85" />
          <div className="absolute inset-0 bg-[#07101c]/25" />
          {decks.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setSelected(index)}
              aria-label={`View ${item.name}`}
              className={`absolute ${item.position} flex h-9 w-9 items-center justify-center rounded-full border text-[10px] font-bold transition-all md:h-11 md:w-11 ${selected === index ? "scale-110 border-[#8dbbff] bg-[#2f7de1] text-white shadow-[0_0_28px_rgba(59,130,246,.75)]" : "border-white/50 bg-[#07101c]/80 text-white hover:border-white"}`}
            >
              {item.id}
            </button>
          ))}
          <div className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-[#07101c]/80 px-3 py-1.5 text-[9px] uppercase tracking-[0.18em] text-slate-300 backdrop-blur md:bottom-6 md:left-6">Interactive cutaway · select node</div>
        </div>

        <div className="grid gap-8 p-6 md:grid-cols-[1fr_1.4fr] md:p-10 lg:p-12">
          <div className="flex gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#4c91ed]/40 bg-[#12325a] text-[#83b8ff]"><Icon size={22} /></div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#d4b86a]">Deck {deck.id} · {deck.role}</p>
              <h3 className="mt-2 font-display text-2xl text-white md:text-3xl">{deck.name}</h3>
            </div>
          </div>
          <div>
            <p className="max-w-2xl text-sm leading-7 text-slate-300 md:text-base">{deck.description}</p>
            <div className="mt-7 grid grid-cols-3 border-t border-white/10 pt-5">
              {deck.metrics.map(([label, value]) => (
                <div key={label} className="border-l border-white/10 pl-4 first:border-l-0 first:pl-0">
                  <p className="font-display text-lg text-white md:text-xl">{value}</p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-slate-500"><Activity size={13} className="text-[#4c91ed]" /> Dyad 4.0 environmental telemetry synchronized</div>
    </section>
  );
}
