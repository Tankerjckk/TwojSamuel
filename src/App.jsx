import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MusicPage from "./pages/MusicPage";
import OmniePage from "./pages/OmniePage";
import Kontakt from "./pages/Kontakt";

import CustomCursor from "./components/CustomCursor";
import NoiseOverlay from "./components/NoiseOverlay";

import useLenisScroll from "./hooks/useLenisScroll";

import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  useLenisScroll();

  return (
    <>

    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/muzyka" element={<MusicPage />} />
        <Route path="/omnie" element={<OmniePage />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>

      <NoiseOverlay />
      <CustomCursor />
    </>
  );
}