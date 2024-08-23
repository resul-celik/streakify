import { useState, useRef, useEffect } from 'react';
import p5 from 'p5';
import { mouseMovements } from './Components/mouseMovements';
import Cursor from './Components/Cursor';
import {Toolbar} from './Components/Toolbar';
import { streakify } from './Components/Streakify';

const Canvas = ({image,toolbar,direction,setDirection,cursor,setCursor,loading,setLoading}) => {

  const canvasRef = useRef();
  const previewRef = useRef();
  const originalRef = useRef();
  const finalRef = useRef();
  const line = useRef()
  const cursorRef = useRef()
  const canvasWrapper = useRef();
  
  useEffect(() => {

    /* Canvases */
    
    if (originalRef.current) {
      originalRef.current.remove();
    }
    if (finalRef.current) {
      finalRef.current.remove();
    }

    if (image) {
      setLoading(true)
      let resizedImage;

      // Original image
      originalRef.current = new p5((p) => {
        
        let img;

        p.setup = () => {
          
          img = p.loadImage(image.image, () => {
            p.createCanvas(image.resized.width, image.resized.height);
            //img.resize(image.resized.width, image.resized.height);
            resizedImage = img;
            
            p.image(img, 0, 0, image.resized.width, image.resized.height);
            mouseMovements(image.resized.width / 2,image.resized.height / 2,false,line,cursorRef,canvasWrapper,direction)
          });
        };

        p.mousePressed = () => {
          if (p.mouseX >= 0 && p.mouseX <= p.width && p.mouseY >= 0 && p.mouseY <= p.height) {
            streakify(finalRef.current, resizedImage, p.mouseX, p.mouseY,image.resized, direction,setLoading);
            setCursor({x: p.mouseX, y: p.mouseY})
          }
        };
      }, canvasRef.current);
      
      // Final image
      finalRef.current = new p5((p) => {
        let img;

        p.setup = () => {
          img = p.loadImage(image.image, () => {
            p.createCanvas(image.resized.width, image.resized.height);
            streakify(
              p,
              resizedImage,
              image.resized.width / 2,
              image.resized.height / 2,
              image.resized,
              direction,
              setLoading
            )
            setCursor({x: image.resized.width / 2, y: image.resized.height / 2})
          });
        };
        
      }, previewRef.current);
    }
  
    return () => {
      if (originalRef.current) {
        originalRef.current.remove();
      }
      if (finalRef.current) {
        finalRef.current.remove();
      }
    };

  }, [image,direction]);
  
  /* Cursor */

  function streak (e) {
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    mouseMovements(mouseX,mouseY,true,line,cursorRef,canvasWrapper,direction)
    
  }

  console.log()

  return (
    <>
      {
        toolbar && (
          <Toolbar setDirection={setDirection} direction={direction} mobile={false} iconSize={28} />
        )
      }
      
      <div className={`canvas-wrapper original placeholder`} ref={canvasWrapper} style={{width:image.resized.width, height: image.resized.height}}>
          <div className="tag">Original</div>
          <div className="canvas original" onMouseMove={streak} ref={canvasRef}>
              <Cursor line={line} cursor={cursorRef} direction={direction} />
          </div>
      </div>
      <div className={`canvas-wrapper streakified placeholder`} style={{width:image.resized.width, height: image.resized.height}}>
          <div className="tag">Streakified</div>
          <div className="canvas final" ref={previewRef}></div>
      </div>
      
    </>
  )
}

export default Canvas