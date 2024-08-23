const Options = ({options,setOption,selected}) => {

    function handleOptionClick(e) {
        setOption(e.target.getAttribute('data-id'))
    }
    
    return (
        <div className="options">
            {
                options.map((op,i) => {
                    return (
                        <div className="option" onClick={handleOptionClick} data-id={i} key={i}>
                            <div className="option-text">{op}</div>
                            {selected == i ? <div className="icon checkmark"></div> : <></>}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Options