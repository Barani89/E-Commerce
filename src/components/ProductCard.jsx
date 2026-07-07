import { useContext } from 'react';
import { FiHeart, FiShoppingCart, FiStar } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

export default function ProductCard({ product }) {
  const { darkMode, addToCart, addToWishlist, wishlist } = useContext(AppContext);
  const inWishlist = wishlist.some((item) => item.id === product.id);

  return (
    <article className={`group overflow-hidden rounded-[1.5rem] border shadow-sm transition hover:-translate-y-1 hover:shadow-soft ${darkMode ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
      <div className="relative h-56 overflow-hidden bg-slate-100 p-5">
        <img src={product.image} alt={product.title} className="h-full w-full object-contain transition duration-300 group-hover:scale-105" />
        <button onClick={() => addToWishlist(product)} className={`absolute right-3 top-3 rounded-full p-2 ${inWishlist ? 'bg-brand-600 text-white' : darkMode ? 'bg-slate-800 text-slate-100' : 'bg-white text-slate-700'}`}>
          <FiHeart />
        </button>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm capitalize text-slate-500">{product.category}</p>
            <h3 className="mt-1 line-clamp-2 text-base font-semibold">{product.title}</h3>
          </div>
          <span className="rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700">${product.price}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-amber-500">
          <FiStar />
          <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>{product.rating?.rate || 0}</span>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={() => addToCart(product)} className="flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-brand-700">
            <FiShoppingCart /> Add to cart
          </button>
          <Link to={`/products/${product.id}`} className={`rounded-full border px-4 py-2.5 text-sm font-medium ${darkMode ? 'border-slate-700 hover:bg-slate-800' : 'border-slate-300 hover:bg-slate-50'}`}>
            View
          </Link>
        </div>
      </div>
    </article>
  );
}
