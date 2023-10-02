import { createContext, useContext, useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const ScreenContext = createContext();

export const useScreen = () => useContext(ScreenContext);

export const ScreenProvider = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useState("desktop");

  // Determine screen size breakpoints for responsive design.
  const isMobile = useMediaQuery({ maxWidth: 500 });
  const isTablet = useMediaQuery({ minWidth: 500, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  // only when component mount rendering
  useEffect(() => {
    isMobile && setCurrentScreen("mobile");
    isTablet && setCurrentScreen("tablet");
    isDesktop && setCurrentScreen("desktop");
  }, []);

  return (
    <ScreenContext.Provider
      value={{ isDesktop, isTablet, isMobile, currentScreen }}
    >
      {children}
    </ScreenContext.Provider>
  );
};
