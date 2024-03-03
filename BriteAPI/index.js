const axios = require("axios");

class BaseBriteAPI {
  constructor(apiKey) {
    if (!apiKey) {
      throw new Error("BriteAPI: An API key is required");
    }
    this.baseURL = "https://www.britelink.io/api/";
    this.client = axios.create({
      baseURL: this.baseURL,
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    });
  }

  // Generic fetch method for all GET requests
  async fetch(endpoint) {
    // Check if the endpoint accidentally includes the base URL
    if (endpoint.startsWith(this.baseURL)) {
      // Remove the base URL from the endpoint
      endpoint = endpoint.replace(this.baseURL, "");
    }

    try {
      const response = await this.client.get(endpoint);
      return response.data;
    } catch (error) {
      // It's generally a good idea to abstract away the axios-specific error
      // structure to provide a more consistent error handling experience for
      // SDK users.
      throw new Error(
        error.response?.data?.message || "An error occurred while fetching data"
      );
    }
  }
}

class BriteAPI extends BaseBriteAPI {
  // Extend the BaseBriteAPI with methods specific to JavaScript environments if needed
}

class NextBriteAPI extends BaseBriteAPI {
  // Extend the BaseBriteAPI with methods specific to Next.js environments if needed
}

// Export both classes so they can be imported as needed
module.exports = { BriteAPI, NextBriteAPI };
