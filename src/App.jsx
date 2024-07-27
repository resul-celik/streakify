import { useState } from 'react';
import './Style.css';
import Streakifiy from './Streakify';
import Upload from './Upload';

function App() {
  const [image, setImage] = useState(null);
  return (
    <>
        {image ? (
          <Streakifiy image={image} />
        ) : (
          <Upload setImage={setImage} />
        )}
    </>
  );
}

export default App;
