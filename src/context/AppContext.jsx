import { createContext, useEffect, useMemo, useState } from 'react';
import axios from 'axios';

export const AppContext = createContext();

const fallbackProducts = [
  {
    id: 1,
    title: 'Aurora Headphones',
    price: 129,
    rating: { rate: 4.7 },
    category: 'electronics',
    image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    description: 'Immersive sound with a premium finish.',
  },
  {
    id: 2,
    title: 'Luma Jacket',
    price: 89,
    rating: { rate: 4.4 },
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    description: 'Layered comfort for changing seasons.',
  },
];

export function AppProvider({ children }) {
  const [products, setProducts] = useState(fallbackProducts);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('nova-cart') || '[]');
    const savedWishlist = JSON.parse(localStorage.getItem('nova-wishlist') || '[]');
    const savedTheme = localStorage.getItem('nova-theme');

    if (savedCart) setCart(savedCart);
    if (savedWishlist) setWishlist(savedWishlist);
    if (savedTheme) setDarkMode(savedTheme === 'dark');
  }, []);

  useEffect(() => {
    localStorage.setItem('nova-cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('nova-wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('nova-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('https://fakestoreapi.com/products');
        setProducts(data);
      } catch (err) {
        setError('Unable to load products right now. Showing sample items instead.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateCartQuantity = (id, amount) => {
    setCart((prev) => prev.flatMap((item) => (item.id === id ? (item.quantity + amount > 0 ? [{ ...item, quantity: item.quantity + amount }] : []) : [item])));
  };

  const removeFromCart = (id) => setCart((prev) => prev.filter((item) => item.id !== id));
  const addToWishlist = (product) => {
    setWishlist((prev) => (prev.some((item) => item.id === product.id) ? prev : [...prev, product]));
  };
  const removeFromWishlist = (id) => setWishlist((prev) => prev.filter((item) => item.id !== id));

  const value = useMemo(
    () => ({
      products,
      cart,
      wishlist,
      loading,
      error,
      darkMode,
      setDarkMode,
      addToCart,
      updateCartQuantity,
      removeFromCart,
      addToWishlist,
      removeFromWishlist,
    }),
    [products, cart, wishlist, loading, error, darkMode]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
