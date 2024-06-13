import axios from "axios";
import AuthAPI from "./auth.api";
import RecordAPI from "./record.api";

const AUTH_BASE_URL = import.meta.env.VITE_AUTH_BASE_URL;
const RECORD_BASE_URL = import.meta.env.VITE_RECORD_BASE_URL;

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
