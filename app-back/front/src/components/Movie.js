import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  return (
    <Col className="my-2 px-1">
      <Link
        to={{ pathname: `/movie/${movie.id}`, state: { movieId: movie.id } }}
        style={{ textDecoration: "none", color: "white" }}
      >
        <Card style={{ height: "35rem", border: 0 }}>
          <Card.Img
            variant="top"
            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
          />
          <Card.Body
            style={{ backgroundColor: "#0252CA" }}
            className="text-center"
          >
            <Card.Title style={{ color: "white" }}>{movie.title}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default Movie;
