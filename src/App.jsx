import { useState } from 'react';
import './Style.css';
import Streakifiy from './Streakify';
import Home from './Home';
import Page from './Components/Page';
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { content } from "./Components/Content"

function App() {
  const [image, setImage] = useState(null);
  const [loading,setLoading] = useState(true)
  const maxHeight = (window.innerHeight - (60 + 48)) / 2;
  const maxWidth = window.innerWidth - 40;

  let slug = new URL(window.location).pathname.match(/[^\/]+/g)


  return (
    <>
        {image ? (
          <div className="streakify">
            <div className="wrapper">
              <Streakifiy
                image={image}
                setLoading={setLoading}
                loading={loading}
                maxWidth={maxWidth}
                maxHeight={maxHeight}
                toolbar={true}
                direction={'vertical'}
               />
            </div>
          </div>
        ) : (
          <Router>
            <Routes>
              <Route path='/' element={<Home setImage={setImage} setLoading={setLoading} loading={loading} />} />
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
