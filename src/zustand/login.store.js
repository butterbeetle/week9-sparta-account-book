import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useLoginStore = create(
  persist(
    (set) => ({
      isLoggedIn: false,
      accessToken: "",
      avatar: "",
      nickname: "",
      userId: "",
      setUser: (data) => set({ ...data, isLoggedIn: true }),
      clearUser: () =>
        set({
          isLoggedIn: true,
          accessToken: "",
          avatar: "",
          nickname: "",
          userId: "",
        }),
    }),
    {
      name: "login-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useLoginStore;
