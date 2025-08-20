import fetch from "isomorphic-fetch";

class Request {
  async get(endpoint) {
    const headers = new Headers();
    headers.append("Authorization", `Bearer APP_USR-4985740399303355-081922-44e6cc4559f336fc6279ddc9de0982dd-145342791`);
    const response = await fetch(`/api/${endpoint}`, { headers });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`HTTP Error: ${response.status} - ${errorData.message}`);
    }
    return response.json();
  }
}

module.exports = { Request };
