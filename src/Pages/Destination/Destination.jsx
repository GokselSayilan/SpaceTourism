import React, { useEffect, useState } from "react";
import "./destination.css";

//animation
import { motion,AnimatePresence } from "framer-motion";

//context 
import {useScreen} from '../../Context/ScreenContext'

function Destination({destinations}) {
  const {isDesktop} = useScreen()

  const [selectedDestination, setSelectedDestination] = useState("moon");
  const [selectedData, setSelectedData] = useState(null);

  const destinationsArr = ["moon", "mars", "europa", "titan"];


  useEffect(() => {
    let temp = destinations.filter(
      (destination) =>
        destination.name.toLowerCase() === selectedDestination.toLowerCase()
    );

    setSelectedData(temp[0]);

   
  }, [selectedDestination]);

  return (
    <div className="destination">
      {selectedData !== null && (
        <div className="destinationWrapper">
          <motion.div animate={isDesktop && {x:[-400,0]}} transition={{duration:1}} className="destinationLeft">
            <div className="destinationLeftTitle">
              <p className="destinationLeftTitleNumber whiteText heading5">
                01
              </p>
              <h2 className="destinationLeftTitleText whiteText heading5 regularWeight">
                Pick your destination
              </h2>
            </div>
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedData.name}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                src={selectedData.images.png}
                alt={selectedData.name + "png"}
                className="destinationLeftImg"
              />
            </AnimatePresence>
          </motion.div>
          <motion.div animate={isDesktop ? {x:[400,0]} : {y:[400,0]}} transition={{duration:1}} className="destinationRight">
            <div className="destinationRightStages">
              {destinationsArr.map((destination) => (
                <div
                  className="destinationRightStage"
                  onClick={() => setSelectedDestination(destination)}
                  key={destination}
                >
                  <h3 className="destinationRightStageTitle whiteText regularWeight">
                    {destination}
                  </h3>
                  {destination.toLowerCase() ===
                    selectedDestination.toLowerCase() && (
                    <motion.div
                      layoutId="destinationUnderline"
                      className="destinationRightStageTitleUnderline whiteBg"
                    ></motion.div>
                  )}
                </div>
              ))}
            </div>
            <div className="destinationRightMainInfo">
              <h1 className="destinationRightMainInfoTitle heading2 whiteText regularWeight ">
                {selectedData.name}
              </h1>
              <p className="destinationRightMainInfoDesc bodyText lightPurpleText">
                {selectedData.description}
              </p>
            </div>
            <hr className="destinationRightSep" />
            <div className="destinationRightSubInfo">
              <div className="destinationRightSubInfoDistance">
                <p className="destinationRightSubInfoTitle subHeading2 lightPurpleText">
                  AVG. DISTANCE
                </p>
                <p className="destinationRightSubInfoValue subHeading1 whiteText">
                  {selectedData.distance}
                </p>
              </div>
              <div className="destinationRightSubInfoTravelTime">
                <p className="destinationRightSubInfoTitle subHeading2 lightPurpleText">
                  Est. travel time
                </p>
                <p className="destinationRightSubInfoValue subHeading1 whiteText">
                  {selectedData.travel}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Destination;
