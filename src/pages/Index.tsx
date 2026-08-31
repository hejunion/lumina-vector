import { ArrowDown, ArrowUpRight, Atom, Eye, Gauge, Move3d, Radio, Shield, Sparkles, Users } from "lucide-react";
import { DeckExplorer } from "@/components/DeckExplorer";
import { LandingSequence } from "@/components/LandingSequence";
import { LuminaNav } from "@/components/LuminaNav";
import { TrajectoryPanel } from "@/components/TrajectoryPanel";

const systems = [
  { icon: Atom, code: "PROP / 01", title: "Helion-4 pulse drive", text: "Twin fusion drives confine and funnel plasma through localized magnetic fields, producing sustained thrust and a brilliant blue wake.", stat: "0.5 m/s²", label: "Cruise acceleration" },
  { icon: Move3d, code: "PROP / 02", title: "Embedded RCS", text: "Omnidirectional cold-gas control nodes disappear into the hull geometry, preserving the uninterrupted biomimetic silhouette.", stat: "6 DOF", label: "Attitude control" },
  { icon: Sparkles, code: "POWER / 01", title: "Harmonic reactor", text: "A miniaturized dark-matter core held in magnetic suspension supplies continuous mission power without radioactive byproducts.", stat: "1.8 PW", label: "Peak output" },
  { icon: Radio, code: "AVIO / 04", title: "Dyad 4.0 cortex", text: "Quantum-speed stellar telemetry resolves micro-meteoroid threats, orbital solutions, and autonomous landing sequences.", stat: "12 μs", label: "Response loop" },
];

const comparisons = [
  ["Transit model", "Continuous thrust", "Coast / Hohmann"],
  ["Earth–Moon time", "15.4 hours", "72+ hours"],
  ["Peak velocity", "13.86 km/s", "≈10.8 km/s"],
  ["Crew gravity", "0.05 g sustained", "Microgravity"],
  ["Landing plume", "Low-ejecta gimbal", "High-ejecta chemical"],
];

