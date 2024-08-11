import { useState, useRef, useEffect } from 'react';
import p5 from 'p5';
import { mouseMovements } from './Components/mouseMovements';
import Cursor from './Components/Cursor';
import Toolbar from './Components/Toolbar';


const Tool = ({image,toolbar}) => {

  const canvasRef = useRef();
  const previewRef = useRef();
  const originalRef = useRef();
  const finalRef = useRef();
  const line = useRef()
  const cursorRef = useRef()
  const canvasWrapper = useRef();
  const [direction,setDirection] = useState('h');
  const [loading,setLoading] = useState(true);
  
  useEffect(() => {

    const streakify = (p, img, mouseX, mouseY, size) => {
      
      p.image(img, 0, 0, size.width, size.height);

      if (direction == 'v' || direction == 'u' || direction == 'd') {
        for (let i = 0; i < size.width; i++) {
          // Get the color of the pixel at (mouseX, i) on the resized image
          const c = img.get(Math.floor(i * (img.width / size.width)), Math.floor(mouseY * (img.height / size.height)));
        
          p.fill(c);
          p.noStroke();

          if (direction == 'u') {
            p.rect(i, 0, 1, mouseY);
          } else if (direction == 'd') {
            p.rect(i, mouseY, 1, img.height - mouseY);
          } else {
            p.rect(i, 0, 1, size.height);
          }
        }
      } else {
        for (let i = 0; i < size.height; i++) {
          // Get the color of the pixel at (mouseX, i) on the resized image
          const c = img.get(Math.floor(mouseX * (img.width / size.width)), Math.floor(i * (img.height / size.height)));
        
          p.fill(c);
          p.noStroke();

          if (direction == 'l') {
            p.rect(0, i, mouseX, 1);
          } else if (direction == 'r') {
            p.rect(mouseX, i, img.width - mouseX, 1);
          } else {
            p.rect(0, i, size.width, 1);
          }
        }
        
      }

      //p.filter(p.BLUR,1)
    
      p.redraw();
      setLoading(false)
    };

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
            p.createCanvas(image.width, image.height);
            img.resize(image.width, image.height);
            resizedImage = img;
            
            p.image(img, 0, 0, image.width, image.height);
            mouseMovements(image.width / 2,image.height / 2,false,line,cursorRef,canvasWrapper,direction)
          });
        };

        p.mousePressed = () => {
          if (p.mouseX >= 0 && p.mouseX <= p.width && p.mouseY >= 0 && p.mouseY <= p.height) {
            streakify(finalRef.current, resizedImage, p.mouseX, p.mouseY,image);
          }
        };
      }, canvasRef.current);
      
      // Final image
      finalRef.current = new p5((p) => {
        let img;

        p.setup = () => {
          img = p.loadImage(image.image, () => {
            p.createCanvas(image.width, image.height);
            streakify(p,resizedImage, image.width / 2,image.height / 2,image)
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
          <Toolbar setDirection={setDirection} direction={direction} final={finalRef} />
        )
      }
      
      <div className={`canvas-wrapper placeholder`} ref={canvasWrapper} style={{width:image.width, height: image.height}}>
          <div className="tag">Original</div>
          <div className="canvas original" onMouseMove={streak} ref={canvasRef}>
              <Cursor line={line} cursor={cursorRef} direction={direction} />
          </div>
      </div>
      <div className={`canvas-wrapper placeholder`} style={{width:image.width, height: image.height}}>
          <div className="tag">Streakified</div>
          <div className="canvas final" ref={previewRef}></div>
      </div>
    </>
  )
}

export default Tool