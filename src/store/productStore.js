import { create } from "zustand";

const useProductStore = create((set) => ({
  products: [],
  loading: false,
  fetchProducts: async () => {
    set({ loading: true });
    const res = await fetch("https://fakestoreapi.com/products?limit=5");
    const data = await res.json();
    set({ products: data, loading: false });
  },
}));
export default useProductStore;
