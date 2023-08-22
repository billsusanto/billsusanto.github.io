import { BrowserRouter } from "react-router-dom";

import { Introduction, About, Contact, Experience, Navbar, StarsCanvas, SocialMedia } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div 
        className="relative z-0 bg-black">
          <div className="relative z-0">
            <Introduction/>
          </div>
          <div>
            <Navbar />
            {/* <Hero /> */}
          </div>
          <div className="relative z-0">
            <About />
          </div>
          <div className="relative z-0 bg-black">
            <Experience />
            <StarsCanvas />
          </div>

          <div
            className="relative z-0">
              <Contact />
          </div>

          <div>
            <SocialMedia />
          </div>
      </div>
    </BrowserRouter>
  )
}

export default App
