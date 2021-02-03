import React from 'react'
// import { Canvas } from './Canvas'
// import { ClearCanvasButton } from './ClearCanvasButton';
import ZoneImage from '../src/assets/img/zone.png';
import CanvasDraw from "react-canvas-draw";

import './App.css'


function App() {
  return (
    <>
       <div className="Board">
     <CanvasDraw
     
    lazyRadius="0"
     canvasWidth="100%"
     brushColor="black"
     brushRadius="1"
     imgSrc={ZoneImage} />
    
      </div>
    </>
    
  );
}

export default App;
