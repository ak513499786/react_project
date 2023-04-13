import About from "./components/about/about";
import Services from "./components/services/services";
import Home from "./components/Home/Home";
import Work from "./components/work/Work";
import Career from "./components/Career/career";
import Blog from "./components/Blog/Blog";
import Talk from "./components/letsTalk/Talk";
import Empathy from "./components/Bloginnerpages/empathy/empathy";
import Trend from "./components/Bloginnerpages/trends/Trends";
import Bing from "./components/Bloginnerpages/Bing/Trends";
import Brand from "./components/Bloginnerpages/Branded/Trends";
import Change from "./components/Bloginnerpages/Changing/Trends";
import Design from "./components/Bloginnerpages/Design/Trends";
import Discovery from "./components/Bloginnerpages/Discovery/Trends";
import Gesalt from "./components/Bloginnerpages/Gesalt/Trends";
import Listen from "./components/Bloginnerpages/Listening/Trends";
import MVP  from "./components/Bloginnerpages/MVP/Trends";
import NCR from "./components/Bloginnerpages/NCR/Trends";
import Reactblog from "./components/Bloginnerpages/React/Trends";
import SVM from "./components/Bloginnerpages/SVM/Trends";
import Story from "./components/Bloginnerpages/Story/Trends";
import UXblog from "./components/Bloginnerpages/UX/Trends";
import ScrollToTop from "./components/scrollToTop/scrollToTop";
import Consulting from "./components/consultingAndStrategy/consulting";
import UX from "./components/userExperience/UX";
import DM from "./components/digitalMarketing/digitalmarketing";
import PD from "./components/productDevelopment/productdevelopment";
import AnimatedCursor from "react-animated-cursor";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  window.scroll({
    behavior: "smooth",
  });
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
          <Route exact path="/empathy-in-UX" element={<Empathy />} />
          <Route exact path="/digital-marketing-trends-2023" element={<Trend />} />
          <Route exact path="/bing-vs-google" element={<Bing/>} />
          <Route exact path="/Branded" element={<Brand/>} />
          <Route exact path="/changing" element={<Change/>} />
          <Route exact path="/Discovery" element={<Discovery />} />
          <Route exact path="/Gesalt" element={<Gesalt/>} />
          <Route exact path="/Listening" element={<Listen/>} />
          <Route exact path="/most-viable-product" element={<MVP/>} />
          <Route exact path="/No-code-revolution" element={<NCR/>} />
          <Route exact path="/react-vs-flutter" element={<Reactblog/>} />
          <Route exact path="/Design" element={<Design/>} />
          <Route exact path="/shopify-vs-magento" element={<SVM/>} />
          <Route exact path="/Story" element={<Story/>} />
          <Route exact path="/UX" element={<UXblog/>} />
        </Routes>
      </BrowserRouter>
      {/* </Cursor> */}
    </div>
  );
}

export default App;
