import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { Search } from "../../server/controllers/products";
import Breadcrumb from "../components/Breadcrumb";
import Message from "../components/Message";
import Head from "../components/Head";
import Loader from "../components/Loader";
import ProductsView from "../../server/views/Products";
import { useApi } from "../hooks/useApi";

const SearchResults = React.memo(({ searchTerm }) => {
  const getData = useCallback(() => {
    return new Search().getProducts(searchTerm);
  }, [searchTerm]);
  const { loading, error, data } = useApi(getData);

  if (loading || !data) {
    return <Loader />;
  }
  if (error) {
    return <Message message={"Error, intente nuevamente"} />;
  }
  const title = searchTerm || "Buscando productos...";
  const { items: products, categories } = data;

  return (
    <>
      <Head
        title={title}
        description={
          "Alguien busca lo que vos tenés, alguien tiene lo que vos buscás"
        }
      />
      <Breadcrumb categories={categories} />
      <section>
        {products.map((props) => (
          <ProductsView key={props.id} {...props} />
        ))}
      </section>
    </>
  );
});

SearchResults.propTypes = {
  searchTerm: PropTypes.string,
};

export default SearchResults;
