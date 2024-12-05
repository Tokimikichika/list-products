import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  liked: boolean;
}

interface ProductState {
  products: Product[];
  fetchProducts: () => Promise<void>;
  toggleLike: (id: number) => void;
  removeProduct: (id: number) => void;
  addProduct: (product: Omit<Product, 'id' | 'liked'>) => void;
  updateProduct: (product: Product) => void;
}

export const useProductStore = create<ProductState>()(
  persist(
    (set, get) => ({
      products: [],
      fetchProducts: async () => {
        if (get().products.length === 0) {
          const response = await fetch('https://fakestoreapi.com/products');
          const data: Product[] = await response.json();
          set({ products: data.map((item) => ({ ...item, liked: false })) });
        }
      },
      toggleLike: (id) => {
        set({
          products: get().products.map((product) =>
            product.id === id ? { ...product, liked: !product.liked } : product
          ),
        });
      },
      removeProduct: (id) => {
        set({ products: get().products.filter((product) => product.id !== id) });
      },
      addProduct: (newProduct) => {
        const products = get().products;
        const id = products.length ? products[products.length - 1].id + 1 : 1;
        set({
          products: [
            ...products,
            { ...newProduct, id, liked: false } as Product,
          ],
        });
      },
      updateProduct: (updatedProduct) => {
        set({
          products: get().products.map((product) =>
            product.id === updatedProduct.id ? updatedProduct : product
          ),
        });
      },
    }),
    {
      name: 'product-store',
    }
  )
);
