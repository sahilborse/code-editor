import React from "react";
import Home from "./components/Home";
import WebEditor from "./components/WebEditor";
import MarkDownEditor from "./components/MarkDownEditor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/web" element={<WebEditor/>} />
        <Route path="/markdown" element={<MarkDownEditor/>} />
      </Routes>
    </Router>
  );
}

export default App;