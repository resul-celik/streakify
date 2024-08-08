import { useState, useRef, useEffect } from 'react';
import p5 from 'p5';


const Streakifiy = ({image,setLoading,loading,maxWidth,maxHeight,toolbar}) => {

  const canvasRef = useRef();
  const previewRef = useRef();
  const originalRef = useRef();
  const finalRef = useRef();
  const line = useRef()
  const cursorRef = useRef()
  const canvasWrapper = useRef();
  const [direction,setDirection] = useState('h')

  function resizeImage(maxW, maxH, imgW, imgH) {
    
      let ratio = 0;
      let newWidth = 0;
      let newHeight = 0;
      ratio = maxH / imgH;
      newWidth = imgW * ratio;
  
      if (newWidth > maxW) {
        ratio = maxW / imgW;
        newWidth = maxW;
        newHeight = imgH * ratio;
      } else {
        newHeight = maxH;
      }
  
      return { width: newWidth, height: newHeight };
  }

  useEffect(() => {

    const streakify = (p, img, mouseX, mouseY, size) => {
      // Resize the image to fit within the canvas
      p.image(img, 0, 0, size.width, size.height);
      // Loop through each row
      
      if (direction == 'v') {
        for (let i = 0; i < size.width; i++) {
          // Get the color of the pixel at (mouseX, i) on the resized image
          const c = img.get(Math.floor(i * (img.width / size.width)), Math.floor(mouseY * (img.height / size.height)));
        
          // Set the fill color
          p.fill(c);
          p.noStroke();
      
          // Draw a line for the entire row with the color
          p.rect(i, 0, 1, size.height);
        }
      } else {
        for (let i = 0; i < size.height; i++) {
          // Get the color of the pixel at (mouseX, i) on the resized image
          const c = img.get(Math.floor(mouseX * (img.width / size.width)), Math.floor(i * (img.height / size.height)));
        
          // Set the fill color
          p.fill(c);
          p.noStroke();
      
          // Draw a line for the entire row with the color
          p.rect(0, i, size.width, 1);
        }
      }
    
      // Redraw the canvas
      p.redraw();
    };
    
      if (originalRef.current) {
        originalRef.current.remove();
      }
      if (finalRef.current) {
        finalRef.current.remove();
      }

      if (image) {
        let resizedImage;
        let size
  
        // Original image
        originalRef.current = new p5((p) => {
          let img;
  
          p.setup = () => {
            img = p.loadImage(image, () => {
              size = resizeImage(maxWidth, maxHeight, img.width, img.height);
              p.createCanvas(size.width, size.height);
              img.resize(size.width, size.height);
              resizedImage = img;
              p.image(img, 0, 0, size.width, size.height);
              cursor(size.width / 2,size.height / 2,false)
            });
          };
  
          p.mousePressed = () => {
            if (p.mouseX >= 0 && p.mouseX <= p.width && p.mouseY >= 0 && p.mouseY <= p.height) {
              streakify(finalRef.current, resizedImage, p.mouseX, p.mouseY,size);
            }
          };
        }, canvasRef.current);
        
        // Final image
        finalRef.current = new p5((p) => {
          let img;
  
          p.setup = () => {
            img = p.loadImage(image, () => {
              p.createCanvas(size.width, size.height);
              streakify(p,resizedImage, size.width / 2,size.height / 2,size)
              setLoading(false)
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
    
    const downloadFinal = () => {
      const randomName = 'streakify_' + Math.floor(Math.random() * 9999);
      finalRef.current.saveCanvas(finalRef.current.canvas, randomName, 'jpg');
    };
    
    function deleteCurrent(e) {
      window.location.reload();
    }

      function cursor (x,y,mouseEvents) {
          let parentOffsetX = canvasWrapper.current.offsetLeft
          let parentOffsetY = canvasWrapper.current.offsetTop

          console.log(direction)

          if (direction == 'v') {
            cursorRef.current.style.top = 'calc(50% - 25px)'
            line.current.style.left = 0
            cursorRef.current.style.left = mouseEvents ? `${x - parentOffsetX}px` : `${x}px`
            line.current.style.top = mouseEvents ? `${y - parentOffsetY}px`  : `${y}px`
            
          } else {
            cursorRef.current.style.left = 'calc(50% - 25px)'
            line.current.style.top = '0'
            line.current.style.left = mouseEvents ? `${x - parentOffsetX}px` : `${x}px`
            cursorRef.current.style.top = mouseEvents ? `${y - parentOffsetY}px`  : `${y}px`
          }
      }
      
      function streak (e) {
        let mouseX = e.clientX;
        let mouseY = e.clientY;

        cursor(mouseX,mouseY,true)
        
      }


    return (
      <>
        {
          toolbar && (
            <div className="toolbar">
              <div 
                className={`tool ${direction == 'h' ? 'tool--active' : ''}`}
                onClick={e => setDirection('h')}
                >
                <div className="icon direction-horizontal"></div>
              </div>
              <div
                className={`tool ${direction == 'v' ? 'tool--active' : ''}`}
                onClick={e => setDirection('v')}
              >
                <div className="icon direction-vertical"></div>
              </div>
              <div className="seperator"></div>
              <div className="tool" onClick={downloadFinal}>
                <div className="icon download"></div>
              </div>
              <div className="seperator"></div>
              <div className="tool" onClick={deleteCurrent}>
                <div className="icon trash"></div>
              </div>
            </div>
          )
        }
        
        <div className={`canvas-wrapper ${loading ? 'placeholder' : ''}`} ref={canvasWrapper}>
            <div className="tag">Original</div>
            <div className="canvas original" onMouseMove={streak} ref={canvasRef}>
                {
                  direction == 'v' ?
                  (
                    <div className='line line-horizontal' ref={line}>
                        <div className="cursor" ref={cursorRef}></div>
                    </div>
                  )
                  :
                  (
                    <div className='line' ref={line}>
                        <div className="cursor" ref={cursorRef}></div>
                    </div>
                  )
                }
                
            </div>
        </div>
        <div className={`canvas-wrapper ${loading ? 'placeholder' : ''}`}>
            <div className="tag">Streakified</div>
            <div className="canvas final" ref={previewRef}></div>
        </div>
      </>
    )
}

export default Streakifiy