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
import Cursor from "react-special-cursor";
import Scrollbar from 'smooth-scrollbar';

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Client from "./components/Home/client";
// import Dummy from "./components/Home/Dummy";

function App() {
  window.scroll({
    behavior: "smooth",
  });
  Scrollbar.init(document.querySelector('#root'));
  return (
    <div>
      <AnimatedCursor
        innerSize={8}
        outerSize={0}
        color="255, 255, 255"
        outerAlpha={0}
        innerScale={1.2}
        outerScale={5}
        hasBlendMode={true}
        innerStyle={{
          mixBlendMode: "exclusion",
        }}
      />
      <Cursor>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route exact path="/" element={<Dummy />} /> */}
            <Route exact path="/about" element={<About />} />
            <Route exact path="/work" element={<Work />} />
            <Route exact path="/career" element={<Career />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/services" element={<Services />} />
            <Route
              exact
              path="/consultingandstrategy"
              element={<Consulting />}
            />
            <Route exact path="/userexperience" element={<UX />} />
            <Route exact path="/productdevelopment" element={<PD />} />
            <Route exact path="/digitalmarketing" element={<DM />} />
            <Route exact path="/let's_talk" element={<Talk />} />
            <Route exact path="/case_study" element={<Case />} />
            <Route exact path="/empathy" element={<Empathy />} />
          </Routes>
        </BrowserRouter>
      </Cursor>
    </div>
  );
}

export default App;
