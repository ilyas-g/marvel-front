import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
//pages
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Character from "./pages/Character";
import Comics from "./pages/Comics";
import Comic from "./pages/Comic";
import Favoris from "./pages/Favoris";
import Header from "./components/header/Header";

function App() {

  const onSubmit = (event) => {
    event.preventDefault();
    console.log('onSubmit okokok');
  };

  const onClick = () => {
    console.log("onClick okokok");
  };
  return (
    <div className="App">
      <Router>
        <Header onSubmit={onSubmit} onClick={onClick} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:characterId" element={<Character />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/comics/:characterId" element={<Comic />} />
          <Route path="/favoris" element={<Favoris />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
