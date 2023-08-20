import { BrowserRouter } from "react-router-dom";

import { Introduction, About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, EarthCanvas } from "./components";

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

          {/* <Tech />
          <Works />
          <Feedbacks /> */}

          <div
            className="relative z-0">
              <Contact />
          </div>
      </div>
    </BrowserRouter>
  )
}

export default App
