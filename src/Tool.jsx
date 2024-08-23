import { useState, useRef } from "react"
import Header from "./Components/Header"
import Canvas from "./Canvas"
import Button from "./Components/Buttons"
import Options from "./Options"
import Dropdown from "./Components/Dropdown"
import {download} from './Components/download'
import { Toolbar } from "./Components/Toolbar"

const Tool = ({image,direction,setDirection,cursor,setCursor,loading,setLoading}) => {

    const [option, setOption] = useState('0')
    const ops = ['Original', '1080p', '720p']
    const downloadRef = useRef();
    const [downloading,setDownloading] = useState(false);

    /* Download File */

    function downloadFinal() {
        download(image,downloadRef,cursor,direction,setLoading,setDownloading)
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
            console.log('asd')
            if (wrapper.getAttribute('data-active')  == 'false') {
                wrapper.classList.add('option-wrapper--active')
                wrapper.setAttribute('data-active', 'true')
            } else {
                wrapper.classList.remove('option-wrapper--active')
                wrapper.setAttribute('data-active', 'false')
            }
        }
    }

    /**
     {
                    window.outerWidth < 768 ? (
                        <Dropdown text={ops[option]} size='LG' onClick={openMobileOptions}/>
                    ) : (
                        <Dropdown text={ops[option]} size='LG' content={dropdownContent}/>
                    )
                }
     */

    function headerRight() {
        return (
            <>
                
                <Button text='Download' size='LG' hierarchy='PRI' onClick={downloadFinal} />
            </>
        )
    }

    return (
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
                    direction={direction}
                    setDirection={setDirection}
                    cursor={cursor}
                    setCursor={setCursor}
                    loading={loading}
                    setLoading={setLoading}
                />
            </div>
            {window.outerWidth < 768 ? (
                <div className="mobile-toolbar-wrapper">
                <Toolbar setDirection={setDirection} direction={direction} mobile={true} iconSize={32}/>
            </div>
            ): (
                <></>
            )}
            
            <div className={`message${downloading ? ' message-active' : ''}`}>Downloading...</div>
            <div className="download-final" ref={downloadRef}></div>
        </div>
        
    )
}

export default Tool