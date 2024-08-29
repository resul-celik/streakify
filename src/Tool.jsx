import { useState, useRef, useEffect, useContext } from 'react';
import Header from "./Components/Header"
import Canvas from "./Canvas"
import Button from "./Components/Buttons"
import Options from "./Options"
import Dropdown from "./Components/Dropdown"
import {download} from './Components/download'
import { Toolbar } from "./Components/Toolbar"
import { Context } from './Components/ContextProvider';

const Tool = ({image}) => {

    const [option, setOption] = useState('0')
    const ops = ['Original', '1080p', '720p']
    const downloadRef = useRef();
    const [downloading,setDownloading] = useState(false);
    const {direction,setDirection} = useContext(Context);
    const {position,setPosition} = useContext(Context);

    /* Download File */

    function downloadFinal() {
        download(image,downloadRef,setDownloading,direction,position,option)
    }

    /* Delete */
    
    function deleteCurrent(e) {
        window.location.reload();
    }

    function dropdownContent () {
        return <Options options={ops} setOption={setOption} selected={option} />
    }

    function headerLeft() {
        return <Button text='Download' size='LG' hierarchy='SEC' icon='xmark' onClick={deleteCurrent} />
    }

    function openMobileOptions () {

        let wrapper = document.querySelector('.option-wrapper')

        if (wrapper) {
            if (wrapper.getAttribute('data-active')  == 'false') {
                wrapper.classList.add('option-wrapper--active')
                wrapper.setAttribute('data-active', 'true')
            } else {
                wrapper.classList.remove('option-wrapper--active')
                wrapper.setAttribute('data-active', 'false')
            }
        }
    }

    function headerRight() {
        return (
            <>
                {
                    window.outerWidth < 768 ? (
                        <Dropdown text={ops[option]} size='LG' onClick={openMobileOptions}/>
                    ) : (
                        <Dropdown text={ops[option]} size='LG' content={dropdownContent}/>
                    )
                }
                <Button text='Download' size='LG' hierarchy='PRI' onClick={downloadFinal} />
            </>
        )
    }

    return (
        <>
            <div className="streakify">
                <div className="option-wrapper" data-active='false'>
                    <Options options={ops} setOption={setOption} selected={option} />
                    <div className="darkness" onClick={openMobileOptions}></div>
                </div>
                <Header leftCol={headerLeft} rightCol={headerRight} />
                <div className="wrapper">
                    <Canvas 
                        image={image}
                        toolbar={window.outerWidth < 768 ? false : true}
                    />
                </div>
                {window.outerWidth < 768 ? (
                    <div className="mobile-toolbar-wrapper">
                    <Toolbar mobile={true} iconSize={32}/>
                </div>
                ): (
                    <></>
                )}
                
                <div className={`message${downloading ? ' message-active' : ''}`}>Downloading...</div>
                
            </div>
            <div className="download-final" ref={downloadRef}></div>
        </>
    )
}

export default Tool