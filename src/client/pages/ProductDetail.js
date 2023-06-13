import React, { useCallback, useEffect, useReducer } from "react";
import { Search } from "../../server/controllers/products";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Breadcrumb from "../components/Breadcrumb";
import Head from "../components/Head";
import ProductView from "../../server/views/Product";
import { useApi } from "../hooks/useApi";

const ProductDetail = () => {
  const { id } = useParams();
  const getData = useCallback(() => {
    return new Search().getProduct(id);
  }, [id]);
  const { loading, error, data: product } = useApi(getData);

  if (loading || !product) {
    return <Loader />;
  }
  if (error) {
    return <Message message={"Error"} />;
  }

  return (
    <>
      <Head title={product.title} description={product.description} />
      <Breadcrumb categories={product.categories} />
      <ProductView product={product} />
    </>
  );
};

export default ProductDetail;
