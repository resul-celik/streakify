import { useState } from 'react';
import './Style.css';
import Streakifiy from './Streakify';
import Home from './Home';
import Page from './Components/Page';

function App() {
  const [image, setImage] = useState(null);
  const [loading,setLoading] = useState(true)
  const maxHeight = (window.innerHeight - (60 + 48)) / 2;
  const maxWidth = window.innerWidth - 40;

  let slug = new URL(window.location).pathname.match(/[^\/]+/g)

  return (
    <>
      {slug ? <Page page={slug[0]} /> : (
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
               />
            </div>
          </div>
        ) : (
          <Home setImage={setImage} setLoading={setLoading} loading={loading} />
        )}
        </>
      )}
      
        
    </>
  );
}

export default App;
