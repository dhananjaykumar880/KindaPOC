import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../header/Header";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <Router>
      <Header />
      <Container fluid>
        <AppRoutes />
      </Container>
    </Router>
  );
}

export default App;
