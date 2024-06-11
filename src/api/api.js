import axios from "axios";
import AuthAPI from "./auth.api";
import RecordAPI from "./record.api";

const BASE_URL = "https://moneyfulpublicpolicy.co.kr";

class API {
  #baseURL = BASE_URL;
  #client;

  auth;
  record;
  constructor() {
    this.#client = axios.create({ baseURL: this.#baseURL });

    this.auth = new AuthAPI(this.#client);
    this.record = new RecordAPI(this.#client);
  }
}
const api = new API();

export default api;
