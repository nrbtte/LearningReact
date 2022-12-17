import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "../components/Home.js";
import About from "../components/About.js";
import Gallery from "../components/Gallery";
import Picture from "../components/Picture";
import Error from "../components/Error";
import Mission from "../components/OurMission";
import SharedLayout from "../components/SharedLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="mission" element={<Mission />} />
          </Route>
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:pictureId" element={<Picture />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
