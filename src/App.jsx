import { useEffect, useState, useRef } from 'react';
import './Style.css';
import Tool from './Tool';
import Canvas from './Canvas';
import Home from './Home';
import Page from './Components/Page';
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { content } from "./Components/Content"
import { fitToScreen, resizeImage } from './Components/resizeImage';
import Upload from './Upload';
import ComponentTest from './ComponentTest';
import Header from './Components/Header';

function App() {
  const [image, setImage] = useState(null);
  const [rawImage, setRawImage] = useState(null);
  const [direction,setDirection] = useState('h');
  const [loading,setLoading] = useState(true);
  
  const [cursor, setCursor] = useState({
    x: 0,
    y: 0
  })

  const maxHeight = (window.innerHeight - (60 + 48)) / 2;
  const maxWidth = window.innerWidth - 40;

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
          original: {
            width: size.width,
            height: size.height
          },
          resized: {
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
          <>
            <Tool
                image={image}
                toolbar={true}
                direction={direction}
                setDirection={setDirection}
                cursor={cursor}
                setCursor={setCursor}
                loading={loading}
                setLoading={setLoading}
            />
          </>
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
            <Route path={`/test`} element={<ComponentTest />} />
          </Routes>
        </Router>
      )}
    </>
  ); 
}

export default App;
