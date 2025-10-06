import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      login: (username) => set({ user: { name: username } }),
      logout: () => set({ user: null }),
    }),
    { name: "userStorage" },
  ),
);

export default useUserStore;
