const Cursor = ({line,cursor, direction}) => {

    return (
        <>
            {
                direction == 'v' || direction == 'u' || direction == 'd' ?
                (
                  <div className='line line-horizontal' style={{top: '50%', left: 0}} ref={line}>
                      <div className="cursor" style={{top: 'calc(50% - 25px)', left: '50%'}} ref={cursor}>
                      {direction == 'u' | direction == 'v' ? <div className="dashes d-u"></div> : <></>}
                      {direction == 'd' | direction == 'v' ? <div className="dashes d-d"></div> : <></>}
                      </div>
                  </div>
                )
                :
                (
                  <div className='line' style={{top: 0,left: '50%'}} ref={line}>
                      <div className="cursor" style={{top: '50%', left: 'calc(50% - 25px)'}} ref={cursor}>
                        {direction == 'l' | direction == 'h' ? <div className="dashes d-l"></div> : <></>}
                        {direction == 'r' | direction == 'h' ? <div className="dashes d-r"></div> : <></>}
                      </div>
                  </div>
                )
              }
        </>
    )
}

export default Cursor