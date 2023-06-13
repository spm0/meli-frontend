import React from "react";
import { Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

const mapCategories = (categories) => {
  return categories.map((cat, i) => (
    <span key={i}>
      <>
        {cat} {i < categories.length - 1 ? " > " : ""}
      </>
    </span>
  ));
};

const Breadcrumb = ({ categories }) => {
  return (
    <Row className="mt-16 mb-16">
      <Col md={12}>
        <span className="f-14">
          {categories ? mapCategories(categories) : null}
        </span>
      </Col>
    </Row>
  );
};

Breadcrumb.propTypes = {
  categories: PropTypes.array,
};

export default Breadcrumb;
