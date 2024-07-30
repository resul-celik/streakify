import { useState, useRef, useEffect } from 'react';
import p5 from 'p5';
import defaultImage from './assets/default-image.jpg'

const Streakifiy = ({image,setLoading,loading}) => {

  const canvasRef = useRef();
  const previewRef = useRef();
  const originalRef = useRef();
  const finalRef = useRef();
  const toolbar = useRef();
  let toolbarHeight = 0;
  if (toolbar.current) toolbarHeight = toolbar.current.offsetHeight
  const maxHeight = (window.innerHeight - (50 - toolbarHeight)) / 2;
  const maxWidth = window.innerWidth - 40;

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
    
      if (originalRef.current) {
        originalRef.current.remove();
      }
      if (finalRef.current) {
        finalRef.current.remove();
      }
      
  
      if (image) {
        let resizedImage;
  
        // Original image
        originalRef.current = new p5((p) => {
          let img;
  
          p.setup = () => {
            img = p.loadImage(image, () => {
              let size = resizeImage(maxWidth, maxHeight, img.width, img.height);
              p.createCanvas(size.width, size.height);
              img.resize(size.width, size.height);
              resizedImage = img;
              p.image(img, 0, 0, size.width, size.height);
            });
          };
  
          p.mousePressed = () => {
            if (p.mouseX >= 0 && p.mouseX <= p.width && p.mouseY >= 0 && p.mouseY <= p.height) {
              streakify(finalRef.current, resizedImage, p.mouseX, p.mouseY);
            }
          };
        }, canvasRef.current);
  
        // Final image
        finalRef.current = new p5((p) => {
          let img;
  
          p.setup = () => {
            img = p.loadImage(image, () => {
              let size = resizeImage(maxWidth, maxHeight, img.width, img.height);
              p.createCanvas(size.width, size.height);
              p.image(resizedImage, 0, 0, size.width, size.height);
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
    }, [image]);
    
    const downloadFinal = () => {
      const randomName = 'streakify_' + Math.floor(Math.random() * 9999);
      finalRef.current.saveCanvas(finalRef.current.canvas, randomName, 'jpg');
    };
    
    const streakify = (p, img, mouseX, mouseY) => {
      // Resize the image to fit within the canvas
      let size = resizeImage(maxWidth, maxHeight, img.width, img.height);
      p.image(img, 0, 0, size.width, size.height);
    
      // Loop through each row
      for (let i = 0; i < size.height; i++) {
        // Get the color of the pixel at (mouseX, i) on the resized image
        const c = img.get(Math.floor(mouseX * (img.width / size.width)), Math.floor(i * (img.height / size.height)));
    
        // Set the fill color
        p.fill(c);
        p.noStroke();
    
        // Draw a line for the entire row with the color
        p.rect(0, i, size.width, 1);
      }
    
      // Redraw the canvas
      p.redraw();
    };
    
    function deleteCurrent(e) {
      window.location.reload();
    }
    
    function streak (e) {
  
      let line = document.querySelector('.original').querySelector('.line')
      let cursor = document.querySelector('.original').querySelector('.cursor')
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let parentOffsetX = document.querySelector('.canvas-wrapper').offsetLeft
      let parentOffsetY = document.querySelector('.canvas-wrapper').offsetTop

      line.style.left = `${mouseX - parentOffsetX}px`
      cursor.style.top = `${mouseY - parentOffsetY}px`
      
    }

    return (
      <>
        <div className="toolbar" ref={toolbar}>
          <div className="tool" onClick={downloadFinal}>
            <div className="icon download"></div>
          </div>
          <div className="seperator"></div>
          <div className="tool" onClick={deleteCurrent}>
            <div className="icon trash"></div>
          </div>
        </div>
        <div className="canvas-wrapper">
            <div className="tag">Original</div>
            <div className={`canvas original ${loading ? 'placeholder' : ''}`} onMouseMove={streak} ref={canvasRef}>
                <div className="line">
                    <div className="cursor"></div>
                </div>
            </div>
        </div>
        <div className="canvas-wrapper">
            <div className="tag">Final</div>
            <div className={`canvas final ${loading ? 'placeholder' : ''}`} ref={previewRef}></div>
        </div>
      </>
    )
}

export default Streakifiy