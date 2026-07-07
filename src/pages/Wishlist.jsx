import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AppContext } from '../context/AppContext';
import ProductCard from '../components/ProductCard';

export default function Wishlist() {
  const { wishlist, darkMode } = useContext(AppContext);

  return (
    <div className={darkMode ? 'min-h-screen bg-slate-950 text-slate-100' : 'min-h-screen bg-slate-50 text-slate-800'}>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-brand-600">Saved items</p>
            <h1 className="text-3xl font-semibold">Your wishlist</h1>
          </div>
          <Link to="/products" className="text-sm font-medium text-brand-600">Browse more</Link>
        </div>

        {wishlist.length === 0 ? (
          <div className={`mt-8 rounded-[1.5rem] border p-10 text-center ${darkMode ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
            <p className="text-lg">No saved items yet.</p>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {wishlist.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
