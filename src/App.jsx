import { useState } from 'react';
import './Style.css';
import Streakifiy from './Streakify';
import Upload from './Upload';

function App() {
  const [image, setImage] = useState(null);
  const [loading,setLoading] = useState(true)
  return (
    <>
        {image ? (
          <div className="streakify">
            <div className="wrapper">
              <Streakifiy image={image} setLoading={setLoading} loading={loading} />
            </div>
          </div>
        ) : (
          <Upload setImage={setImage} setLoading={setLoading} />
        )}
    </>
  );
}

export default App;
