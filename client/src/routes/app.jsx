import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../views/Home";
import TwoNumberSum from "../views/TwoNumberSum";
import NonConstructibleChange from "../views/NonConstructibleChange";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
            <Route path="/" Component={Home} />
            <Route  path="/two-number-sum" Component={TwoNumberSum} />
            <Route path="/non-constructible-change" Component={NonConstructibleChange} />
          </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;