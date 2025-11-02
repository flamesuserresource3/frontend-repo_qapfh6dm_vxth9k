import React from 'react';
import { Rocket, ArrowRight } from 'lucide-react';

function Hero({ theme }) {
  const isRetro = theme === 'retro';

  const bg = isRetro
    ? 'from-[#F5EDE3] to-[#FFF8F0]'
    : 'from-[#E9FBF3] to-[#F7FBFF]';

  const accent = isRetro ? 'bg-[#E8B86D]' : 'bg-[#B3E5D6]';
  const accentHover = isRetro ? 'hover:bg-[#d5a55d]' : 'hover:bg-[#9fd4c6]';
  const textPrimary = isRetro ? 'text-[#2C2A29]' : 'text-[#1F2A37]';
  const subText = isRetro ? 'text-[#6B5E54]' : 'text-[#5B7083]';

  return (
    <section className={`relative w-full overflow-hidden rounded-2xl bg-gradient-to-br ${bg} p-8 md:p-12`}>\n      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div className={`inline-flex items-center gap-2 ${accent} text-[#1f2937] px-3 py-1 rounded-full text-xs font-semibold mb-4`}> 
            <Rocket size={16} />
            Managed Resale, made effortless
          </div>
          <h1 className={`text-3xl md:text-5xl font-extrabold leading-tight ${textPrimary}`}>
            Restyle One-Click
          </h1>
          <p className={`mt-4 text-base md:text-lg ${subText}`}>
            Send your clothes with a prepaid Restyle Bag. We handle vetting, pro photos, and pricing. You get paid — or donate — with zero hassle.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#sell" className={`${accent} ${accentHover} transition-colors text-[#1f2937] font-semibold px-5 py-3 rounded-xl inline-flex items-center gap-2 w-full sm:w-auto justify-center`}>
              Start Selling
              <ArrowRight size={18} />
            </a>
            <a href="#brand-checker" className={`bg-white/70 hover:bg-white transition-colors border border-black/5 px-5 py-3 rounded-xl inline-flex items-center gap-2 w-full sm:w-auto justify-center ${textPrimary}`}>
              Quick Brand Check
            </a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-green-700">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
              Live pilot accepting sellers
            </div>
            <div className={subText}>Avg time ship → listed ≤ 7 days</div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-2xl border border-black/10 bg-white shadow-sm p-4 flex items-center justify-center">
            <div className="text-center">
              <div className="mx-auto mb-3 h-14 w-14 rounded-full bg-black/90 text-white flex items-center justify-center">
                <span className="font-black">R</span>
              </div>
              <p className={`text-sm ${subText}`}>Retro‑modern style. Circular commerce. Delightful by design.</p>
              <p className={`mt-2 text-xs ${subText}`}>Toggle theme below to preview Soft Pastels</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
