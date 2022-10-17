import Home from "./components/home/Home";
import SelectedCountry from "./components/selectedCountry/SelectedCountry";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:name" element={<SelectedCountry />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
