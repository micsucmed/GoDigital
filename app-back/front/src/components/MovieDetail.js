import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Image, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router";

const MovieDetail = () => {
  const dummy = [
    {
      title: "Loading...",
    },
  ];

  const location = useLocation();
  const { movieId } = location.state;

  const [movie, setMovie] = useState(dummy);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/movie/${movieId}`);
      setMovie(result.data);
    };
    fetchData();
  }, [movieId]);

  return (
    <Container fluid className="py-4">
      <Row>
        <Col className="text-center">
          <Image
            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
            fluid
          />
        </Col>
        <Col>
          <h1 className="text-center" style={{ "color": "white" }}>
            {movie.title}
          </h1>
          <h3
            className="text-center pb-5"
            style={{ color: "white", fontStyle: "italic" }}
          >
            {movie.tagline}
          </h3>
          <h3 style={{ color: "white" }}>Overview</h3>
          <p className="pb-3" style={{ color: "white" }}>
            {movie.overview}
          </p>
          <Row>
            <Col>
              <h3 className="text-center" style={{ color: "white" }}>
                Rating
              </h3>
              <h4
                className="text-center pb-3"
                style={{ color: "white", fontStyle: "italic" }}
              >
                {movie.vote_average}
              </h4>
            </Col>
            <Col>
              <h3 className="text-center" style={{ color: "white" }}>
                Vote Count
              </h3>
              <h4
                className="text-center pb-5"
                style={{ color: "white", fontStyle: "italic" }}
              >
                {movie.vote_count}
              </h4>
            </Col>
          </Row>
          <h3 className="text-center" style={{ color: "white" }}>
            Genres
          </h3>
          {movie.genres.map((genre) => {
            return (
              <h4
                className="text-center"
                style={{ color: "white", fontStyle: "italic" }}
              >
                {genre.name}
              </h4>
            );
          })}
          <h3 className="text-center pt-5" style={{ color: "white" }}>
            Release Date
          </h3>
          <h4
            className="text-center pb-5"
            style={{ color: "white", fontStyle: "italic" }}
          >
            {movie.release_date}
          </h4>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetail;
