import { useState } from 'react';
import './Style.css';
import Streakifiy from './Streakify';
import Upload from './Upload';

function App() {
  const [image, setImage] = useState(null);
  const [loading,setLoading] = useState(true)
  const maxHeight = (window.innerHeight - (60 + 48)) / 2;
  const maxWidth = window.innerWidth - 40;

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
               />
            </div>
          </div>
        ) : (
          <Upload setImage={setImage} setLoading={setLoading} loading={loading} />
        )}
    </>
  );
}

export default App;
