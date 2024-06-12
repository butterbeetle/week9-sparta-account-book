import { create } from "zustand";

const useLoginStore = create((set) => ({
  isLoggedIn: false,
  user: null,
  logInUser: (user) => set({ user, isLoggedIn: true }),
  logOutUser: () => {
    localStorage.removeItem("token");
    set({
      user: null,
      isLoggedIn: false,
    });
  },
}));

export default useLoginStore;
