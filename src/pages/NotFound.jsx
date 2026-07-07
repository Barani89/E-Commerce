import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function NotFound() {
  const { darkMode } = useContext(AppContext);

  return (
    <div className={darkMode ? 'min-h-screen bg-slate-950 text-slate-100' : 'min-h-screen bg-slate-50 text-slate-800'}>
      <Navbar />
      <main className="mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className={`rounded-[2rem] border p-10 text-center shadow-sm ${darkMode ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-600">404</p>
          <h1 className="mt-3 text-4xl font-semibold">Page not found</h1>
          <p className="mt-3 text-slate-500">The page you are looking for has moved or no longer exists.</p>
          <Link to="/" className="mt-6 inline-flex rounded-full bg-brand-600 px-5 py-3 font-medium text-white">Go home</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
