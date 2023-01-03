import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Pokemones from "./components/Pokemones/Pokemones"

function App() {
  return (
    <div className="App">
<BrowserRouter>
<Navbar />
<Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/pokemones" element={<Pokemones />}/>
  <Route path="/pokemones/:nombre" element={<Pokemones />}/>
</Routes>
</BrowserRouter>
</div>
  );
}

export default App;
