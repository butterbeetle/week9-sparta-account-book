import { useMutation } from "@tanstack/react-query";
import { useShallow } from "zustand/react/shallow";
import api from "../api/api";
import useLoginStore from "../zustand/login.store";

export default function useMe() {
  const { isLoggedIn, nickname, setUser, clearUser } = useLoginStore(
    useShallow((state) => ({
      isLoggedIn: state.isLoggedIn,
      nickname: state.nickname,
      setUser: state.setUser,
      clearUser: state.clearUser,
    }))
  );

  const { mutateAsync: signUp } = useMutation({
    mutationFn: (signUpUserInfo) => api.auth.signUp(signUpUserInfo),
  });

  const { mutateAsync: logIn } = useMutation({
    mutationFn: (loginUserInfo) => api.auth.logIn(loginUserInfo),
  });

  const { mutateAsync: getUserInfo } = useMutation({
    mutationFn: (accessToken) => api.auth.getUserInfo(accessToken),
  });

  const { mutateAsync: updatedUserInfo } = useMutation({
    mutationFn: ({ accessToken, updatedUserInfo }) =>
      api.auth.updateUserInfo(accessToken, updatedUserInfo),
  });

  return {
    signUp,
    logIn,
    getUserInfo,
    updatedUserInfo,
    isLoggedIn,
    setUser,
    clearUser,
    nickname,
  };
}
