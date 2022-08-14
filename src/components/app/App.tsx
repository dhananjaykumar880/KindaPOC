import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import { BASE_URL } from "../../constant";
import Header from "../header/Header";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <Router basename={BASE_URL}>
      <Header />
      <Container fluid>
        <AppRoutes />
      </Container>
    </Router>
  );
}

export default App;
