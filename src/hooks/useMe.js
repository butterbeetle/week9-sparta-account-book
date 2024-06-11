import { useShallow } from "zustand/react/shallow";
import useLoginStore from "../zustand/login.store";

export default function useMe() {
  const tokenString = localStorage.getItem("token");
  const accessToken = tokenString ? JSON.parse(tokenString) : null;
  const { isLoggedIn, nickname, setUser, clearUser } = useLoginStore(
    useShallow((state) => ({
      isLoggedIn: state.isLoggedIn,
      nickname: state.nickname,
      setUser: state.setUser,
      clearUser: state.clearUser,
    }))
  );

  return { isLoggedIn, user, isLoading, isError, nickname };
}
