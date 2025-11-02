import React from 'react';
import { Shield, Shirt, Leaf, Camera } from 'lucide-react';

const cards = [
  {
    icon: Shield,
    title: 'Trust through curation',
    desc: 'Centralized vetting and professional photos. We price with comps and protect buyers and sellers.'
  },
  {
    icon: Shirt,
    title: 'Try-before-you-buy',
    desc: 'Virtual Try-On preview to boost confidence and reduce returns — even using your actual closet items.'
  },
  {
    icon: Camera,
    title: 'Pro photos included',
    desc: 'We style and shoot your items for maximum sell‑through. Keep the vibe consistent with vintage‑friendly tones.'
  },
  {
    icon: Leaf,
    title: 'Sustainability built‑in',
    desc: 'Track cost‑per‑wear, water saved, and eco badges. Opt into donations or Restyle Credits for extra rewards.'
  }
];

function ValueProps({ theme }) {
  const isRetro = theme === 'retro';
  const cardBg = isRetro ? 'bg-[#FFFDF8]' : 'bg-white';
  const border = isRetro ? 'border-black/10' : 'border-black/5';
  const title = isRetro ? 'text-[#2C2A29]' : 'text-[#1F2A37]';
  const desc = isRetro ? 'text-[#6B5E54]' : 'text-[#5B7083]';

  return (
    <section className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map(({ icon: Icon, title: t, desc: d }) => (
          <div key={t} className={`rounded-xl ${cardBg} border ${border} p-5 shadow-sm h-full`}>
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-lg bg-black/90 text-white flex items-center justify-center">
                <Icon size={20} />
              </div>
              <div>
                <h3 className={`font-semibold ${title}`}>{t}</h3>
                <p className={`text-sm mt-1 ${desc}`}>{d}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ValueProps;
