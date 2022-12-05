import './App.css';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Home from './pages/Home';
import { useRef } from 'react';
import Explore from './pages/Explore';


function App() {
//   const disableScroll = () => {
//     console.log("hi")
//     document.addEventListener('wheel', this.preventDefault, {
//       passive: false,
//     })
// }
  return (
    <>
    {/* <Home/> */}
    <Explore />
  </>
  );
}

export default App;
