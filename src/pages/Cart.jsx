import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AppContext } from '../context/AppContext';

export default function Cart() {
  const { cart, updateCartQuantity, removeFromCart, darkMode } = useContext(AppContext);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={darkMode ? 'min-h-screen bg-slate-950 text-slate-100' : 'min-h-screen bg-slate-50 text-slate-800'}>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold">Your cart</h1>
        {cart.length === 0 ? (
          <div className={`mt-8 rounded-[1.5rem] border p-10 text-center ${darkMode ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
            <p className="text-lg">Your cart is empty.</p>
            <Link to="/products" className="mt-4 inline-flex rounded-full bg-brand-600 px-5 py-3 font-medium text-white">Continue shopping</Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className={`flex flex-col gap-4 rounded-[1.5rem] border p-4 shadow-sm sm:flex-row sm:items-center ${darkMode ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
                  <img src={item.image} alt={item.title} className="h-24 w-24 object-contain" />
                  <div className="flex-1">
                    <h2 className="font-semibold">{item.title}</h2>
                    <p className="mt-1 text-sm text-slate-500">${item.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateCartQuantity(item.id, -1)} className="rounded-full border p-2"><FiMinus /></button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button onClick={() => updateCartQuantity(item.id, 1)} className="rounded-full border p-2"><FiPlus /></button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="rounded-full p-2 text-rose-500"><FiTrash2 /></button>
                </div>
              ))}
            </div>
            <div className={`rounded-[1.5rem] border p-6 shadow-sm ${darkMode ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
              <h2 className="text-xl font-semibold">Order summary</h2>
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between"><span>Shipping</span><span>Free</span></div>
                <div className="flex justify-between text-base font-semibold"><span>Total</span><span>${subtotal.toFixed(2)}</span></div>
              </div>
              <button className="mt-6 w-full rounded-full bg-brand-600 px-5 py-3 font-medium text-white">Checkout</button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
