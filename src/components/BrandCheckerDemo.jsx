import React, { useState } from 'react';
import { Upload, BadgeCheck } from 'lucide-react';

function mockBrandCheck(fileName) {
  const lower = fileName.toLowerCase();
  const brands = ['zara', 'h&m', 'uniqlo', 'levi', 'nike', 'adidas', 'gap', 'mango'];
  const found = brands.find(b => lower.includes(b));
  const eligible = !lower.includes('stain') && !lower.includes('rip') && !lower.includes('damaged');
  const price = 20 + Math.floor(Math.random() * 80);
  return {
    brand: found ? found.toUpperCase() : 'Unknown',
    eligible,
    reason: eligible ? 'Looks good for intake' : 'Condition issues detected in filename',
    priceEstimate: `₹${price * 100}`,
  };
}

function BrandCheckerDemo({ theme }) {
  const [result, setResult] = useState(null);
  const [preview, setPreview] = useState(null);
  const isRetro = theme === 'retro';
  const header = isRetro ? 'text-[#2C2A29]' : 'text-[#1F2A37]';
  const sub = isRetro ? 'text-[#6B5E54]' : 'text-[#5B7083]';
  const accent = isRetro ? 'bg-[#E8B86D]' : 'bg-[#B3E5D6]';

  const onFile = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setPreview(URL.createObjectURL(f));
    const res = mockBrandCheck(f.name);
    setResult(res);
  };

  return (
    <section id="brand-checker" className="mt-12">
      <h2 className={`text-2xl font-bold ${header}`}>Brand Checker (demo)</h2>
      <p className={`mt-1 text-sm ${sub}`}>Upload an item photo to get an instant eligibility hint and a rough price estimate.</p>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <label className="col-span-1 md:col-span-2 border-2 border-dashed border-black/10 rounded-xl p-6 bg-white flex flex-col items-center justify-center cursor-pointer">
          <input type="file" accept="image/*" className="hidden" onChange={onFile} />
          {preview ? (
            <img src={preview} alt="preview" className="max-h-56 rounded-md object-contain" />
          ) : (
            <div className="text-center text-black/60">
              <Upload className="mx-auto mb-2" />
              <div className="font-medium">Drop an image or click to upload</div>
              <div className="text-xs">Supported: PNG, JPG (demo only, runs locally)</div>
            </div>
          )}
        </label>
        <div className="border border-black/10 rounded-xl p-5 bg-white">
          {!result ? (
            <div className={`text-sm ${sub}`}>No image uploaded yet.</div>
          ) : (
            <div>
              <div className={`inline-flex items-center gap-2 ${accent} text-[#1f2937] px-2.5 py-1 rounded-full text-xs font-semibold`}>
                <BadgeCheck size={16} />
                {result.eligible ? 'Eligible' : 'Review needed'}
              </div>
              <div className="mt-3 text-sm">
                <div><span className="font-semibold">Brand:</span> {result.brand}</div>
                <div><span className="font-semibold">Price estimate:</span> {result.priceEstimate}</div>
                <div className="text-black/60 mt-1">{result.reason}</div>
              </div>
              <button className="mt-4 w-full px-3 py-2 text-sm rounded-lg bg-black text-white">Request a Restyle Bag</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default BrandCheckerDemo;
