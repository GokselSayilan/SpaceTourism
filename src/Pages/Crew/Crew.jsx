import React, { useEffect, useState } from "react";
import "./crew.css";

//animation
import { motion, AnimatePresence } from "framer-motion";

function Crew({ crew }) {
  const [filteredCrew, setFilteredCrew] = useState(null);
  const [selectedStage, setSelectedStage] = useState(0);
  const stagesArr = [0, 1, 2, 3];

  useEffect(() => {
    let temp = crew[selectedStage];
    setFilteredCrew(temp);
  }, [selectedStage]);

  return (
    <div className="crew">
      {filteredCrew !== null && (
        <div className="crewWrapper">
          <div className="crewLeft">
            <div className="crewLeftMainTitle whiteText">
              <p className="crewLeftMainTitleNumber boldWeight heading5">02</p>
              <p className="crewLeftMainTitleText regularWeight heading5">
                Meet Your Crew
              </p>
            </div>
            <div className="crewInfo">
              <h3 className="crewInfoMission heading4 whiteText regularWeight">
                {filteredCrew.role}
              </h3>
              <h2 className="crewInfoFullName heading3 whiteText regularWeight">
                {filteredCrew.name}
              </h2>
              <div className="crewInfoDesc bodyText lightPurpleText">
                {filteredCrew.bio}
              </div>
            </div>
            <div className="crewLeftStages">
              {stagesArr.map((stage, index) => (
                <div
                  className="crewLeftStage"
                  onClick={() => setSelectedStage(stage)}
                  key={"stage" + index}
                >
                  <AnimatePresence>
                    {selectedStage === stage && (
                      <motion.div
                        key={"StageFill" + index}
                        initial={{ opacity: 0, scale: 1 }}
                        animate={{ opacity: 1, scale: 1.2 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="crewLeftStageSelected"
                      ></motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          <motion.div className="crewRight">
            <motion.img
              src={filteredCrew.images.png}
              key={filteredCrew.name}
              initial={{ bottom: -500 }}
              animate={{ bottom: 0 }}
              exit={{ bottom: -500 }}
              transition={{ type: "spring", stiffness: 400, damping: 80 }}
              alt="crewPhoto"
              className="crewRightImg"
            />
            <hr className="mobileSep" />
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Crew;
