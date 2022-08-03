import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Character from "./pages/Character";

function App() {

  return (
    <div className="App">
      <Router>
        {/* <Header token={token} setUser={setUser} /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:characterId" element={<Character />} />
          <Route path="/characters" element={<Characters />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
