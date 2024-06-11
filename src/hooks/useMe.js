import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";
import api from "../api/api";
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

  const {
    data: user,
    isError,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ["user", { token: accessToken }],
    queryFn: async () => {
      const response = await api.auth.getUserInfo(accessToken);
      return response.data;
    },
    enabled: !!accessToken,
  });

  useEffect(() => {
    if (isSuccess && user) {
      setUser(user);
    } else if (isError) {
      clearUser(false);
    }
  }, [isSuccess, isError, user, setUser, clearUser]);

  return { isLoggedIn, user, isLoading, isError, nickname };
}