export default function Index() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-[#07101c] text-slate-100">
      <LuminaNav />

      <section className="relative min-h-[880px] overflow-hidden border-b border-white/10 pt-16 lg:min-h-screen">
        <img src="/assets/lumina-hero.png" alt="Lumina interceptor approaching the Moon" className="absolute inset-0 h-full w-full object-cover object-[62%_center]" />
        <div className="absolute inset-0 bg-[#06101c]/55" />
        <div className="absolute inset-y-0 left-0 w-[62%] bg-[#06101c]/70" />
        <div className="section-shell relative flex min-h-[816px] flex-col justify-center py-20 lg:min-h-[calc(100vh-4rem)]">
          <div className="max-w-3xl animate-enter">
            <div className="mb-7 flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-[#91bffb]">
              <span className="h-px w-10 bg-[#5f9ce9]" />
              Earth–Luna rapid transit system
            </div>
            <h1 className="font-display text-[clamp(3.7rem,9vw,8.5rem)] font-medium leading-[.82] tracking-[-0.055em] text-[#f3f1e9]">
              FORM,<br /><span className="text-[#83b8ff]">WITHOUT</span><br />COMPROMISE.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-slate-300 md:text-lg">A 72-meter lunar interceptor engineered where high-concept elegance meets the unforgiving mathematics of orbital flight.</p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#architecture" className="inline-flex items-center gap-3 rounded-full bg-[#e8edf5] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#07101c] transition-transform hover:-translate-y-0.5">Explore the vessel <ArrowDown size={15} /></a>
              <a href="#trajectory" className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-[#07101c]/50 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur transition-colors hover:border-[#7aacf1]">Run trajectory <ArrowUpRight size={15} /></a>
            </div>
          </div>

          <div className="absolute bottom-7 left-5 right-5 hidden items-end justify-between border-t border-white/15 pt-5 md:flex lg:left-10 lg:right-10">
            <div className="flex gap-12">
              {[["LV-01", "Vessel class"], ["08", "Maximum crew"], ["40D", "Autonomous endurance"]].map(([value, label]) => (
                <div key={label}><p className="font-mono text-sm text-white">{value}</p><p className="mt-1 text-[8px] uppercase tracking-[0.16em] text-slate-400">{label}</p></div>
              ))}
            </div>
            <p className="max-w-[230px] text-right text-[9px] uppercase leading-5 tracking-[0.16em] text-slate-400">Lumina-class engineering dossier<br />Revision 04.28 / Flight architecture</p>
          </div>
        </div>
      </section>

      <section id="architecture" className="section-shell py-24 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="eyebrow">Airframe / exterior architecture</p>
            <h2 className="section-title mt-4">A living surface,<br />for a hostile void.</h2>
          </div>
          <div className="lg:pt-12">
            <p className="max-w-2xl font-display text-xl leading-8 text-slate-200 md:text-2xl md:leading-10">The carbon-silicate skin shifts from polished obsidian in atmosphere to iridescent alabaster under direct solar radiation.</p>
            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {[
                [Eye, "Panoramic", "Aluminum-oxynitride observation blisters provide distortion-free lunar approach views."],
                [Gauge, "Responsive", "Metamorphic wings protect sensory arrays during descent without compromising flight geometry."],
                [Shield, "Resilient", "Seamless composite construction distributes load without traditional structural weak points."],
              ].map(([Icon, title, text]) => {
                const ItemIcon = Icon as typeof Eye;
                return <div key={title as string} className="border-t border-white/10 pt-5"><ItemIcon size={19} className="text-[#6fa8f3]" /><h3 className="mt-5 font-display text-lg text-white">{title as string}</h3><p className="mt-3 text-xs leading-6 text-slate-400">{text as string}</p></div>;
              })}
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 lg:grid-cols-4">
          {systems.map((system) => (
            <article key={system.code} className="group bg-[#091523] p-7 transition-colors hover:bg-[#0c1c30] lg:min-h-[360px]">
              <div className="flex items-start justify-between"><system.icon size={22} className="text-[#72aaf2]" /><span className="font-mono text-[9px] text-[#d4b86a]">{system.code}</span></div>
              <h3 className="mt-12 font-display text-xl text-white">{system.title}</h3>
              <p className="mt-4 text-xs leading-6 text-slate-400">{system.text}</p>
              <div className="mt-8 border-t border-white/10 pt-5"><p className="font-mono text-lg text-[#91bffb]">{system.stat}</p><p className="mt-1 text-[8px] uppercase tracking-[0.16em] text-slate-500">{system.label}</p></div>
            </article>
          ))}
        </div>
      </section>

      <DeckExplorer />
      <TrajectoryPanel />

      <section className="section-shell py-24 lg:py-32">
        <div className="mb-12 grid gap-5 md:grid-cols-2 md:items-end">
          <div><p className="eyebrow">Performance delta</p><h2 className="section-title mt-4">Beyond the coast.</h2></div>
          <p className="max-w-md text-sm leading-7 text-slate-400 md:justify-self-end">A direct comparison between the Lumina continuous-thrust profile and a conventional chemical lunar transfer.</p>
        </div>
        <div className="overflow-x-auto rounded-[2rem] border border-white/10 bg-[#091523]">
          <div className="min-w-[680px]">
            <div className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-white/10 px-8 py-5 text-[9px] uppercase tracking-[0.18em] text-slate-500">
              <span>Mission parameter</span><span className="text-[#85b7f7]">Lumina / Helion-4</span><span>Conventional architecture</span>
            </div>
            {comparisons.map(([metric, lumina, legacy]) => (
              <div key={metric} className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-white/10 px-8 py-5 text-sm last:border-b-0">
                <span className="font-medium text-white">{metric}</span><span className="font-mono text-[#91bffb]">{lumina}</span><span className="text-slate-500">{legacy}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LandingSequence />

      <section className="border-t border-white/10 bg-[#e8edf5] text-[#0a1726]">
        <div className="section-shell grid gap-12 py-20 lg:grid-cols-[1fr_auto] lg:items-end lg:py-28">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#286bbf]">Mission readiness / confirmed</p>
            <h2 className="mt-5 max-w-4xl font-display text-4xl leading-[.95] tracking-[-0.04em] md:text-7xl">THE MOON IS<br />ONLY 15.4 HOURS AWAY.</h2>
          </div>
          <div className="lg:text-right"><p className="text-sm font-semibold">Lumina-class / Vehicle 01</p><p className="mt-2 text-xs text-slate-600">Direct intercept architecture<br />Crew-rated · Polar capable</p></div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#07101c]">
        <div className="section-shell flex flex-col gap-6 py-8 text-[9px] uppercase tracking-[0.16em] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3"><img src="/assets/lumina-mark.png" alt="" className="h-7 w-7 rounded-full object-cover" /><span>Lumina Vector / Engineering flight systems</span></div>
          <div className="flex gap-6"><span>72m length</span><span>800t landed mass</span><span>4–8 crew</span></div>
        </div>
      </footer>
    </main>
  );
}
