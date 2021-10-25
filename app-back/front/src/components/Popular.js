import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import Movie from "./Movie";
import PaginationComponent from "./Pagination";

const MostPopular = () => {
  const dummy = [
    {
      poster_path: "Loading...",
      title: "Loading...",
    },
  ];

  const [movies, setMovies] = useState(dummy);
  const [pages, setPages] = useState(1);
  const [active, setActive] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/popular?page=${active}`);
      setMovies(result.data.results);
      setPages(result.data.total_pages);
    };
    fetchData();
  }, [active]);

  const renderMovies = () => {
    return (
      <Container>
        <Row xs={1} md={4}>
          {movies.map((movie, i) => {
            return <Movie key={i} movie={movie} />;
          })}
        </Row>
      </Container>
    );
  };

  const handleActive = (x) => {
    setActive(x);
  };

  return (
    <Container fluid>
      <h1 className="text-center" style={{ "color": "white" }}>
        Most Popular Movies
      </h1>
      {renderMovies()}
      <PaginationComponent
        active={active}
        setActive={handleActive}
        pages={pages}
      />
    </Container>
  );
};

export default MostPopular;
