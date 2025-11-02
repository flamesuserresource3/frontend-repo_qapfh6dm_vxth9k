import React, { useState } from 'react';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import SellerFlow from './components/SellerFlow';
import BrandCheckerDemo from './components/BrandCheckerDemo';

function App() {
  const [theme, setTheme] = useState('retro'); // 'retro' | 'pastel'
  const isRetro = theme === 'retro';

  const pageBg = isRetro ? 'bg-[#F9F5EE]' : 'bg-[#F6FAFF]';
  const text = isRetro ? 'text-[#2C2A29]' : 'text-[#1F2A37]';

  return (
    <div className={`${pageBg} min-h-screen`}>\n      <div className="max-w-7xl mx-auto px-4 py-6">
        <header className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-black text-white flex items-center justify-center font-black">R</div>
            <div>
              <div className={`font-extrabold ${text}`}>Restyle</div>
              <div className="text-xs text-black/50">Managed resale + wardrobe assistant</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme('retro')}
              className={`px-3 py-1.5 rounded-lg text-sm border ${isRetro ? 'bg-[#E8B86D] text-[#1f2937]' : 'bg-white'} border-black/10`}
            >
              Retro‑Modern
            </button>
            <button
              onClick={() => setTheme('pastel')}
              className={`px-3 py-1.5 rounded-lg text-sm border ${!isRetro ? 'bg-[#B3E5D6] text-[#1f2937]' : 'bg-white'} border-black/10`}
            >
              Soft Pastel
            </button>
          </div>
        </header>

        <Hero theme={theme} />
        <ValueProps theme={theme} />
        <SellerFlow theme={theme} />
        <BrandCheckerDemo theme={theme} />

        <footer className="mt-16 border-t border-black/10 pt-6 text-sm text-black/60">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div>© {new Date().getFullYear()} Restyle — built for circular commerce and delight.</div>
            <div className="flex items-center gap-4">
              <a className="hover:text-black" href="#">Privacy</a>
              <a className="hover:text-black" href="#">Terms</a>
              <a className="hover:text-black" href="#">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
