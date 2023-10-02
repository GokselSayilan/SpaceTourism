import React, { useRef, useEffect, useState } from "react";
import "./navbar.css";

//context
import { useSpaceTourism } from "../../Context/SpaceTourism";
import { useScreen } from "../../Context/ScreenContext";

//animation
import { AnimatePresence, motion } from "framer-motion";

//route links
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const { selectedPage, setSelectedPage } = useSpaceTourism();
  const { isMobile } = useScreen();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarLinks = ["home", "destination", "crew", "technology"];

  //catch url
  const location = useLocation();
  const [currentLocation, setCurrentLocation] = useState(location.pathname);

  useEffect(() => {
    setCurrentLocation(location.pathname);
  }, [location]);

  useEffect(() => {
    if (currentLocation === "/") {
      setSelectedPage("home");
    } else {
      let pathName = currentLocation.slice(1);
      setSelectedPage(pathName);
    }
  }, [currentLocation]);

  useEffect(() => {
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 300);
  }, [selectedPage]);

  //mobile menu design

  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navbarLeft">
          <motion.img
            animate={{
              x: [-100, 0],
              rotate: [0, 270],
            }}
            transition={{ type: "spring", stiffness: 200, damping: 80 }}
            src="assets/shared/logo.svg"
            alt="navbarLogo"
            className="navbarLeftLogo"
          />
          <motion.hr
            className="navbarLeftSep"
            animate={{ width: [0, 475] }}
            transition={{ type: "spring", stiffness: 200, damping: 80 }}
          />
        </div>
        <div className="navbarRight whiteText">
          <AnimatePresence mode="wait">
            {isMobile && (
              <motion.img
                key={isMenuOpen ? "closeIcon" : "openIcon"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                src={`assets/shared/${
                  isMenuOpen ? "icon-close.svg" : "icon-hamburger.svg"
                }`}
                alt="hamburgerMenu"
                className="navbarRightHamburgerMenu"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                key={"mobileSideBar"}
                initial={{ x: 400 }}
                animate={{ x: 0 }}
                exit={{ x: 400 }}
                transition={{ type: "spring", stiffness: 400, damping: 80 }}
                className="mobileSideBar"
              >
                <motion.ul className="mobileSideBarListItems">
                  {navbarLinks.map((link, index) => (
                    <Link className="mobilelinkRoute whiteText" to={link === "home" ? "/" : link} key={link + "mobileLink"}>
                    <motion.li
                      
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, delay: 0.3 * index }}
                      className="mobileSideBarListItem"
                      onClick={() => setSelectedPage(link)}
                      >
                      <p className="mobileSideBarListItemNumber heading5 boldWeight">
                        {"0" + index}
                      </p>
                      <p className="mobileSideBarListItemTitle heading5">
                        {link}
                      </p>
                      {selectedPage.toLowerCase() === link && (
                        <motion.div
                        layoutId="sideBarLine"
                        className="mobileSideBarListItemSideLine"
                        ></motion.div>
                        )}
                    </motion.li>
                        </Link> 
                  ))}
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            transition={{ staggerChildren: 0.77, delayChildren: 5 }}
            className="navbarRightLinks"
          >
            {navbarLinks.map((link, index) => (
              <motion.div
                animate={{ x: [-50, 0], opacity: [0, 1] }}
                transition={{ delay: index * 0.4, duration: 0.6 }}
                className="navbarRightLink"
                key={link}
                onClick={() => setSelectedPage(link)}
              >
                <Link
                  className="navbarRightLinkRoute whiteText"
                  to={link === "home" ? "/" : link}
                >
                  <p className="navTextValue navText boldWeight">0{index}</p>
                  <p className="navText regularWeight">{link}</p>
                </Link>
                {selectedPage === link && (
                  <motion.div
                    className="navbarRightLinkUnderline"
                    layoutId="navbarRightLinkUnderline"
                  ></motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
