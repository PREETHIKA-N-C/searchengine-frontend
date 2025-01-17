import './App.css';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Home from './pages/Home';
import MarketPlaceHome from './pages/MarketPlaceHome';
import Pipelines from './pages/Pipelines';
import { useRef } from 'react';
import Explore from './pages/Explore';
import Product from './pages/Product';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import SideDrawer from './components/SideDrawer';


function App() {
//   const disableScroll = () => {
//     console.log("hi")
//     document.addEventListener('wheel', this.preventDefault, {
//       passive: false,
//     })
// }
  return (
    <>
    <BrowserRouter>
    <SideDrawer/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="Explore" element={<Explore/>} />
    <Route path="Product" element={<Product/>} />
    <Route path="MarketPlaceHome" element={<MarketPlaceHome/>}/>
    <Route path="Pipelines" element={<Pipelines/>}/>
    </Routes>
    
    </BrowserRouter>
  </>
  );
}

export default App;
