import React, { useState } from "react";
import "./home.css";

//framer motion
import { motion } from "framer-motion";

//route link
import { Link } from "react-router-dom";

//context 
import {useSpaceTourism} from '../../Context/SpaceTourism'

function Home() {
  //context to component
  const {setSelectedPage } = useSpaceTourism();
  //states
  const [displayHover, setDisplayHover] = useState(false);


  return (
    <div className="home">
      <div className="homeWrapper">
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1.5 }}
          className="homeLeft"
        >
          <h3 className="homeLeftTravelTitle heading5 regularWeight whiteText">
            SO, YOU WANT TO TRAVEL TO
          </h3>
          <h1 className="homeLeftSpaceText heading1 regularWeight whiteText">
            SPACE
          </h1>
          <p className="homeLeftSpaceDesc bodyText lightPurpleText">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 100,
            delay: 0.5,
          }}
          className="homeRight"
          onMouseEnter={() => setDisplayHover(true)}
          onMouseLeave={() => setDisplayHover(false)}
        >
          <motion.div
            initial={{ width: 275, height: 275 }}
            animate={
              displayHover
                ? { width: 450, height: 450 }
                : { width: 275, height: 275 }
            }
            exit={{ width: 275, height: 275 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 40,
            }}
            className="homeRightHover whiteBg"
          ></motion.div>
          <Link className="exploreLink" to={'destination'} onClick={() => setSelectedPage('destination')}>
            <div className="homeRightRound whiteBg">
              <p className="homeRightRoundText">EXPLORE</p>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
