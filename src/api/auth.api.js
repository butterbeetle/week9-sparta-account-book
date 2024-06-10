class AuthAPI {
  #client;

  constructor(client) {
    this.#client = client;
  }

  async signUp(registerUserInfo) {
    const response = await this.#client.post("/register", registerUserInfo);
    console.log("API REGISTER RESPONSE___", response);
    return response;
  }
  async logIn() {}
  async logOut() {}
  async getUserInfo() {}
  async updateUserInfo() {}
}

export default AuthAPI;
