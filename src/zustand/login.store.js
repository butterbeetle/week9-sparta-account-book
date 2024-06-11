import { create } from "zustand";

const useLoginStore = create((set) => ({
  isLoggedIn: false,
  avatar: "",
  nickname: "",
  userId: "",
  setUser: (data) => set({ ...data, isLoggedIn: true }),
  clearUser: () => {
    localStorage.removeItem("token");
    set({
      isLoggedIn: false,
      avatar: "",
      nickname: "",
      userId: "",
    });
  },
}));

export default useLoginStore;
