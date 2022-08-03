import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Character from "./pages/Character";
import Comics from "./pages/Comics";

function App() {

  return (
    <div className="App">
      <Router>
        {/* <Header token={token} setUser={setUser} /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:characterId" element={<Character />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/comics" element={<Comics />} />
          {/* <Route path="/comic/:characterId" element={<Comic />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
