import SpaceTourism from "./Components/SpaceTourism/SpaceTourism";

//context
import { ScreenProvider } from "./Context/ScreenContext";
import { SpaceTourismProvider } from "./Context/SpaceTourism";


function App() {
  return (
      <ScreenProvider>
        <SpaceTourismProvider>
          <div className="app">
            <SpaceTourism />
          </div>
        </SpaceTourismProvider>
      </ScreenProvider>
  );
}

export default App;
