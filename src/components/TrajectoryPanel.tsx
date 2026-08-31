import { useEffect, useState } from "react";
import { Pause, Play, RotateCcw } from "lucide-react";

export function TrajectoryPanel() {
  const [progress, setProgress] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => {
      setProgress((current) => current >= 100 ? 0 : current + 0.25);
    }, 45);
    return () => window.clearInterval(timer);
  }, [playing]);

  const elapsed = (15.4 * progress) / 100;
  const outbound = progress <= 50;
  const velocity = outbound ? (13863 * progress) / 50 : (13863 * (100 - progress)) / 50;
  const phase = progress < 3 ? "Trans-lunar injection" : progress < 48 ? "Continuous acceleration" : progress < 53 ? "Midpoint flip" : progress < 97 ? "Continuous deceleration" : "Lunar capture";

  return (
    <section id="trajectory" className="border-y border-white/10 bg-[#081421] py-24 lg:py-32">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
          <div>
            <p className="eyebrow">Flight dynamics / brachistochrone</p>
            <h2 className="section-title mt-4">Earth to Luna.<br />One continuous arc.</h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-slate-400">The Helion-4 pair accelerates at a crew-safe 0.5 m/s² for half the journey. Lumina then rotates 180° and mirrors the burn to arrive at lunar capture velocity.</p>
          </div>
          <div className="grid grid-cols-3 border-y border-white/10 py-6">
            {[["384,400", "Kilometers"], ["13.86", "km/s peak"], ["15.4", "Hours total"]].map(([value, label]) => (
              <div key={label} className="border-l border-white/10 pl-5 first:border-l-0 first:pl-0 md:pl-8">
                <p className="font-display text-2xl text-white md:text-4xl">{value}</p>
                <p className="mt-2 text-[9px] uppercase tracking-[0.16em] text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-[#050d17]">
          <img src="/assets/lumina-trajectory.png" alt="Earth to Moon continuous-thrust trajectory" className="h-[300px] w-full object-cover opacity-60 md:h-[440px]" />
          <div className="absolute inset-x-6 top-6 flex items-start justify-between md:inset-x-10 md:top-9">
            <div>
              <p className="text-[9px] uppercase tracking-[0.18em] text-slate-500">Active phase</p>
              <p className="mt-1 font-display text-sm text-white md:text-lg">{phase}</p>
            </div>
            <span className="rounded-full border border-[#4b91ea]/30 bg-[#0a1d33]/90 px-3 py-1 text-[10px] font-semibold tracking-wider text-[#8fc0ff]">T+ {elapsed.toFixed(1)} H</span>
          </div>
          <div className="absolute inset-x-[10%] bottom-[30%] h-px bg-[#315986] md:inset-x-[13%]">
            <div className="absolute -top-px left-0 h-[3px] bg-[#4b9aff] transition-[width] duration-75" style={{ width: `${progress}%` }} />
            <div className="absolute -top-2 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-white bg-[#2877dc] shadow-[0_0_18px_#4b9aff] transition-[left] duration-75" style={{ left: `${progress}%` }} />
            <span className="absolute -bottom-7 left-0 text-[9px] uppercase tracking-wider text-slate-500">Earth</span>
            <span className="absolute -bottom-7 right-0 text-[9px] uppercase tracking-wider text-slate-500">Luna</span>
            <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-wider text-[#d4b86a]">Flip · 7.7h</span>
          </div>
          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between md:bottom-8 md:left-10 md:right-10">
            <div className="flex gap-2">
              <button onClick={() => setPlaying(!playing)} className="control-button" aria-label={playing ? "Pause trajectory" : "Play trajectory"}>{playing ? <Pause size={15} /> : <Play size={15} />}</button>
              <button onClick={() => { setProgress(0); setPlaying(false); }} className="control-button" aria-label="Reset trajectory"><RotateCcw size={15} /></button>
            </div>
            <div className="hidden text-right sm:block">
              <p className="font-mono text-sm text-white">{Math.max(0, velocity).toFixed(0)} m/s</p>
              <p className="text-[8px] uppercase tracking-[0.15em] text-slate-500">Instantaneous velocity</p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
          {[
            ["01 / Half-distance", "d = ½at²", "192,200 km"],
            ["02 / Time to flip", "t = √(2d/a)", "27,727 s"],
            ["03 / Total transit", "T = 2 × t½", "55,454 s"],
          ].map(([label, equation, result]) => (
            <div key={label} className="bg-[#0a1625] p-6">
              <p className="text-[9px] uppercase tracking-[0.18em] text-slate-500">{label}</p>
              <p className="mt-4 font-mono text-sm text-[#8fc0ff]">{equation}</p>
              <p className="mt-2 font-display text-xl text-white">{result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
