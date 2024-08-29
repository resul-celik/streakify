import { useEffect, useState, useRef, createContext } from 'react';
import './Style.css';
import Tool from './Tool';
import Home from './Home';
import Page from './Components/Page';
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { content } from "./Components/Content"
import { fitToScreen, resizeImage } from './Components/resizeImage';
import Upload from './Upload';
import { ContextProvider } from './Components/ContextProvider';


function App() {
  const [image, setImage] = useState(null);
  const [rawImage, setRawImage] = useState(null);
  

  let maxHeight = (window.innerHeight - 82) / 2;
  let maxWidth = window.innerWidth - 76;
  
  if (window.innerWidth < 768) {
    
    maxHeight = (window.innerHeight - (62 + 91)) / 2;
    maxWidth = window.innerWidth - 20;
  }


  function loadImage (raw) {
    return new Promise((resolve,reject) => {
      const img = new Image();
      img.onload = () => {
        resolve({width: img.width, height: img.height})
      }
      img.onerror = reject;
      img.src = raw
    })
  }

  useEffect(() => {

    if (rawImage) {
      loadImage(rawImage).then(size => {
        let resized = fitToScreen(maxWidth,maxHeight,size.width,size.height);
        setImage({
          image: rawImage,
          originalSize: {
            width: size.width,
            height: size.height
          },
          resizedSize: {
            width: resized.width,
            height: resized.height
          }
        }) 
      }).catch(error => {
        console.error('Error loading image:', error);
      })
    }

  }, [rawImage])

  return (
    <>
      {image ? (
          <ContextProvider>
            <Tool image={image} />
          </ContextProvider>
      ) : (
        <Router>
          <Routes>
            <Route path='/' element={
              <Home uploadForm={
                <Upload setImage={setRawImage} />
              } />}
            />
            <Route path={`/${content[0].slug}`} element={<Page page={`${content[0].slug}`} />} />
            <Route path={`/${content[1].slug}`} element={<Page page={`${content[1].slug}`} />} />
            <Route path={`/${content[2].slug}`} element={<Page page={`${content[2].slug}`} />} />
          </Routes>
        </Router>
      )}
    </>
  ); 
}

export default App;
