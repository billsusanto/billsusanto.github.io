import { BrowserRouter } from "react-router-dom";

import {
  Introduction,
  Contact,
  Experience,
  Navbar,
  StarsCanvas,
  SocialMedia,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <StarsCanvas />

        {/* Navbar positioned here will be visible based on scroll position */}
        <Navbar />

        <div className="relative z-10">
          <Introduction />
        </div>

        <div
          className="relative z-30"
          style={{ position: "relative", zIndex: 30 }}
        >
          <Experience />
        </div>

        <div className="relative z-10" style={{ marginTop: "-60px" }}>
          <Contact />
        </div>

        <div className="relative z-10">
          <SocialMedia />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
