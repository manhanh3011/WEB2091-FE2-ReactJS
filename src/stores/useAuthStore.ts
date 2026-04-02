import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  username: string;
  email: string;
  password: string;
};

type AuthState = {
  user: User | null;
  setUser: (data: User) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (data: User) => set({ user: data }),
      logout: () =>
        set({
          user: null,
        }),
    }),
    {
      name: "auth-storage",
    },
  ),
);