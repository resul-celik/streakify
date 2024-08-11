import { horizontal, vertical,horizontalRight,horizontalLeft,verticalUp,verticalDown } from './Icons';

const Toolbar = ({setDirection, direction, final}) => {

    /* Download File */
    
    const downloadFinal = () => {
        const randomName = 'streakify_' + Math.floor(Math.random() * 9999);
        final.current.saveCanvas(final.current.canvas, randomName, 'jpg');
    };

    /* Delete */
    
    function deleteCurrent(e) {
        window.location.reload();
    }

    return (
        <div className="toolbar">
            <div 
              className={`tool ${direction == 'l' ? 'tool--active' : ''}`}
              onClick={e => setDirection('l')}
              >
              {horizontalLeft()}
            </div>
            <div 
              className={`tool ${direction == 'h' ? 'tool--active' : ''}`}
              onClick={e => setDirection('h')}
              >
              {horizontal(30)}
            </div>
            <div 
              className={`tool ${direction == 'r' ? 'tool--active' : ''}`}
              onClick={e => setDirection('r')}
            >
              {horizontalRight()}
            </div>

            <div 
              className={`tool ${direction == 'u' ? 'tool--active' : ''}`}
              onClick={e => setDirection('u')}
            >
              {verticalUp()}
            </div>

            <div
              className={`tool ${direction == 'v' ? 'tool--active' : ''}`}
              onClick={e => setDirection('v')}
            >
              {vertical(30)}
            </div>
            
            <div 
              className={`tool ${direction == 'd' ? 'tool--active' : ''}`}
              onClick={e => setDirection('d')}
            >
              {verticalDown()}
            </div>
            
            
            <div className="seperator"></div>
            <div className="tool" onClick={downloadFinal}>
              <div className="icon download"></div>
            </div>
            <div className="seperator"></div>
            <div className="tool" onClick={deleteCurrent}>
              <div className="icon trash"></div>
            </div>
        </div>
    )
}

export default Toolbar