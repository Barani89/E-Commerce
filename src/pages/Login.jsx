import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function Login() {
  const { darkMode } = useContext(AppContext);

  return (
    <div className={darkMode ? 'min-h-screen bg-slate-950 text-slate-100' : 'min-h-screen bg-slate-50 text-slate-800'}>
      <Navbar />
      <main className="mx-auto flex max-w-7xl items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className={`w-full max-w-md rounded-[2rem] border p-8 shadow-sm ${darkMode ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
          <h1 className="text-3xl font-semibold">Welcome back</h1>
          <p className="mt-2 text-sm text-slate-500">Sign in to continue your premium shopping journey.</p>
          <form className="mt-8 space-y-4">
            <input className={`w-full rounded-full border px-4 py-3 outline-none ${darkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-slate-50'}`} placeholder="Email" />
            <input type="password" className={`w-full rounded-full border px-4 py-3 outline-none ${darkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-slate-50'}`} placeholder="Password" />
            <button className="w-full rounded-full bg-brand-600 px-5 py-3 font-medium text-white">Sign in</button>
          </form>
          <p className="mt-6 text-center text-sm text-slate-500">
            New here? <Link to="/register" className="font-semibold text-brand-600">Create an account</Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
