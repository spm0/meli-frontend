import React, { useEffect } from "react";
import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

const colStyles = {
  height: "40px",
};

const Header = ({ setSearch }) => {
  const location = useLocation();
  useEffect(() => {
    const [_, product] = location.search.split("=");
    product ? setSearch(product) : null;
  }, []);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    const [{ value }] = e.target;
    e.preventDefault();
    if (value.trim() !== "") {
      setSearch(value);
      navigate(`/items?search=${value}`);
    }
  };

  return (
    <header className="app-header">
      <Row
        className="align-items-center searchBox m-0"
        style={{ textAlign: "right" }}
      >
        <Col md={4} style={colStyles}>
          <img
            alt="logo"
            src="/shared/assets/images/Logo_ML.png"
            onClick={() => navigate("/")}
          />
        </Col>
        <Col md={4} style={colStyles}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <InputGroup>
                <input
                  name="search"
                  className="input-search form-control f-18"
                  placeholder="Escribe un producto"
                  id="search"
                />

                <Button type="submit" className="btn-search">
                  <img
                    src="/shared/assets/images/ic_Search.png"
                    alt="search icon"
                  />
                </Button>
              </InputGroup>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
