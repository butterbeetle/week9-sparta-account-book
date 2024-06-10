import axios from "axios";
import AuthAPI from "./auth.api";

const BASE_URL = "https://moneyfulpublicpolicy.co.kr";

class API {
  #baseURL = BASE_URL;
  #client;

  auth;
  constructor() {
    this.#client = axios.create({ baseURL: this.#baseURL });

    this.auth = new AuthAPI(this.#client);
  }
}
const api = new API();

export default api;
