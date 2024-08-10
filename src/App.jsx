import { useEffect, useState } from 'react';
import './Style.css';
import Streakifiy from './Streakify';
import Home from './Home';
import Page from './Components/Page';
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { content } from "./Components/Content"
import { resizeImage } from './Components/resizeImage';
import Upload from './Upload';

function App() {
  const [image, setImage] = useState(null);
  const [rawImage, setRawImage] = useState(null);
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
        let resized = resizeImage(maxWidth,maxHeight,size.width,size.height);
        setImage({image: rawImage, width: resized.width, height: resized.height})
      }).catch(error => {
        console.error('Error loading image:', error);
      })
    }

  }, [rawImage])


  return (
    <>
      {image ? (
        <div className="streakify">
          <div className="wrapper">
            <Streakifiy image={image} toolbar={true} />
          </div>
        </div>
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
