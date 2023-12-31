import React from "react";
import { formatAsCurrency } from "../../../shared/utils/helpers";
import { Row, Col, Button } from "react-bootstrap";

const ProductView = ({ product }) => {
  return (
    <section className="vh-75 bg-white mb-32">
      <Row className="justify-content-center pt-32 bg-white m-0">
        <Col md={8} className="item-header text-center">
          <picture className="mt-32">
            {/* Formatos */}
            <img src={product.picture} alt={product.title} />
          </picture>
        </Col>
        <Col md={4} className="pr-32">
          <p className="f-14">
            {product.condition === "new" ? "Nuevo" : "Usado"} -{" "}
            {product.sold_quantity} Vendidos
          </p>
          <h4 className="mt-16 f-24">{product.title}</h4>
          <h3 className="mt-32 f-46">
            $ {formatAsCurrency(product.price.amount)}
          </h3>
          <Button variant="primary" className="w-100 mt-32 ">
            Comprar
          </Button>
        </Col>
      </Row>
      <Row className="mt-64 pl-32">
        <Col className="pl-32" md={8}>
          <h4 className="f-28 text-left ">Descripción del producto</h4>
          <p className="mt-32 mb-32 pb-32">{product.description}</p>
        </Col>
      </Row>
    </section>
  );
};

export default ProductView;
