import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

const Head = ({ title, description, url }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url}></link>
    </Helmet>
  );
};

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Head;
