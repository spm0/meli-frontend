import fetch from "isomorphic-fetch";
import { BASE_URL } from "../../shared/utils/constants";

class Request {
  async get(endpoint) {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    return response.json();
  }
}

module.exports = { Request };
