import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";

const Navigation = () => {
  return (
    <React.Fragment>
      <Navbar sticky="top" variant="dark" bg="primary">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            Movies
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Latest
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              Top Rated
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              Most Popular
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="light">Search</Button>
          </Form>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default Navigation;
