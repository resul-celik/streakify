import { horizontal, vertical,horizontalRight,horizontalLeft,verticalUp,verticalDown } from './Icons';
import { useContext } from 'react';
import { Context } from './ContextProvider';

const Toolbar = ({mobile, iconSize}) => {

  const { direction, setDirection } = useContext(Context);

    return (
        <div className={`toolbar ${mobile ? 'mobile-toolbar' : ''}`}>
            <div 
              className={`tool ${direction == 'l' ? 'tool--active' : ''}`}
              onClick={e => setDirection('l')}
              >
              {horizontalLeft(iconSize)}
            </div>
            <div 
              className={`tool ${direction == 'h' ? 'tool--active' : ''}`}
              onClick={e => setDirection('h')}
              >
              {horizontal(iconSize)}
            </div>
            <div 
              className={`tool ${direction == 'r' ? 'tool--active' : ''}`}
              onClick={e => setDirection('r')}
            >
              {horizontalRight(iconSize)}
            </div>

            <div 
              className={`tool ${direction == 'u' ? 'tool--active' : ''}`}
              onClick={e => setDirection('u')}
            >
              {verticalUp(iconSize)}
            </div>

            <div
              className={`tool ${direction == 'v' ? 'tool--active' : ''}`}
              onClick={e => setDirection('v')}
            >
              {vertical(iconSize)}
            </div>
            
            <div 
              className={`tool ${direction == 'd' ? 'tool--active' : ''}`}
              onClick={e => setDirection('d')}
            >
              {verticalDown(iconSize)}
            </div>
        </div>
    )
}

export  {Toolbar}