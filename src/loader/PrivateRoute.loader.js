import api from "../api/api";

export const privateRouterLoader = async () => {
  const tokenString = localStorage.getItem("token");
  const accessToken = JSON.parse(tokenString);

  if (!accessToken) {
    return null;
  }
  // console.log("LOADER TOKEN___", accessToken);
  try {
    const response = await api.auth.getUserInfo(accessToken);
    // console.log(response);
    return response.data;
  } catch (error) {
    // console.error("Load Data Failed___", error);
    return error.response;
  }
};
