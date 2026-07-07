import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiMoon, FiShoppingCart, FiSun, FiHeart, FiUser } from 'react-icons/fi';
import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

export default function Navbar() {
  const { cart, wishlist, darkMode, setDarkMode } = useContext(AppContext);
  const [open, setOpen] = useState(false);

  return (
    <header className={`sticky top-0 z-40 border-b backdrop-blur ${darkMode ? 'border-slate-800 bg-slate-950/90 text-slate-100' : 'border-slate-200 bg-white/90 text-slate-700'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-xl font-semibold tracking-tight text-brand-600">
          NovaCart
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'font-semibold text-brand-600' : 'hover:text-brand-600')}>Home</NavLink>
          <NavLink to="/products" className={({ isActive }) => (isActive ? 'font-semibold text-brand-600' : 'hover:text-brand-600')}>Products</NavLink>
          <NavLink to="/wishlist" className={({ isActive }) => (isActive ? 'font-semibold text-brand-600' : 'hover:text-brand-600')}>Wishlist</NavLink>
          <NavLink to="/profile" className={({ isActive }) => (isActive ? 'font-semibold text-brand-600' : 'hover:text-brand-600')}>Profile</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <button onClick={() => setDarkMode(!darkMode)} className={`rounded-full p-2 ${darkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
          <Link to="/wishlist" className={`relative rounded-full p-2 ${darkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
            <FiHeart />
            {wishlist.length > 0 && <span className="absolute -right-1 -top-1 rounded-full bg-brand-600 px-1.5 py-0.5 text-[10px] text-white">{wishlist.length}</span>}
          </Link>
          <Link to="/cart" className={`relative rounded-full p-2 ${darkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
            <FiShoppingCart />
            {cart.length > 0 && <span className="absolute -right-1 -top-1 rounded-full bg-brand-600 px-1.5 py-0.5 text-[10px] text-white">{cart.length}</span>}
          </Link>
          <Link to="/login" className={`hidden rounded-full p-2 md:flex ${darkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
            <FiUser />
          </Link>
          <button className="rounded-full p-2 md:hidden" onClick={() => setOpen(!open)}>
            <FiMenu />
          </button>
        </div>
      </div>

      {open && (
        <div className={`border-t px-4 py-3 md:hidden ${darkMode ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-white'}`}>
          <div className="flex flex-col gap-3">
            <NavLink to="/" onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? 'font-semibold text-brand-600' : '')}>Home</NavLink>
            <NavLink to="/products" onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? 'font-semibold text-brand-600' : '')}>Products</NavLink>
            <NavLink to="/wishlist" onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? 'font-semibold text-brand-600' : '')}>Wishlist</NavLink>
            <NavLink to="/profile" onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? 'font-semibold text-brand-600' : '')}>Profile</NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
