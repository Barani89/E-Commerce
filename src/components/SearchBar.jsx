import { FiSearch } from 'react-icons/fi';

export default function SearchBar({ value, onChange, darkMode }) {
  return (
    <label className={`flex items-center gap-3 rounded-full border px-4 py-3 ${darkMode ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
      <FiSearch className="text-slate-400" />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search products"
        className={`w-full bg-transparent outline-none ${darkMode ? 'text-slate-100 placeholder:text-slate-500' : 'text-slate-700 placeholder:text-slate-400'}`}
      />
    </label>
  );
}
