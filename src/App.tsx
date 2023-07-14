
import Main from "./pages/main";
import Bunny from "./pages/bunny";
import GoldenCarrot from "./pages/mint";
import Roadmap from "./pages/roadmap";
import { Route,Routes } from "react-router-dom";
function App() {
   
    return  (
      <Routes>
        <Route path="/" element={<Main/>} /> 
        <Route path="/roadmap" element={<Roadmap/>} /> 
        <Route path="/bunny-land" element={<Bunny/>} /> 
        <Route path="/golden-carrot" element={<GoldenCarrot/>} /> 
      </Routes>
    );
}

export default App;
