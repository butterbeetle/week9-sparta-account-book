import api from "../api/api";

export const defaultLayoutLoader = async () => {
  const tokenString = localStorage.getItem("token");
  const accessToken = JSON.parse(tokenString);

  if (!accessToken) {
    return null;
  }

  try {
    const response = await api.auth.getUserInfo(accessToken);
    return response.data;
  } catch (error) {
    console.error("Load Data Failed___", error);
    throw error;
  }
};
