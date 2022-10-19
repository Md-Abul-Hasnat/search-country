import Home from "./components/home/Home";
import SelectedCountry from "./components/selectedCountry/SelectedCountry";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import { useState } from "react";
import Footer from "./components/footer/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <BrowserRouter>
      <Header modeData={{ darkMode, setDarkMode }} />
      <Routes>
        <Route path="/" element={<Home modeData={darkMode} />} />
        <Route
          path="/country/:name"
          element={<SelectedCountry modeData={darkMode} />}
        />
      </Routes>
      <Footer modeData={darkMode} />
    </BrowserRouter>
  );
}

export default App;
