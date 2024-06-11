import axios from "axios";
import AuthAPI from "./auth.api";
import RecordAPI from "./record.api";

const AUTH_BASE_URL = "https://moneyfulpublicpolicy.co.kr";
const RECORD_BASE_URL = "http://localhost:5000";

class API {
  #authClient;
  #recordClient;

  auth;
  record;
  constructor() {
    this.#authClient = axios.create({ baseURL: AUTH_BASE_URL });
    this.#recordClient = axios.create({ baseURL: RECORD_BASE_URL });

    this.auth = new AuthAPI(this.#authClient);
    this.record = new RecordAPI(this.#recordClient);
  }
}
const api = new API();

export default api;
