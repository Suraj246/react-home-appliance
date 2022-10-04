import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import React, { useState, useEffect } from "react";
import Urban from "./components/api";
import axios from "axios";

function App() {
  const [data, setData] = useState(Urban);

  return (
    <div className="App2">
      <Header />
      <Home data={data} />
      <About data={data} />
      <Footer />
    </div>
  );
}

export default App;
