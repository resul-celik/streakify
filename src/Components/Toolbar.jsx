import { horizontal, vertical,horizontalRight,horizontalLeft,verticalUp,verticalDown } from './Icons';
import { useContext } from 'react';
import { Context } from './ContextProvider';

const Toolbar = ({mobile, iconSize}) => {

  const { direction, setDirection } = useContext(Context);

  const ToolbarButton = ({icon}) => {

    const switchCase = (param) => {
      switch (param) {
        case 'l': 
          return horizontalLeft(iconSize)
        case 'h': 
          return horizontal(iconSize)
        case 'r': 
          return horizontalRight(iconSize)
        case 'u': 
          return verticalUp(iconSize)
        case 'v': 
          return vertical(iconSize)
        case 'd': 
          return verticalDown(iconSize)
      
        default:
          return horizontal(iconSize)
      }
    }

    const tooltipText = (param) => {
      switch (param) {
        case 'l': 
          return 'Horizontal Left'
        case 'h': 
          return 'Horizontal'
        case 'r': 
          return 'Horizontal Right'
        case 'u': 
          return 'Vertical Up'
        case 'v': 
          return 'Vertical'
        case 'd': 
          return 'Vertical Down'
      
        default:
          return 'Horizontal'
      }
    }

    return (
      <div 
        className={`tool ${direction == icon ? 'tool--active' : ''}`}
        onClick={e => setDirection(icon)}
        >
          <div className="tooltip">{tooltipText(icon)}</div>
        {
          switchCase(icon)
        }
      </div>
    )
  }

  

  return (
      <div className={`toolbar ${mobile ? 'mobile-toolbar' : ''}`}>
          <ToolbarButton icon='l' />
          <ToolbarButton icon='h' />
          <ToolbarButton icon='r' />
          <div className={`divider ${mobile ? 'div-v' : 'div-h'}`}></div>
          <ToolbarButton icon='u' />
          <ToolbarButton icon='v' />
          <ToolbarButton icon='d' />
      </div>
  )
}

export  {Toolbar}