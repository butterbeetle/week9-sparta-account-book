class RecordAPI {
  #client;

  constructor(client) {
    this.#client = client;
  }

  async createRecord(newRecordData) {
    const response = await this.#client.post("/expenses", newRecordData);
    // console.log("RECORD API CREATE RECORD___", response);
    return response;
  }

  async getRecords() {
    const response = await this.#client.get("/expenses");
    // console.log("RECORD API GET RECORD___", response);
    return response.data;
  }

  async updateRecord(newRecordData) {
    console.log(newRecordData);
    const response = await this.#client.patch(
      `/expenses/${newRecordData.id}`,
      newRecordData
    );
    // console.log("RECORD API UPDATE RECORD___", response);
    return response.data;
  }

  async deleteRecord(deletedRecordId) {
    const response = await this.#client.delete(`/expenses/${deletedRecordId}`);
    // console.log("RECORD API DELETE RECORD___", response);
    return response.data;
  }
}

export default RecordAPI;
