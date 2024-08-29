import { useState, useRef, useEffect, useContext } from 'react';
import p5 from 'p5';
import { mouseMovements } from './Components/mouseMovements';
import Cursor from './Components/Cursor';
import {Toolbar} from './Components/Toolbar';
import { streakify } from './Components/Streakify';
import { Context } from './Components/ContextProvider';

const Canvas = ({image,toolbar}) => {

  const canvasRef = useRef();
  const previewRef = useRef();
  const originalRef = useRef();
  const finalRef = useRef();
  const line = useRef()
  const cursorRef = useRef()
  const canvasWrapper = useRef();
  const { direction, setDirection } = useContext(Context);
  const { position, setPosition } = useContext(Context);
  const { loading, setLoading } = useContext(Context);
  
  useEffect(() => {

    /* Canvases */
    
    if (originalRef.current) {
      originalRef.current.remove();
    }
    if (finalRef.current) {
      finalRef.current.remove();
    }

    if (image.image) {
      setLoading(true)
      let resizedImage;

      // Original image
      originalRef.current = new p5((p) => {
        
        let img;

        p.setup = () => {
          
          img = p.loadImage(image.image, () => {
            p.createCanvas(image.resizedSize.width, image.resizedSize.height);
            //img.resize(image.resized.width, image.resized.height);
            resizedImage = img;
            
            p.image(img, 0, 0, image.resizedSize.width, image.resizedSize.height);
            mouseMovements(image.resizedSize.width / 2,image.resizedSize.height / 2, false, line, cursorRef, canvasWrapper, direction)
          });
        };

        p.mousePressed = () => {
          if (p.mouseX >= 0 && p.mouseX <= p.width && p.mouseY >= 0 && p.mouseY <= p.height) {
            streakify(finalRef.current, resizedImage, p.mouseX, p.mouseY,image.resizedSize,direction);
            setPosition({x: p.mouseX, y: p.mouseY})
          }
        };
      }, canvasRef.current);
      
      // Final image
      finalRef.current = new p5((p) => {
        let img;

        p.setup = () => {
          img = p.loadImage(image.image, () => {
            p.createCanvas(image.resizedSize.width, image.resizedSize.height);
            streakify(
              p,
              resizedImage,
              image.resizedSize.width / 2,
              image.resizedSize.height / 2,
              image.resizedSize,
              direction
            )
            setPosition({x: image.resizedSize.width / 2, y: image.resizedSize.height / 2})
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

  return (
    <>
      {
        toolbar && (
          <div className="toolbar-wrapper">
            <Toolbar mobile={false} iconSize={28} />
          </div>
        )
      }
      
      <div className="canvases">
        <div className={`canvas-wrapper original placeholder`} ref={canvasWrapper} style={{width: image.resizedSize.width, height: image.resizedSize.height}}>
            <div className="tag">Original</div>
            <div className="canvas original" onMouseMove={streak} ref={canvasRef}>
                <Cursor line={line} cursor={cursorRef} />
            </div>
        </div>
        <div className={`canvas-wrapper streakified placeholder`} style={{width: image.resizedSize.width, height: image.resizedSize.height}}>
            <div className="tag">Streakified</div>
            <div className="canvas final" ref={previewRef}></div>
        </div>
      </div>
      
    </>
  )
}

export default Canvas