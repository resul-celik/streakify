import { useEffect, useRef, useState } from "react"

const Item = ({image,id}) => {

    const handleMobileTaps = (e) => {
        if (e.target.closest('.item').getAttribute('data-active') == 'false') {
            e.target.closest('.item').querySelector('.item-image-1').classList.remove('image-active')
            e.target.closest('.item').setAttribute('data-active', 'true')
            e.target.closest('.item').querySelector('.icon').style.transform = 'scaleX(-1)'
        } else {
            e.target.closest('.item').querySelector('.item-image-1').classList.add('image-active')
            e.target.closest('.item').setAttribute('data-active', 'false')
            e.target.closest('.item').querySelector('.icon').style.transform = 'scaleX(1)'
        }
    }

    const handleItemOriginal = (e) => {

        e.target.closest('.item').querySelector('.item-image-1').classList.remove('image-active')
        e.target.closest('.item').querySelector('.caption').innerHTML = `Photo by <a href=${image.author.link} target="_blank">${image.author.name}</a> on <a href=${image.publisher.link} target="_blank">${image.publisher.name}</a>`
    }

    const handleItemStreakified = (e) => {
        e.target.closest('.item').querySelector('.item-image-1').classList.add('image-active')
        e.target.closest('.item').querySelector('.caption').innerHTML = image.title
    }

    return (
        
        window.innerWidth < 768 ? (
            <div className="item" key={id} data-active='false' onClick={handleMobileTaps}>
                <div className="replace-button">
                    <div className="icon replace-image"></div>
                </div>
                <div className="caption">{image.title}</div>
                <img src={image.streakified} className="item-image-1 image-active" alt={image.alt.streaked} />
                <img src={image.original} className="item-image-2" alt={image.alt.original} />
            </div>
        ) : (
            <div className="item" key={id} onMouseEnter={handleItemOriginal} onMouseLeave={handleItemStreakified}>
                <div className="caption">{image.title}</div>
                <img src={image.streakified} className="item-image-1 image-active" alt={image.alt.streaked} />
                <img src={image.original} className="item-image-2" alt={image.alt.original} />
            </div>
        )
        
    )
}

export default Item