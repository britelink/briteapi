const axios = require("axios");

class BaseBriteAPI {
  constructor(apiKey) {
    if (!apiKey) {
      throw new Error("BriteAPI: An API key is required");
    }
    this.client = axios.create({
      baseURL: "https://www.britelink.io/api/v1/",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    });
  }

  // Generic fetch method for all GET requests
  async fetch(endpoint) {
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

// Since the API operations are uniform and focused on GET requests,
// no need to differentiate between BriteAPI and NextBriteAPI.
// However, the structure is left here for future extension or if
// environment-specific functionality becomes necessary.
class BriteAPI extends BaseBriteAPI {
  // Extend the BaseBriteAPI with methods specific to JavaScript environments if needed
}

class NextBriteAPI extends BaseBriteAPI {
  // Extend the BaseBriteAPI with methods specific to Next.js environments if needed
}

// Export both classes so they can be imported as needed
module.exports = { BriteAPI, NextBriteAPI };
