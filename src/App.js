import About from "./components/about/about";
import Services from "./components/services/services";
import Home from "./components/Home/Home";
import Work from "./components/work/Work";
import Career from "./components/Career/career";
import Blog from "./components/Blog/Blog";
import Talk from "./components/letsTalk/Talk";
import Case from "./components/caseStudy/case_study";
import Empathy from "./components/empathy/empathy";
import ScrollToTop from "./components/scrollToTop/scrollToTop";
import Consulting from "./components/consultingAndStrategy/consulting";
import UX from "./components/userExperience/UX";
import DM from "./components/digitalMarketing/digitalmarketing";
import PD from "./components/productDevelopment/productdevelopment";
import AnimatedCursor from "react-animated-cursor";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Client from "./components/Home/client";
import "./index.css";
import "./main.css";

function App() {
  return (
    <div>
      {/* <AnimatedCursor color="255, 255, 255" /> */}
      <div className="react-animated-cursor ">
        <AnimatedCursor
          innerSize={0}
          outerSize={8}
          color="225, 225, 225"
          outerAlpha={5}
          innerScale={0}
          outerScale={0.5}
          hasBlendMode={true}
          outerStyle={{
            mixBlendMode: "exclusion",
          }}
        />
      </div>

      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/" element={<Client />} /> */}
          <Route exact path="/about" element={<About />} />
          <Route exact path="/work" element={<Work />} />
          <Route exact path="/career" element={<Career />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/consultingandstrategy" element={<Consulting />} />
          <Route exact path="/userexperience" element={<UX />} />
          <Route exact path="/productdevelopment" element={<PD />} />
          <Route exact path="/digitalmarketing" element={<DM />} />
          <Route exact path="/let's_talk" element={<Talk />} />
          <Route exact path="/case_study" element={<Case />} />
          <Route exact path="/empathy" element={<Empathy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
