import Nav from './components/navigation_bar/Nav';
import About from './components/about/about';
import Services from './components/services/services';
import Home from './components/Home/Home';
import Work from './components/work/Work';
import Career from './components/Career/career';
import Blog from './components/Blog/Blog';
import Talk from "./components/let's_talk/Talk"
import Footer from './components/footer/footer';
import Case from './components/case_study/case_study';
import Craft from './components/Craft/craft'
import Empathy from './components/empathy/empathy';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home /> }/>
          <Route exact path="/about" element={<About /> }/>
          <Route exact path="/work" element={<Work /> }/>
          <Route exact path="/career" element={<Career /> }/>
          <Route exact path="/blog" element={<Blog /> }/>
          <Route exact path="/services" element={<Services /> }/>
          <Route exact path="/let's_talk" element={<Talk /> }/>
          <Route exact path="/case_study" element={<Case/>}/>
          <Route exact path="/empathy" element={<Empathy/>}/>
          <Route exact path="/craft" element={<Craft/>}/>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
