import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Latest from "./Latest";
import MovieDetail from "./MovieDetail";
import Navigation from "./NavBar";
import MostPopular from "./Popular";
import Search from "./Search";
import TopRated from "./TopRated";

function App() {
  return (
    <Router>
      <Navigation />
      <main>
        <div className="body" style={{ backgroundColor: "#0d6efd" }}>
          <Route exact path="/">
            <Latest />
          </Route>
          <Route exact path="/top_rated">
            <TopRated />
          </Route>
          <Route exact path="/most_popular">
            <MostPopular />
          </Route>
          <Route exact path="/Search">
            <Search />
          </Route>
          <Route exact path="/movie/:id">
            <MovieDetail />
          </Route>
        </div>
      </main>
    </Router>
  );
}

export default App;
