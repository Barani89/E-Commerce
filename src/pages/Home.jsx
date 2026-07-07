import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import Footer from '../components/Footer';

export default function Home() {
  const { darkMode } = useContext(AppContext);

  return (
    <div className={darkMode ? 'min-h-screen bg-slate-950 text-slate-100' : 'min-h-screen bg-slate-50 text-slate-800'}>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <HeroSection />
        <section className="mt-10">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-brand-600">Featured picks</p>
              <h2 className="text-2xl font-semibold">Trending now</h2>
            </div>
            <a href="/products" className="text-sm font-medium text-brand-600">View all</a>
          </div>
          <FeaturedProducts />
        </section>
      </main>
      <Footer />
    </div>
  );
}
