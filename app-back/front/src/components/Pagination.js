import React from "react";
import { Pagination, Container } from "react-bootstrap";

const PaginationComponent = ({ active, setActive, pages }) => {
  const next = () => {
    active < pages ? setActive(active + 1) : setActive(active);
  };
  const prev = () => {
    active > 1 ? setActive(active - 1) : setActive(active);
  };
  const first = () => {
    setActive(1);
  };
  const last = () => {
    setActive(pages);
  };

  if (active === 1) {
    return (
      <Container>
        <Pagination className="m-0 p-4">
          <Pagination.First onClick={first} />
          <Pagination.Prev onClick={prev} />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item
            onClick={() => {
              setActive(2);
            }}
          >
            {2}
          </Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item
            onClick={() => {
              setActive(pages);
            }}
          >
            {pages}
          </Pagination.Item>
          <Pagination.Next onClick={next} />
          <Pagination.Last onClick={last} />
        </Pagination>
      </Container>
    );
  } else if (active === 2) {
    return (
      <Container>
        <Pagination className="m-0 p-4">
          <Pagination.First onClick={first} />
          <Pagination.Prev onClick={prev} />
          <Pagination.Item
            onClick={() => {
              setActive(1);
            }}
          >
            {1}
          </Pagination.Item>
          <Pagination.Item active>{2}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item
            onClick={() => {
              setActive(pages);
            }}
          >
            {pages}
          </Pagination.Item>
          <Pagination.Next onClick={next} />
          <Pagination.Last onClick={last} />
        </Pagination>
      </Container>
    );
  } else if (active === pages) {
    return (
      <Container>
        <Pagination className="m-0 p-4">
          <Pagination.First onClick={first} />
          <Pagination.Prev onClick={prev} />
          <Pagination.Item
            onClick={() => {
              setActive(1);
            }}
          >
            {1}
          </Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item
            onClick={() => {
              setActive(pages - 1);
            }}
          >
            {pages - 1}
          </Pagination.Item>
          <Pagination.Item active>{pages}</Pagination.Item>
          <Pagination.Next onClick={next} />
          <Pagination.Last onClick={last} />
        </Pagination>
      </Container>
    );
  } else if (active === pages - 1) {
    return (
      <Container>
        <Pagination className="m-0 p-4">
          <Pagination.First onClick={first} />
          <Pagination.Prev onClick={prev} />
          <Pagination.Item
            onClick={() => {
              setActive(1);
            }}
          >
            {1}
          </Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item active>{pages - 1}</Pagination.Item>
          <Pagination.Item
            onClick={() => {
              setActive(pages);
            }}
          >
            {pages}
          </Pagination.Item>
          <Pagination.Next onClick={next} />
          <Pagination.Last onClick={last} />
        </Pagination>
      </Container>
    );
  } else {
    return (
      <Container>
        <Pagination className="m-0 p-4">
          <Pagination.First onClick={first} />
          <Pagination.Prev onClick={prev} />
          <Pagination.Item
            onClick={() => {
              setActive(1);
            }}
          >
            {1}
          </Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item onClick={prev}>{active - 1}</Pagination.Item>
          <Pagination.Item active>{active}</Pagination.Item>
          <Pagination.Item onClick={next}>{active + 1}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item
            onClick={() => {
              setActive(pages);
            }}
          >
            {pages}
          </Pagination.Item>
          <Pagination.Next onClick={next} />
          <Pagination.Last onClick={last} />
        </Pagination>
      </Container>
    );
  }
};

export default PaginationComponent;
