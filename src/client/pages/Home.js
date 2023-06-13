import React from "react";
import Helmet from "react-helmet";
import Message from "../components/Message";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Mercado Libre</title>
        <meta name="description" content="Buscador de productos" />
        <link rel="canonical" href="/"></link>
      </Helmet>
      <Message message={"Buscar productos..."} />
    </>
  );
};

export default Home;
