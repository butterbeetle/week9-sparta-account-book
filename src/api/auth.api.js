class AuthAPI {
  #client;

  constructor(client) {
    this.#client = client;
  }

  async signUp(signUpUserInfo) {
    const response = await this.#client.post("/register", signUpUserInfo);
    // console.log("API REGISTER RESPONSE___", response);
    return response;
  }
  async logIn(loginUserInfo) {
    const response = await this.#client.post("/login", loginUserInfo);
    // console.log("API LOGIN RESPONSE__", response);
    return response;
  }
  async logOut() {}
  async getUserInfo() {}
  async updateUserInfo() {}
}

export default AuthAPI;
