import { useEffect, useRef, useState, createContext } from "react";
import Button from "./Components/Buttons";
import Dropdown from "./Components/Dropdown";
import Options from "./Options";
import s1 from './assets/s-1.jpg'
import s2 from './assets/s-2.jpg'
import s3 from './assets/s-3.jpg'
import s4 from './assets/s-4.jpg'
import s5 from './assets/default-image.jpg'
import s6 from './assets/photo-original-01.png'
import s7 from './assets/photo-original-03.png'
import { fitToScreen } from "./Components/resizeImage";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Item from "./Components/Item";
import { randomImages } from "./Components/RandomImages";

import { useContext } from "react";
import { Context } from "./Components/ContextProvider"


const ComponentTest = () => {

    const { direction, setDirection } = useContext(Context);
    

    return (
        <div className="page">
           <div className="discover">
            {console.log(direction)}
           </div>
            
        </div>
    )
}

export default ComponentTest