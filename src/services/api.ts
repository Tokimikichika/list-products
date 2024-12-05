import { Product } from '../store/productStore';

const API_URL = 'https://fakestoreapi.com/products';

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  const data = await response.json();
  return data.map((item: any) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    image: item.image,
    price: item.price,
    liked: false,
  }));
};

export const fetchProductById = async (id: number): Promise<Product> => {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch product with id ${id}`);
  }
  return await response.json();
};
