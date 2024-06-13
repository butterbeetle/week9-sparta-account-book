import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useShallow } from "zustand/react/shallow";
import api from "../api/api";
import useLoginStore from "../zustand/login.store";

export default function useMe() {
  const queryClient = useQueryClient();
  const tokenString = localStorage.getItem("token");
  const accessToken = tokenString ? JSON.parse(tokenString) : null;

  const { isLoggedIn, logInUser, logOutUser, user } = useLoginStore(
    useShallow((state) => ({
      isLoggedIn: state.isLoggedIn,
      user: state.user,
      logInUser: state.logInUser,
      logOutUser: state.logOutUser,
    }))
  );

  const {
    data: userInfo,
    isSuccess,
    isError,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => api.auth.getUserInfo(accessToken),
    enabled: !!accessToken,
    retry: false,
    refetchInterval: 1000 * 60 * 10,
    // refetchInterval: 1000 * 10,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  const { mutateAsync: signUp } = useMutation({
    mutationFn: (signUpUserInfo) => api.auth.signUp(signUpUserInfo),
  });

  const { mutateAsync: logIn } = useMutation({
    mutationFn: (loginUserInfo) => api.auth.logIn(loginUserInfo),
  });

  const { mutateAsync: updatedUserInfo } = useMutation({
    mutationFn: ({ accessToken, updatedUserInfo }) =>
      api.auth.updateUserInfo(accessToken, updatedUserInfo),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["user"] }),
  });

  // useEffect(() => {
  // if (userInfo) {
  //   logInUser(userInfo);
  // }
  // if (!accessToken) {
  //   logOutUser();
  // }
  // }, [userInfo, logInUser, accessToken, logOutUser]);

  // useEffect(() => {
  //   if (isSuccess) {
  //     logInUser(userInfo.data);
  //   } else if (isError) {
  //     logOutUser();
  //   }
  // }, [isError, logOutUser, accessToken, isSuccess, logInUser, userInfo]);

  return {
    // userInfo,
    logIn,
    signUp,
    updatedUserInfo,
    accessToken,
    // isSuccess,
    // isError,

    user,
    isLoggedIn,
    logInUser,
    logOutUser,
  };
}
