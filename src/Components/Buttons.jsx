const Button = ({text,size,hierarchy,onClick,className,icon}) =>{

    const sizes = {
        MD: 'button-md',
        LG: 'button-lg',
        XL: 'button-xl'
    }

    const hierarchies = {
        PRI: 'button-primary',
        SEC: 'button-secondary'
    }

    let classes = 'button'

    // Size

    if (size) {
        classes += ' '+sizes[size]
    } else {
        classes += ' '+sizes['MD']
    }

    // Hierarchy

    if (hierarchy) {
        classes += ' '+hierarchies[hierarchy]
    } else {
        classes += ' '+hierarchies['PRI']
    }

    // Icon only

    if (icon) {
        classes += ` icon-only${size ? '--'+size : '--MD'}`
    }

    // Class names

    if (className) {
        classes += ' '+className
    }

    return (
        <button className={classes} onClick={onClick}>
            {
                icon ? <div className={`icon ${icon}`}></div> : text
            }
        </button>
    )
}

export default Button