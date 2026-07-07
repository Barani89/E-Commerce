import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function HeroSection() {
  const { darkMode } = useContext(AppContext);

  return (
    <section className={`rounded-[2rem] p-8 shadow-soft sm:p-10 lg:p-14 ${darkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-800'}`}>
      <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="mb-4 inline-flex rounded-full bg-brand-100 px-3 py-1 text-sm font-medium text-brand-700">New season arrivals</p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">Elevated essentials for modern living.</h1>
          <p className="mt-4 max-w-xl text-lg text-slate-500">Shop curated fashion, tech, and home finds with a premium experience built for effortless browsing.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/products" className="rounded-full bg-brand-600 px-5 py-3 font-medium text-white transition hover:bg-brand-700">Explore products</Link>
            <Link to="/wishlist" className={`rounded-full border px-5 py-3 font-medium ${darkMode ? 'border-slate-700 hover:bg-slate-800' : 'border-slate-300 hover:bg-slate-50'}`}>View wishlist</Link>
          </div>
        </div>

        <div className={`rounded-[1.5rem] p-6 ${darkMode ? 'bg-slate-800' : 'bg-slate-50'}`}>
          <div className="rounded-[1.25rem] bg-gradient-to-br from-brand-500 to-violet-400 p-6 text-white">
            <p className="text-sm uppercase tracking-[0.3em]">Featured Drop</p>
            <h2 className="mt-3 text-2xl font-semibold">Smart essentials, beautifully delivered.</h2>
            <p className="mt-2 text-sm text-violet-100">Premium picks with fast delivery and polished details.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
