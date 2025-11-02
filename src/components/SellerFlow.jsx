import React from 'react';
import { Package, CheckCircle, Camera, Rocket } from 'lucide-react';

const steps = [
  { key: 'Bag', icon: Package, title: 'Request Restyle Bag', desc: 'Pick payout or charity option. Prepaid label included.' },
  { key: 'Receive', icon: CheckCircle, title: 'We Receive & QA', desc: 'Vetting for brand, condition, authenticity.' },
  { key: 'Photo', icon: Camera, title: 'Styled Photos', desc: 'Studio shots with consistent, vintage‑friendly palette.' },
  { key: 'Live', icon: Rocket, title: 'Listed & Sold', desc: 'AI price suggestion + instant sale notifications.' },
];

function SellerFlow({ theme }) {
  const isRetro = theme === 'retro';
  const header = isRetro ? 'text-[#2C2A29]' : 'text-[#1F2A37]';
  const sub = isRetro ? 'text-[#6B5E54]' : 'text-[#5B7083]';
  const stamp = isRetro ? 'bg-[#E8B86D]' : 'bg-[#B3E5D6]';

  return (
    <section id="sell" className="mt-12">
      <div className="flex items-center justify-between mb-4">
        <h2 className={`text-2xl font-bold ${header}`}>Sell in one click</h2>
        <span className={`text-xs font-semibold ${stamp} text-[#1f2937] px-3 py-1 rounded-full`}>Retro‑stamp: Track statuses</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {steps.map((s, i) => (
          <div key={s.key} className="rounded-xl bg-white border border-black/10 p-5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-black/90 text-white flex items-center justify-center">
                <s.icon size={20} />
              </div>
              <div>
                <div className="text-xs text-black/50">Step {i + 1}</div>
                <h3 className={`font-semibold ${header}`}>{s.title}</h3>
              </div>
            </div>
            <p className={`mt-2 text-sm ${sub}`}>{s.desc}</p>
            {i === 0 && (
              <div className="mt-4 flex gap-2">
                <button className="px-3 py-2 text-sm rounded-lg bg-black text-white">Get a Bag</button>
                <button className="px-3 py-2 text-sm rounded-lg bg-white border border-black/10">Print a Label</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default SellerFlow;
