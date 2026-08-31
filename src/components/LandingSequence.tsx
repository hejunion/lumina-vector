import { useState } from "react";
import { ChevronRight } from "lucide-react";

const stages = [
  { time: "T−32 min", title: "Orbital insertion", altitude: "50 km", detail: "Lumina rotates 180 degrees. Twin Helion-4 drives execute a precision retro-burn, capturing the vessel in low polar orbit while thermal plating radiates the load." },
  { time: "T−08 min", title: "Descent transition", altitude: "12 km", detail: "The airframe enters vertical attitude. Metamorphic wings fold inward to protect sensory arrays as cold-gas RCS maintains exact pitch, yaw, and roll." },
  { time: "T−42 sec", title: "Gimbal handover", altitude: "500 m", detail: "Main drives disengage. Four articulated plasma-gimbal thrusters align with the Aegis kinetic energy diffuser as the belly bifurcates and landing struts extend." },
  { time: "T+00", title: "Surface secure", altitude: "0 m", detail: "Electromagnetic anchor pads lock into ferrous strike plates. Electrodynamic shields clear residual dust before the pressurized habitat tunnel mates with Lumina’s ramp." },
];

export function LandingSequence() {
  const [active, setActive] = useState(0);

  return (
    <section id="touchdown" className="section-shell py-24 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a1625]">
          <img src="/assets/lumina-landing.png" alt="Lumina in vertical lunar touchdown configuration" className="aspect-[4/5] w-full object-cover" />
          <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-[#07101c]/85 px-3 py-1.5 text-[9px] uppercase tracking-[0.18em] text-white backdrop-blur">LDG sequence · live model</div>
          <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#07101c]/90 p-5 backdrop-blur">
            <div className="flex items-end justify-between">
              <div><p className="text-[9px] uppercase tracking-[0.16em] text-slate-500">Configuration</p><p className="mt-1 font-display text-white">Vertical / wings folded</p></div>
              <div className="text-right"><p className="font-mono text-lg text-[#78adf2]">{stages[active].altitude}</p><p className="text-[8px] uppercase tracking-wider text-slate-500">Altitude</p></div>
            </div>
          </div>
        </div>

        <div>
          <p className="eyebrow">Mission phase / lunar descent</p>
          <h2 className="section-title mt-4">Touch down.<br />Leave no crater.</h2>
          <p className="mt-6 max-w-lg text-sm leading-7 text-slate-400">Gravity-repulsion fields diffuse the plasma wake, limiting ejecta and protecting both the vehicle and the landing zone.</p>
          <div className="mt-10 border-t border-white/10">
            {stages.map((stage, index) => (
              <button key={stage.title} onClick={() => setActive(index)} className={`group grid w-full grid-cols-[74px_1fr_auto] items-center gap-4 border-b border-white/10 py-5 text-left transition-colors ${active === index ? "text-white" : "text-slate-500 hover:text-slate-200"}`}>
                <span className={`font-mono text-[10px] ${active === index ? "text-[#d4b86a]" : ""}`}>{stage.time}</span>
                <span className="font-display text-base md:text-lg">{stage.title}</span>
                <ChevronRight size={16} className={`transition-transform ${active === index ? "translate-x-1 text-[#6ba5f1]" : ""}`} />
              </button>
            ))}
          </div>
          <div className="mt-7 min-h-24 rounded-2xl border border-[#3d79bf]/30 bg-[#0d2138] p-5">
            <p className="text-[9px] uppercase tracking-[0.18em] text-[#70aaf7]">Phase {String(active + 1).padStart(2, "0")} telemetry</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">{stages[active].detail}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
