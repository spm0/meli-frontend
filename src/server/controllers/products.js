import { Products } from "../services/Products";
import { Categories } from "../services/Categories";
import { NAME, LAST_NAME } from "../../shared/utils/constants";
import { Author } from "../models/Author";

const { filtersAdapter } = require("../../server/adapters/categories");
const {
  productsAdapter,
  productAdapter,
} = require("../../server/adapters/products");

const { info: author } = new Author(NAME, LAST_NAME);
const products = new Products();

class Search {
  // private
  async getProductCategory(category_id) {
    try {
      const categories = new Categories();
      const { path_from_root } = await categories.single(category_id);
      return filtersAdapter(path_from_root);
    } catch (e) {
      throw e;
    }
  }

  async getProduct(id) {
    try {
      const product = await products.single(id);
      const { category_id } = product;
      const categories = await this.getProductCategory(category_id);
      const { plain_text: description } = await products.singleDescription(id);
      const obj = { author, product, description, categories };
      const item = productAdapter(obj);
      return item;
    } catch (e) {
      console.error(e);
    }
  }

  async getProducts(name) {
    try {
      const { results, filters } = await products.list(name);
      const items = productsAdapter(results);
      const categories = filtersAdapter(filters);
      return { author, items, categories };
    } catch (e) {
      console.error(e);
    }
  }
}

module.exports = { Search };
