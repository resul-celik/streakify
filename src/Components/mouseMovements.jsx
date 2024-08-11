function mouseMovements (x,y,mouseEvents,line,cursorRef,canvasWrapper,direction) {
    let parentOffsetX = canvasWrapper.current.offsetLeft
    let parentOffsetY = canvasWrapper.current.offsetTop

    if (direction == 'v' || direction == 'u' || direction == 'd') {
      cursorRef.current.style.top = 'calc(50% - 25px)'
      line.current.style.left = 0
      cursorRef.current.style.left = mouseEvents ? `${x - parentOffsetX}px` : `${x}px`
      line.current.style.top = mouseEvents ? `${y - parentOffsetY}px`  : `${y}px`
      
    } else {
      cursorRef.current.style.left = 'calc(50% - 25px)'
      line.current.style.top = '0'
      line.current.style.left = mouseEvents ? `${x - parentOffsetX}px` : `${x}px`
      cursorRef.current.style.top = mouseEvents ? `${y - parentOffsetY}px`  : `${y}px`
    }
}


export {mouseMovements}