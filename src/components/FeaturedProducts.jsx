import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ProductCard from './ProductCard';
import LoadingSkeleton from './LoadingSkeleton';

export default function FeaturedProducts() {
  const { products, loading } = useContext(AppContext);
  const featured = products.slice(0, 6);

  if (loading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {featured.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
