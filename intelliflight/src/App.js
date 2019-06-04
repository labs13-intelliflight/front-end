import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TestMap from "./components/map/map";
function App() {
  return (
    <Router>
      <div className="App">
      <div>Intelliflight map</div>
      <TestMap />
      </div>
    </Router>
  );
}

export default App;