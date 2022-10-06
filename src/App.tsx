import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
//pages
// @ts-ignore
import Home from "./pages/Home.tsx";
// @ts-ignore
import Characters from "./pages/Characters.tsx";
// @ts-ignore
import Character from "./pages/Character.tsx";
// @ts-ignore
import Comics from "./pages/Comics.tsx";
// @ts-ignore
import Comic from "./pages/Comic.tsx";
// @ts-ignore
import Header from "./components/header/Header.tsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:characterId" element={<Character />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/comics/:characterId" element={<Comic />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
