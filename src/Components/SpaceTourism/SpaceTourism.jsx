import React, { useEffect, useState } from "react";
import "./spaceTourism.css";

//data
import Data from "../../data.json";

//animation
import { motion, useAnimation } from "framer-motion";

//routing
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

//components
import Navbar from "../Navbar/Navbar";
import Home from "../../Pages/Home/Home";
import Destination from "../../Pages/Destination/Destination";
import Crew from "../../Pages/Crew/Crew";
import Technology from "../../Pages/Technology/Technology";

//context
import { useScreen } from "../../Context/ScreenContext";
import { useSpaceTourism } from "../../Context/SpaceTourism";

function SpaceTourism() {
  const { currentScreen } = useScreen();
  const { selectedPage } = useSpaceTourism();

  //animation
  const controls = useAnimation(); // useAnimation hook'u ekledik

  useEffect(() => {
    // selectedPage değiştiğinde animasyonu başlat
    controls.start({ opacity: [1, 0.97, 1] });
  }, [selectedPage]);


  return (
    <Router>
      <div className="spaceTourism">
        <motion.img
          animate={controls} // controls'u burada kullanın
          transition={{ duration: 1 }}
          src={`assets/${selectedPage}/background-${selectedPage}-${currentScreen}.jpg`}
          alt="homeBg"
          className="homeBg"
        />

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/destination"
            element={<Destination destinations={Data.destinations} />}
          />
          <Route path="/crew" element={<Crew crew={Data.crew} />} />
          <Route
            path="/technology"
            element={<Technology technology={Data.technology} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default SpaceTourism;
