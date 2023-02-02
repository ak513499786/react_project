import Nav from './components/navigation_bar/Nav';
import Footer from './components/footer/footer';
import About from './components/about/about';
import Services from './components/services/services';
import Home from './components/Home/Home';
import Work from './components/work/Work';
import Career from './components/Career/career';
import Blog from './components/Blog/Blog';
import Talk from "./components/let's_talk/Talk"
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home /> }/>
          <Route exact path="/about" element={<About /> }/>
          <Route exact path="/work" element={<Work /> }/>
          <Route exact path="/career" element={<Career /> }/>
          <Route exact path="/blog" element={<Blog /> }/>
          <Route exact path="/services" element={<Services /> }/>
          <Route exact path="/let's_talk" element={<Talk /> }/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
