class RecordAPI {
  #client;

  constructor(client) {
    this.#client = client;
  }

  async createRecord() {
    const response = await this.#client.post();
  }

  async getRecord() {
    const response = await this.#client.get("/expenses");
    // console.log("RECORD API GET RECORD___", response.data);
    return response.data;
  }

  async updateRecord() {}

  async deleteRecord() {}
}

export default RecordAPI;
