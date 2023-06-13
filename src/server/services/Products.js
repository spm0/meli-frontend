import { Request } from "./Request";

class Products extends Request {
  constructor() {
    super();
  }
  async list(q, limit = 4) {
    return this.get(`/sites/MLA/search?q=${q}&limit=${limit}`);
  }
  async single(id) {
    return this.get(`items/${id}`);
  }
  async singleDescription(id) {
    return this.get(`items/${id}/description`);
  }
}

module.exports = { Products };
