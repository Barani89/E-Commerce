export default function Filters({ categories, selectedCategory, setSelectedCategory, priceRange, setPriceRange, sortOrder, setSortOrder, darkMode }) {
  return (
    <div className={`rounded-[1.5rem] border p-5 shadow-sm ${darkMode ? 'border-slate-800 bg-slate-900 text-slate-100' : 'border-slate-200 bg-white text-slate-700'}`}>
      <div className="grid gap-4 md:grid-cols-3">
        <label className="flex flex-col gap-2 text-sm">
          <span>Category</span>
          <select value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)} className={`rounded-full border px-3 py-2 outline-none ${darkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-slate-50'}`}>
            <option value="all">All categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2 text-sm">
          <span>Max price</span>
          <input type="range" min="0" max="300" value={priceRange} onChange={(event) => setPriceRange(Number(event.target.value))} className="accent-brand-600" />
          <span className="text-xs text-slate-500">Up to ${priceRange}</span>
        </label>

        <label className="flex flex-col gap-2 text-sm">
          <span>Sort by</span>
          <select value={sortOrder} onChange={(event) => setSortOrder(event.target.value)} className={`rounded-full border px-3 py-2 outline-none ${darkMode ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-slate-50'}`}>
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </label>
      </div>
    </div>
  );
}
