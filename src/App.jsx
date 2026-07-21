import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Components/Contact";
import Appointment from "./Components/Appointment";
import ScrollToTop from "./Components/ScrollToTop";

import Menu from "./Components/Menu";
import Footer from "./Components/Footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/contact"
          element={
            <>
              <Menu />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route
          path="/appointment"
          element={
            <>
              <Menu />
              <Appointment />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;