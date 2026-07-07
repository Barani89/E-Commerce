import { useContext } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AppContext } from '../context/AppContext';

export default function Profile() {
  const { darkMode } = useContext(AppContext);

  return (
    <div className={darkMode ? 'min-h-screen bg-slate-950 text-slate-100' : 'min-h-screen bg-slate-50 text-slate-800'}>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className={`rounded-[2rem] border p-8 shadow-sm ${darkMode ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
          <h1 className="text-3xl font-semibold">Profile</h1>
          <p className="mt-2 text-slate-500">Your account overview and shopping preferences.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className={`rounded-[1.5rem] border p-6 ${darkMode ? 'border-slate-800 bg-slate-800/70' : 'border-slate-200 bg-slate-50'}`}>
              <h2 className="font-semibold">Personal information</h2>
              <p className="mt-3 text-sm text-slate-500">Name: Alex Morgan</p>
              <p className="mt-2 text-sm text-slate-500">Email: alex@example.com</p>
            </div>
            <div className={`rounded-[1.5rem] border p-6 ${darkMode ? 'border-slate-800 bg-slate-800/70' : 'border-slate-200 bg-slate-50'}`}>
              <h2 className="font-semibold">Preferences</h2>
              <p className="mt-3 text-sm text-slate-500">Preferred deals: Weekly drops</p>
              <p className="mt-2 text-sm text-slate-500">Notifications: Enabled</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
