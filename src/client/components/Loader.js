import React from "react";
import { Row, Col } from "react-bootstrap";
import { Circles as CirclesLoader } from "react-loader-spinner";

const Loader = () => {
  return (
    <Row className="h-100 justify-content-center">
      <Col className="text-center">
        <CirclesLoader
          type="ThreeDots"
          color="black"
          height={100}
          width={100}
          timeout={3000}
          wrapperStyle={{ justifyContent: "center" }}
        />
      </Col>
    </Row>
  );
};

export default Loader;
