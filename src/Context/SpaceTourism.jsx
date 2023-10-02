import { createContext, useContext, useState } from "react";

const SpaceTourismContext = createContext();

export const useSpaceTourism = () => useContext(SpaceTourismContext);

export const SpaceTourismProvider = ({ children }) => {
  const [selectedPage, setSelectedPage] = useState("home");

  return (
    <SpaceTourismContext.Provider value={{ selectedPage, setSelectedPage }}>
      {children}
    </SpaceTourismContext.Provider>
  );
};
