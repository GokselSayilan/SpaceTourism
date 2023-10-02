import React, { useEffect, useState } from "react";
import "./technology.css";

//animation
import { motion, AnimatePresence, transform } from "framer-motion";

//context
import { useScreen } from "../../Context/ScreenContext";

function Technology({ technology }) {
  const { isDesktop } = useScreen();

  const [selectedStage, setSelectedStage] = useState(0);
  const [filteredData, setFilteredData] = useState(null);
  const stageIndex = [0, 1, 2];

  useEffect(() => {
    let temp = technology[selectedStage];
    setFilteredData(temp);
  }, [selectedStage]);

  return (
    <div className="technology">
      {filteredData !== null && (
        <div className="technologyWrapper">
          <div className="technologyLeft">
            <div className="technologyLeftMainTitle whiteText">
              <p className="technologyLeftMainTitleNumber boldWeight heading5">
                03
              </p>
              <p className="technologyLeftMainTitleText regularWeight heading5">
                SPACE LAUNCH 101
              </p>
            </div>
            <div className="technologyLeftContent">
              <div className="technologyLeftContentStages">
                {stageIndex.map((stage) => (
                  <div
                    key={filteredData.name + stage}
                    onClick={() => setSelectedStage(stage)}
                    className={`technologyLeftContentStage heading4 ${
                      selectedStage === stage
                        ? "blackText borderNone"
                        : "whiteText"
                    }`}
                  >
                    {stage + 1}{" "}
                    <motion.div
                      animate={{ opacity: [0, 1], scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      className={`technologyLeftContentStageInside  ${
                        selectedStage === stage ? "whiteBg" : ""
                      }`}
                    ></motion.div>
                  </div>
                ))}
              </div>
              <div className="technologyLeftContentInfo">
                <p className="technologyLeftContentInfoTerminologyText lightPurpleText navText">
                  THE TERMINOLOGY…
                </p>
                <p className="technologyLeftContentInfoTitle whiteText heading3">
                  {filteredData.name}
                </p>
                <p className="technologyLeftContentInfoDesc lightPurpleText bodyText">
                  {filteredData.description}
                </p>
              </div>
            </div>
          </div>
          <div className="technologyRight">
            <AnimatePresence mode="wait">
              <motion.img
                key={filteredData.name + "Image"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                exit={{ opacity: 0, y: -10 }}
                src={
                  isDesktop
                    ? filteredData.images.portrait
                    : filteredData.images.landscape
                }
                alt="vehicleImg"
                className="technologyRightImg"
              />
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
}

export default Technology;
