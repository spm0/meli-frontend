import { Request } from "./Request";

class Categories extends Request {
  constructor() {
    super();
  }
  async single(id) {
    try {
      return this.get(`categories/${id}`);
    } catch (e) {
      throw e;
    }
  }
}

module.exports = { Categories };
