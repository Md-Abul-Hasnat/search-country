import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectedCountry from "./components/SelectedCountry";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:name" element={<SelectedCountry />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
