import { create } from "zustand";
import { persist } from "zustand/middleware";
const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      addCart: (item) => {
        const cart = get().cart;
        const exists = cart.find((i) => i.id === item.id);
        if (exists) {
          set({
            cart: cart.map((i) =>
              i.id === item.id ? { ...i, qty: i.qty + 1 } : i,
            ),
          });
        } else {
          set({ cart: [...cart, { ...item, qty: 1 }] });
        }
      },
      removeCart: (id) =>
        set({
          cart: get().cart.filter((i) => i.id !== id),
        }),
      updateQuantity: (id, qty) =>
        set({
          cart: get().cart.map((i) => (i.id === id ? { ...i, qty } : i)),
        }),
      clearCart: () => set({ cart: [] }),
       // 👇 computed property
       getTotalItems: () =>
    get().cart.reduce((sum, item) => sum + item.qty, 0),
      totalCartValue: () =>
        get().cart.reduce((sum, item) => sum + item.price * item.qty, 0),
    }),
    { name: "cartStorage" },
  ),
);
useCartStore.subscribe((cart) => {
  console.log("Cart changed:", cart);
});
export default useCartStore;
