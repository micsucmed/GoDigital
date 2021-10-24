import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Navigation from "./NavBar";

function App() {
  return (
    <Router>
      <Navigation />
      <main>
        <div className="body"></div>
      </main>
    </Router>
  );
}

export default App;
