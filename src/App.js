import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Nav } from "./components/Nav";
import { MainPage } from "./pages/MainPage";
import "./styles.css";
import { Footer } from "./components/Footer";
import { RouterPath } from "./navigator/RouterPath";

export default function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <div style={{ borderBottom: "solid green" }}>
          <MainPage />
        </div>
        <Nav />
        <RouterPath />
        <Footer />
      </div>
    </Router>
  );
}
