import './App.css';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Home from './pages/Home';
import { useRef } from 'react';


function App() {
//   const disableScroll = () => {
//     console.log("hi")
//     document.addEventListener('wheel', this.preventDefault, {
//       passive: false,
//     })
// }
  return (
    <div >
    
    <Home/>
   
  </div>
  );
}

export default App;
