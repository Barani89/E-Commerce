import { useContext, useMemo, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import ProductCard from '../components/ProductCard';
import LoadingSkeleton from '../components/LoadingSkeleton';
import Pagination from '../components/Pagination';
import Footer from '../components/Footer';

export default function Products() {
  const { products, loading, darkMode } = useContext(AppContext);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState(300);
  const [sortOrder, setSortOrder] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const categories = useMemo(() => [...new Set(products.map((product) => product.category))], [products]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (search) {
      result = result.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()));
    }

    if (selectedCategory !== 'all') {
      result = result.filter((product) => product.category === selectedCategory);
    }

    result = result.filter((product) => product.price <= priceRange);

    if (sortOrder === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOrder === 'rating') {
      result.sort((a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0));
    }

    return result;
  }, [products, search, selectedCategory, priceRange, sortOrder]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

  return (
    <div className={darkMode ? 'min-h-screen bg-slate-950 text-slate-100' : 'min-h-screen bg-slate-50 text-slate-800'}>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-medium text-brand-600">Collection</p>
            <h1 className="text-3xl font-semibold">Find your perfect pick</h1>
          </div>
          <div className="w-full lg:max-w-md">
            <SearchBar value={search} onChange={setSearch} darkMode={darkMode} />
          </div>
        </div>

        <Filters categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} priceRange={priceRange} setPriceRange={setPriceRange} sortOrder={sortOrder} setSortOrder={setSortOrder} darkMode={darkMode} />

        {loading ? (
          <div className="mt-8"><LoadingSkeleton /></div>
        ) : (
          <>
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
