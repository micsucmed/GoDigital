import React, { useState } from "react";
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
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
    console.log(query);
  };

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
            <Nav.Link as={Link} to="/top_rated">
              Top Rated
            </Nav.Link>
            <Nav.Link as={Link} to="/most_popular">
              Most Popular
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
            />
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={{ pathname: "/search", state: { search: query } }}
            >
              <Button variant="light">Search</Button>
            </Link>
          </Form>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default Navigation;
