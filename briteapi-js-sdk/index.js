const axios = require("axios");

class BriteAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.client = axios.create({
      baseURL: "https://www.britelink.io/api/v1/",
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        "Content-Type": "application/json",
      },
    });
  }

  async getData(endpoint = "") {
    try {
      const response = await this.client.get(endpoint);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = BriteAPI;
