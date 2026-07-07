import { useContext, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiArrowLeft, FiShoppingCart, FiStar } from 'react-icons/fi';
import { AppContext } from '../context/AppContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ProductDetails() {
  const { id } = useParams();
  const { products, addToCart, darkMode } = useContext(AppContext);
  const product = useMemo(() => products.find((item) => item.id === Number(id)), [products, id]);

  if (!product) {
    return (
      <div className={darkMode ? 'min-h-screen bg-slate-950 text-slate-100' : 'min-h-screen bg-slate-50 text-slate-800'}>
        <Navbar />
        <main className="mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center px-4 py-16">Product not found.</main>
        <Footer />
      </div>
    );
  }

  return (
    <div className={darkMode ? 'min-h-screen bg-slate-950 text-slate-100' : 'min-h-screen bg-slate-50 text-slate-800'}>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Link to="/products" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-brand-600">
          <FiArrowLeft /> Back to products
        </Link>

        <div className={`grid gap-8 rounded-[2rem] border p-6 shadow-sm lg:grid-cols-[0.9fr_1.1fr] ${darkMode ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
          <div className="rounded-[1.5rem] bg-slate-100 p-8">
            <img src={product.image} alt={product.title} className="mx-auto h-72 w-full object-contain" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-600">{product.category}</p>
            <h1 className="mt-3 text-3xl font-semibold">{product.title}</h1>
            <div className="mt-4 flex items-center gap-2 text-amber-500">
              <FiStar />
              <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>{product.rating?.rate || 0}</span>
            </div>
            <p className="mt-5 text-lg text-slate-500">{product.description}</p>
            <div className="mt-8 flex items-center gap-4">
              <span className="text-3xl font-semibold">${product.price}</span>
              <button onClick={() => addToCart(product)} className="flex items-center gap-2 rounded-full bg-brand-600 px-5 py-3 font-medium text-white hover:bg-brand-700">
                <FiShoppingCart /> Add to cart
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
