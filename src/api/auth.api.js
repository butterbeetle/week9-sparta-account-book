import useLoginStore from "../zustand/login.store";

class AuthAPI {
  #client;
  #token;

  constructor(client) {
    this.#token = JSON.parse(localStorage.getItem("token"));

    this.#client = client;
  }

  async signUp(signUpUserInfo) {
    const response = await this.#client.post("/register", signUpUserInfo);
    // console.log("API REGISTER RESPONSE___", response);
    return response;
  }

  async logIn(loginUserInfo) {
    try {
      const response = await this.#client.post(
        // "/login",
        "/login?expiresIn=10m",
        // "/login?expiresIn=10s",
        loginUserInfo
      );
      // console.log("API LOGIN RESPONSE__", response);
      return response;
    } catch (error) {
      console.log("API LOGIN ERROR__", error);
    }
  }

  async getUserInfo(accessToken) {
    // console.log("TOKEN___", accessToken);
    try {
      const response = await this.#client.get("/user", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      // console.log("API GET USER INFO RESPONSE__", response);
      if (response?.data) {
        useLoginStore.setState(() => ({
          user: response.data,
          isLoggedIn: true,
        }));
      }
      return response.data;
    } catch (error) {
      localStorage.removeItem("token");
      useLoginStore.setState(() => ({ user: null, isLoggedIn: false }));
      console.log("GET USER INFO___", error);
      return error;
    }
  }

  async updateUserInfo(accessToken, updatedUserInfo) {
    // console.log(accessToken, updatedUserInfo);
    const response = await this.#client.patch("/profile", updatedUserInfo, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    // console.log("API UPDATE USER INFO RESPONSE__", response);

    return response;
  }
}

export default AuthAPI;
