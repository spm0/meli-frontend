import React, { useState } from "react";
import SearchResults from "./pages/SearchResults";
import ProductDetail from "./pages/ProductDetail";
import Home from "./pages/Home";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import { Route, Routes, Navigate } from "react-router-dom";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const setSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };
  return (
    <>
      <Header setSearch={setSearch} />
      <Container className="vh-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/items"
            element={<SearchResults searchTerm={searchTerm} />}
          />
          <Route path="/items/:id" element={<ProductDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Container>
    </>
  );
}
