import About from "./components/about/about";
import Services from "./components/services/services";
import Home from "./components/home/Home";
import Work from "./components/work/Work";
import Career from "./components/career/career";
import Blog from "./components/blog/Blog";
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

function App() {
  return (
    <div>
      {/* <AnimatedCursor color="255, 255, 255"/> */}
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="225, 225, 225"
        outerAlpha={0.2}
        innerScale={1.5}
        outerScale={0.2}
      />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
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
