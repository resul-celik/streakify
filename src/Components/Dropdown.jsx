import { useEffect, useRef } from "react"

const Dropdown = ({text,size,content,onClick}) => {

    const dropdownRef = useRef()

    const sizes = {
        MD: 'dropdown-md',
        LG: 'dropdown-lg'
    }

    let classes = 'dropdown'

    // Size

    if (size) {
        classes += ' '+sizes[size]
    } else {
        classes += ' '+sizes['MD']
    }

    const handleClick = (e) => {

        let content = e.target.closest('.dropdown-wrapper').querySelector('.dropdown-content')

        if (content.getAttribute('data-active') == 'false') {
            content.setAttribute('data-active', 'true')
            content.classList.add('dropdown-content--active')
            e.target.querySelector('.icon').classList.remove('chevron-down')
            e.target.querySelector('.icon').classList.add('chevron-up')
        } else {
            content.setAttribute('data-active', 'false')
            content.classList.remove('dropdown-content--active')
            e.target.querySelector('.icon').classList.add('chevron-down')
            e.target.querySelector('.icon').classList.remove('chevron-up')
        }
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                let content = dropdownRef.current.closest('.dropdown-wrapper').querySelector('.dropdown-content')
                content.setAttribute('data-active', 'false')
                content.classList.remove('dropdown-content--active')
                dropdownRef.current.querySelector('.icon').classList.add('chevron-down')
                dropdownRef.current.querySelector('.icon').classList.remove('chevron-up')
            }
          };
      
          document.addEventListener('mouseup', handleClickOutside);
          document.addEventListener('touchend', handleClickOutside);
      
      
          return () => {
            document.removeEventListener('mouseup', handleClickOutside);
            document.removeEventListener('touchend', handleClickOutside);
          };
    }, [])

    return (
        <div className="dropdown-wrapper">
            <div className={classes} ref={dropdownRef} onClick={onClick ? onClick : handleClick}>
                {text}
                <div className="icon chevron-down"></div>
            </div>
            <div className="dropdown-content" data-active='false'>
                {content ? content() : <></>}
            </div>
        </div>
    )
}

export default Dropdown